# SpaceCompany Open Issues 分诊报告 (90 issues, 2026-10-08)

分诊标准:A=真 bug 且根因已定位到 file:line;B=疑似 bug 需运行时复现;C=建议/功能;D=支持问答/信息不足;E=wontfix/设计如此。

## 确认根因的真 bug(可直接开工)

### A1 离线收益模型缺陷 → 能量/等离子体/陨石"归零"大簇
涉及: #508 #496 #495 #485 #481 #477 #470 #467 #456 #444 #443 #446 #454 #460 #330 #328 #325 #314 #380

机制(三段证据链):
1. `game.js:203-213` `handleOfflineGains`: `refreshPerSec(1)` 只算**加载瞬间的瞬时 ps 向量**,然后 `gainResources(offlineTime)` 线性乘整个离线时长。
2. `resources.js:40-47` + `resource.js:117-134`: 每个资源独立 clamp 到 [0, storage],不做链式模拟。加载瞬间不满足条件的产线(如氢存量 < heater 单秒消耗,`core.js:279` 的 `getResourceAfterTick(..., 1) >= adjustment.c` 判定)整个离线期产出为 0 → 等离子体/陨石离线不涨(#444 #456 #446)。
3. `core.js:176 + 209` 不对称门控: 生产被 `!energyLow` 门控,但 `calculateEnergyUse` (core.js:58-105) 无条件计入全部消耗。energyLow 在 energy≤0 时闩锁,energyps<0 时永远无法自行恢复 → "能量 deficit 死螺旋"(#328 #325 #330 #454 #460);后台标签页 setInterval 被浏览器节流到 1 分钟一次(`game.js:266`),单 tick delta 巨大加剧该效应(#485 #470)。

### A2 星际建筑价格重载后重置
涉及: #441 #494 #480 #320
`interstellar.js:123-127`:
```js
for(var id in this.entries){
    if(id == "rocket" || "travel")continue;          // "travel" 恒真 → 循环体永不执行
    ...
    Game.interstellar[id].updateCost[entry];          // 索引函数对象,不是调用;应为 updateCost(entry)
}
```
load 后 IRS/通讯碟/火箭部件/曲率引擎价格全部显示首台基准价,再买一台才恢复。双重 bug 在同一循环。

### A3 现代存档路径是死代码
`resource.js:73` `for(var id in data.resources.i)` — 保存写的是 `r`(resource.js:61),load 迭代不存在的 `i`,v5 资源恢复循环永远不执行,unlocked 位随之丢失。目前全靠 legacyLoad(saving.js:201+)兜底。涉及 #467 #471,也是未来迁移的地雷。
关联: #404 nanoswarm 重载归零 — nanoswarm 不在 legacySave 字段列表(saving.js:3-196)且不在任何 v2 保存路径。

### A4 Stargate wonder 崩溃
`wonder.js:521` `Game.interstellar.getInterstellarData('stargate')` — `interstellarData.js:23-105` 顶层条目只有 comms/rocket/antimatter/travel/military+六派系,**没有 stargate** → `undefined.unlocked = true` 抛错(#429 的 "Cannot set property 'unlocked' of undefined")。crash 发生在状态变更之后(activated 已 push),所以重载后功能恢复,表现为一次性红屏。修法: 比照 `interstellar.js:104-108` 改指 travel+military。
关联族(wonder 完成态机): #489 wonders tab 不消失、#474 DM 升级按钮不可点(同一状态机下游)、#484 终局 wonder 资源显示。

### A5 设置持久化缺口
#421 摧毁按钮红色重载后还原、#442 Auto-EMC 不保存 — settings.save/load(settings.js:116-121)与 legacy 字段对不上,待逐项核对。

## 疑似 bug,需运行时复现(B)
#506 星际旅行进度重置(5 sphere 变 1,antimatter 上限回退) #473 火箭软锁 #478 二阶产量>五阶 #461 聚变堆单侧断料仍抽另一侧 #487 从主站进入丢档 #504 全量重置 #475 石油储量卡在 120 #498 等离子加热器吞能不产 #505 陨石打印机不产 #481 能量在 -1291/893 间跳变 #468 x/秒显示不准 #410 重生次数统计不回写 #431 舰队信息不刷新 #435 dyson 购买上限锁 1 #384 minerWoodCost 不吃 T1Price 折扣(#384 有代码链接,大概率真 bug,未核) #396 重生后研究状态 #399/#398/#397 v1 时期问题,部分可能仍在

## 建议/功能(C)
#507 衍生项目告知(ZhenHuanCompany) #492 水星资源文案 #491 燃油发电机 #490 绿色成就 #488 核弹 #486 可负担倒计时 #479 全局停产开关 #469 黑洞内容 #453 通关后内容 #483 日语翻译 #401 中文化 #331/#323/#316/#308 UI 改进 #315 容器化 #493 清理 PR #482 节奏抱怨(平衡)

## 支持问答/信息不足(D)
#459 #458 #450 #455 #334 #504(存档丢失但无环境信息)

## wontfix / 设计如此(E)
#451 控制台改内存(单机游戏无法防,不修) #318 加法 vs 乘法(DM boost 叠加方式,设计选择)

## 修复批次建议
- PR-1 (A2+A4,最干净): interstellar.js 循环双重 bug + wonder.js 'stargate' 条目
- PR-2 (A3): resource.js `.i`→`.r` + nanoswarm 持久化
- PR-3 (A5): settings 持久化缺口
- PR-4 (A1,最大): 离线收益改分段模拟(按 1 分钟步长迭代 refreshPerSec+gainResources)+ energyLow 恢复路径。行为变化最大,需单独评审
