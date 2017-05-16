Game.buildingData = (function(){

    var instance = {};


//Plasma
    instance.plasmaT1 = {
        name: 'Super-Heater',
        desc: 'The Super-Heater throws electricity at Hydrogen to turn it into a plasmatic substance.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'plasma',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -1000,
            'hydrogen': -10,
            'plasma': 1
        },
        cost: {
            'spaceMetal': 75000,
            'gem': 68000,
            'silicon': 59000
        }
    };

    instance.plasmaT2 = {
        name: 'Plasmatic Pit',
        desc: 'This contraption converts Helium into Plasma through firing intensive energy bolts at the gas cloud.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'plasma',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -8500,
            'helium': -80,
            'plasma': 10
        },
        cost: {
            'spaceMetal': 810000,
            'silicon': 720000,
            'meteorite': 970
        }
    };

//Uranium
    instance.uraniumT1 = {
        name: 'Grinder',
        desc: 'Pulverizes Uranium for easy transportation out of deep mineshafts.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'uranium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'uranium': 1
        },
        cost: {
            'spaceMetal': 4000,
            'titanium': 2000,
            'gold': 2000
        }
    };

    instance.uraniumT2 = {
        name: 'Cubic Teleposer',
        desc: 'This teleposes blocks of rock from far underground to the surface so that Uranium can be mined more easily.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'uranium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -40,
            'uranium': 9
        },
        cost: {
            'spaceMetal': 10000,
            'uranium': 80,
            'oil': 10000
        }
    };

    instance.uraniumT3 = {
        name: 'Uranium Enricher',
        desc: 'The Enricher increases the quality of uranium mined and thus allows more of the uranium in rocks to be used in your company.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'uranium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -180, 
            'uranium': 61
        },
        cost: {
            'spaceMetal': 21700,
            'titanium': 23000,
            'silicon': 13500
        }
    };

    instance.uraniumT4 = {
        name: 'Yellowcake Recycler',
        desc: 'Recycles used-up Uranium to provide the resources with a second use. This greatly increases the amount of Uranium you can use per second.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'uranium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -436, 
            'uranium': 235
        },
        cost: {
            'spaceMetal': 93100,
            'methane': 47000,
            'meteorite': 830
        }
    };

//Lava
    instance.lavaT1 = {
        name: 'Heat Resistant Crucible',
        desc: 'You can use a modified crucible to pick up lava and to store it for later use.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'lava',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'lava': 1
        },
        cost: {
            'spaceMetal': 4000,
            'gem': 7000
        }
    };

    instance.lavaT2 = {
        name: 'Lava Extractor',
        desc: 'This extracts lava from volcanoes automatically and quickly.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'lava',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -58,
            'lava': 7
        },
        cost: {
            'spaceMetal': 16000,
            'titanium': 14000,
            'silicon': 6000
        }
    };

    instance.lavaT3 = {
        name: 'Igneous Extruder',
        desc: 'Instead of going out and finding lava, it can be more convenient to make it yourself with heat and pressure.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'lava',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -237, 
            'lava': 43
        },
        cost: {
            'spaceMetal': 69000,
            'titanium': 57000,
            'silicon': 39000
        }
    };

    instance.lavaT4 = {
        name: 'Volcanic Veluptuator',
        desc: 'A melting pot of misery, pouring lava out from mined rock.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'lava',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -689, 
            'lava': 187
        },
        cost: {
            'spaceMetal': 298000,
            'gold': 121000,
            'meteorite': 750
        }
    };

/********************
 * Earth Resources  *
 ********************/
//Oil
    instance.oilT1 = {
        name: 'Small Pump',
        desc: 'Build a small pump to extract Oil from the ground.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'oil',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'oil': 1
        },
        cost: {
            'metal': 60,
            'gem': 20
        }
    };

    instance.oilT2 = {
        name: 'Pumpjack',
        desc: 'Pumpjacks are much bigger than small pumps and produce Oil on an industrial scale but they require a lot of Energy.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'oil',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-4,
            'oil': 10
        },
        cost: {
            'metal': 250,
            'gem': 80,
            'oil':50
        }
    };

    instance.oilT3 = {
        name: 'Oil Field',
        desc: 'Oil Fields are large open spaces, usually found in deserts where vast oil wells can be found under the ground.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'oil',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-17,
            'oil': 63
        },
        cost: {
            'spaceMetal': 2400,
            'titanium': 2700,
            'silicon':3900
        }
    };

    instance.oilT4 = {
        name: 'Offshore Rig',
        desc: 'Offshore Rigs are megastructures floating in the oceans, extracting Oil from under the sea-beds.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'oil',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-44,
            'oil': 246
        },
        cost: {
            'spaceMetal': 19400,
            'titanium': 16800,
            'meteorite':760
        }
    };

//Metal
    instance.metalT1 = {
        name: 'Miner',
        desc: 'Build a pickaxe for your miner.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'metal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'metal': 1
        },
        cost: {
            'metal': 10,
            'wood': 5
        }
    };

    instance.metalT2 = {
        name: 'Heavy Drill',
        desc: 'Heavy Drills mine Metal at mass.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'metal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-2, 
            'metal': 8
        },
        cost: {
            'metal': 160,
            'gem': 60,
            'oil':50
        }
    };

    instance.metalT3 = {
        name: 'Giga Drill',
        desc: 'Giga Drills extract Metal at colossal speeds.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'metal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-9, 
            'metal': 108
        },
        cost: {
            'spaceMetal': 2800,
            'gem': 3400,
            'silicon':4100
        }
    };

    instance.metalT4 = {
        name: 'Giga Drill',
        desc: 'Giga Drills extract Metal at colossal speeds.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'metal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-24, 
            'metal': 427
        },
        cost: {
            'spaceMetal': 29000,
            'gold': 18700,
            'meteorite':900
        }
    };

//Gem
    instance.gemlT1 = {
        name: 'Gem Miner',
        desc: 'Build an improved pickaxe to mine Gems.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'gem',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'gem': 1
        },
        cost: {
            'metal': 15,
            'gem': 10
        }
    };

    instance.gemT2 = {
        name: 'Advanced Drill',
        desc: 'Advanced Drills mine gem at mass. Because of the toughness of the drill needed it is slower than the heavy drill.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'gem',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-2, 
            'gem': 4
        },
        cost: {
            'metal': 120,
            'gem': 200,
            'oil':60
        }
    };

    instance.gemT3 = {
        name: 'Diamond Encrusted Drill',
        desc: 'The Diamond Encrusted Drill is one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'gem',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-15, 
            'gem': 89
        },
        cost: {
            'spaceMetal': 3400,
            'gem': 8000,
            'silicon':4500
        }
    };

    instance.gemT4 = {
        name: 'Carbyne Drill',
        desc: 'Carbyne Drills one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'gem',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-40, 
            'gem': 358
        },
        cost: {
            'spaceMetal': 21000,
            'gem': 27000,
            'meteorite':800
        }
    };

//Charcoal
    instance.charcoalT1 = {
        name: 'Woodburner',
        desc: 'Build an shovel for your woodburner.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'charcoal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'wood':-2,
            'charcoal': 1
        },
        cost: {
            'metal': 10,
            'wood': 5
        }
    };

    instance.charcoalT2 = {
        name: 'Furnace',
        desc: 'Furnaces use electric heaters to produce heat to turn Wood into Charcoal. Because of the increased heat, the process is more efficient.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'charcoal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-3,
            'wood':-6,
            'charcoal': 4
        },
        cost: {
            'metal': 80,
            'wood': 40,
            'oil':100
        }
    };

    instance.charcoalT3 = {
        name: 'Industrial Kiln',
        desc: 'These large kilns are much for effective than previous methods of creating charcoal and use less wood to make the same amount as a furnace.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'charcoal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-13,
            'wood': -56, 
            'charcoal': 53,
        },
        cost: {
            'spaceMetal': 3500,
            'gem': 6200,
            'silicon':3800
        }
    };

    instance.charcoalT4 = {
        name: 'Forest Fryer',
        desc: 'Forests? What forests?',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'charcoal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-34,
            'wood':-148, 
            'charcoal': 210,
        },
        cost: {
            'spaceMetal': 15800,
            'lava': 12500,
            'meteorite':560
        }
    };

//Wood
    instance.woodlT1 = {
        name: 'Woodcutter',
        desc: 'Build an axe for your woodcutter.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'wood',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'wood': 1
        },
        cost: {
            'metal': 10,
            'wood': 5
        }
    };

    instance.woodT2 = {
        name: 'Laser Cutter',
        desc: 'Laser Cutters slice trees (and fingers) quicker than axes and produce a lot more wood.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'wood',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-4, 
            'wood': 6
        },
        cost: {
            'metal': 50,
            'gem': 90,
            'oil':40
        }
    };

    instance.woodT3 = {
        name: 'Mass Deforester',
        desc: 'This machine is the reason we\'re losing our rainforests. At least we get lots of wood!',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'wood',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-16, 
            'wood': 74
        },
        cost: {
            'spaceMetal': 3000,
            'titanium': 2700,
            'silicon':2500
        }
    };

    instance.woodT4 = {
        name: 'Biomass Infuser',
        desc: 'Creates Wood using old, useless materials found everywhere on Earth by crushing them and packing what remains as densely as possible until it can be used as Wood again.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'wood',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-43, 
            'wood': 297
        },
        cost: {
            'spaceMetal': 16000,
            'oil': 31200,
            'meteorite':490
        }
    };

//Silicon
    instance.siliconT1 = {
        name: 'Empowered Blowtorch',
        desc: 'This type of blowtorch instantly turns sand into Silicon, but only on a small scale. To make it, extraterrestrial resources are required.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'silicon',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'silicon': 1
        },
        cost: {
            'spaceMetal': 150,
            'titanium': 30
        }
    };

    instance.siliconT2 = {
        name: 'Seaside Scorcher',
        desc: 'This tool almost melts parts of beaches to get silicon at a larger scale.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'silicon',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-18,
            'silicon': 9
        },
        cost: {
            'spaceMetal': 500,
            'gem': 1200,
            'oil': 1600
        }
    };

    instance.siliconT3 = {
        name: 'Beach Annihilator',
        desc: 'This weapon of mass destruction has been re-labelled and now hovers above coast-lines, or what is now left of them.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'silicon',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-53, 
            'silicon': 40
        },
        cost: {
            'spaceMetal': 3000,
            'gem': 8300,
            'silver': 2400
        }
    };

    instance.siliconT4 = {
        name: 'Desert Destroyer',
        desc: 'This large ship orbits around the planet, focused in the Sahara Desert, tearing up sand from Earth and turning it into Silicon under intense heat.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'silicon',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy':-138, 
            'silicon': 157
        },
        cost: {
            'spaceMetal': 20000,
            'silicon': 17700,
            'meteorite': 400
        }
    };

/******************************
 * Inner Planetary Resources  *
 ******************************/
//Space Metal
    instance.spaceMetalT1 = {
        name: 'Native Moon Worker',
        desc: 'Bribe local workers to mine your Space Metal.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'spaceMetal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'spaceMetal': 1
        },
        cost: {
            'gem': 500
        }
    };

    instance.spaceMetalT2 = {
        name: 'Low-Gravity Drill',
        desc: 'These drills practically float!',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'spaceMetal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -20,
            'spaceMetal': 10
        },
        cost: {
            'metal': 1000,
            'gem': 600,
            'oil': 400
        }
    };

    instance.spaceMetalT3 = {
        name: 'Moon Quarry',
        desc: 'This quarry tears up the surface of the moon so much that it can be seen from Earth.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'spaceMetal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -70, 
            'spaceMetal': 53
        },
        cost: {
            'spaceMetal': 8000,
            'gem': 5000,
            'silicon': 3500
        }
    };

    instance.spaceMetalT4 = {
        name: 'Planetary Excavator',
        desc: 'This large machine dives deep into the Earth to find large pools of Space-Metal found near the core. This is originally where the metal on the Moon comes from.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'spaceMetal',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -182, 
            'spaceMetal': 207
        },
        cost: {
            'titanium': 45000,
            'ice': 37000,
            'meteorite': 500
        }
    };

//Methane
    instance.methaneT1 = {
        name: 'Vacuum Cleaner',
        desc: 'Sucks in methane and cleans the planet at the same time!',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'methane',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'methane': 1
        },
        cost: {
            'spaceMetal': 50
        }
    };

    instance.methaneT2 = {
        name: 'Suction Excavator',
        desc: 'Sucks more than anything!',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'methane',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -16,
            'methane': 8
        },
        cost: {
            'spaceMetal': 10000,
            'gem': 800,
            'oil': 600
        }
    };

    instance.methaneT3 = {
        name: 'Space Cow Plantation',
        desc: 'These hold cows genetically modified to produce methane constantly',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'methane',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -49, 
            'methane': 37
        },
        cost: {
            'spaceMetal': 10000,
            'titanium': 9000,
            'silicon': 4100
        }
    };

    instance.methaneT4 = {
        name: 'Hydrothermal Vent',
        desc: 'Collect gas from deep sea vents on the ocean floor of Titan.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'methane',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -132, 
            'methane': 149
        },
        cost: {
            'spaceMetal': 52000,
            'helium': 47000,
            'meteorite': 390
        }
    };

//Titanium
    instance.titaniumT1 = {
        name: 'Explorer',
        desc: 'Hire explorers to search for Titanium on the surface, uncovered by winds on Mars.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'titanium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'titanium': 1
        },
        cost: {
            'gem': 1000
        }
    };

    instance.titaniumT2 = {
        name: 'Space Metal Drill',
        desc: 'These Space Metal Drills are extremely powerful, needed to mine out Titanium from inside Mars\' crust.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'titanium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -13,
            'titanium': 9
        },
        cost: {
            'spaceMetal': 200,
            'gem': 800,
            'oil': 1000
        }
    };

    instance.titaniumT3 = {
        name: 'Penta-Drill',
        desc: 'This is a mining machine modified to have 5 drills on its face. This allows for a massive increase in resources gained per second.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'titanium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -46, 
            'titanium': 49
        },
        cost: {
            'spaceMetal': 14000,
            'gem': 11000,
            'silicon': 5600
        }
    };

    instance.titaniumT4 = {
        name: 'Drill of Titans',
        desc: 'This mighty drill is said to have been wielded by Titans themselves, many milennia ago.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'titanium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -123, 
            'titanium': 197
        },
        cost: {
            'spaceMetal': 63000,
            'gold': 27000,
            'meteorite': 600
        }
    };

//Gold
    instance.goldT1 = {
        name: 'Rocket Droid',
        desc: 'Powered by Methane, this droid scouts the asteroids for gold deposits.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'gold',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'gold': 1
        },
        cost: {
            'gem': 200,
            'methane': 50
        }
    };

    instance.goldT2 = {
        name: 'Asteroid Destroyer',
        desc: 'Mines through asteroids to find Gold. It is much more effective than the simple droid.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'gold',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -19,
            'gold': 8
        },
        cost: {
            'spaceMetal': 500,
            'gem': 1500,
            'oil': 1000
        }
    };

    instance.goldT3 = {
        name: 'Death Star Jr',
        desc: 'That\'s no moon! That\'s a Space Station! This cuts through asteroids to expose all of the Gold in the centers.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'gold',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -81, 
            'gold': 51
        },
        cost: {
            'spaceMetal': 17000,
            'silver': 11500,
            'silicon': 8200
        }
    };

    instance.goldT4 = {
        name: 'Chronal Actuator',
        desc: 'Speeds up time through quantum physics in order to produce even more Gold.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'gold',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -223, 
            'gold': 211
        },
        cost: {
            'spaceMetal': 61000,
            'helium': 15700,
            'meteorite': 600
        }
    };

//Silver
    instance.silverT1 = {
        name: 'Scout Ship',
        desc: 'The Scout Ship searches through the asteroid field for pieces of silver embedded in asteroids.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'silver',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'silver': 1
        },
        cost: {
            'spaceMetal': 100,
            'titanium': 20
        }
    };

    instance.silverT2 = {
        name: 'Interplanetary Laser',
        desc: 'Cuts through asteroids to find silver deposits in their cores.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'silver',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -24,
            'silver': 13
        },
        cost: {
            'spaceMetal': 350,
            'gem': 900,
            'oil': 1200
        }
    };

    instance.silverT3 = {
        name: 'Big Bertha',
        desc: 'This large, space drill, named after the World War One Howitzer built almost a milienia ago, is a silver seeking machine specially designed for.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'silver',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -65, 
            'silver': 53
        },
        cost: {
            'spaceMetal': 19500,
            'silver': 18200,
            'silicon': 11000
        }
    };

    instance.silverT4 = {
        name: 'Atomic Cannon',
        desc: 'This powerful canon orbits Neptune and can atomise the surface of asteroids, revealing the silver within.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'silver',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -170, 
            'silver': 208
        },
        cost: {
            'spaceMetal': 85100,
            'oil': 93800,
            'meteorite': 520
        }
    };

/******************************
 * Outer Planetary Resources  *
 ******************************/
//Hydrogen
    instance.hydrogenT1 = {
        name: 'Hydrogen Collector',
        desc: 'This collector travels around Jupiter seeking Hydrogen to store to bring back to Earth.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'hydrogen',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'hydrogen': 1
        },
        cost: {
            'spaceMetal': 6000,
            'titanium': 4800
        }
    };

    instance.hydrogenT2 = {
        name: 'Gaseous Magnet',
        desc: 'The magnet attracts the Hydrogen to it to increase the amount collected per second.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'hydrogen',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -63,
            'hydrogen': 5
        },
        cost: {
            'spaceMetal': 10800,
            'titanium': 9600,
            'silicon': 6600
        }
    };

    instance.hydrogenT3 = {
        name: 'Electrolytic Cell',
        desc: 'These are made here on Earth and can turn water into hydrogen with a constant supply of Energy.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'hydrogen',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -234, 
            'hydrogen': 28
        },
        cost: {
            'silver': 37200,
            'gold': 34200,
            'silicon': 25800
        }
    };

    instance.hydrogenT4 = {
        name: 'Hindenburg Excavation',
        desc: 'Somehow, it works.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'hydrogen',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -613, 
            'hydrogen': 113
        },
        cost: {
            'spaceMetal': 172000,
            'methane': 134000,
            'meteorite': 710
        }
    };

//Helium
    instance.heliumT1 = {
        name: 'Helium Drone',
        desc: 'The Helium Drone scouts out the area on Saturn and picks out spots high in Helium which are then mined slowly by it.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'helium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'helium': 1
        },
        cost: {
            'spaceMetal': 8400,
            'titanium': 6000
        }
    };

    instance.heliumT2 = {
        name: 'Helium Tanker',
        desc: 'This huge tanker holds large amounts of Helium and transports it from Saturn to Earth through the vacuum of space.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'helium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -72,
            'helium': 11
        },
        cost: {
            'spaceMetal': 12600,
            'titanium': 10200,
            'silicon': 8400
        }
    };

    instance.heliumT3 = {
        name: 'Morphic Compressor',
        desc: 'The Compressor packs helium densely into a small space so that it can be easily transported back to Earth.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'helium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -248, 
            'helium': 57
        },
        cost: {
            'spaceMetal': 63000,
            'titanium': 43800,
            'silicon': 35400
        }
    };

    instance.heliumT4 = {
        name: 'Gas Giant Skimmer',
        desc: 'Flying into Gas Giants\' atmospheres with a big bucket is the best plan we\'ve had yet!',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'helium',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -670, 
            'helium': 232
        },
        cost: {
            'spaceMetal': 255000,
            'titanium': 173000,
            'meteorite': 770
        }
    };

//Ice
    instance.iceT1 = {
        name: 'Ice Pickaxe',
        desc: 'The Ice Pickaxe is the simplest way of mining frozen water, and although it is the cheapest, it is the slowest.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'ice',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'ice': 1
        },
        cost: {
            'spaceMetal': 17800,
            'gem': 19300
        }
    };

    instance.iceT2 = {
        name: 'Ice Drill',
        desc: 'The Ice Drill is more effective than the Pickaxe and gains much more Ice every second. However, it does use electricity.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'ice',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -83,
            'ice': 9
        },
        cost: {
            'spaceMetal': 23900,
            'titanium': 21200,
            'silicon': 19600
        }
    };

    instance.iceT3 = {
        name: 'Ocean Freezer',
        desc: 'With advanced technology, you are now able to turn Earth\'s water into high-quality Ice, previously only found on Pluto.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'ice',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -397, 
            'ice': 65
        },
        cost: {
            'spaceMetal': 117000,
            'titanium': 86000,
            'silicon': 73000
        }
    };

    instance.iceT4 = {
        name: 'Mr Freeze',
        desc: 'This robot is the coolest guy in the solar system.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'ice',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'energy': -1135, 
            'ice': 278
        },
        cost: {
            'spaceMetal': 519000,
            'helium': 14000,
            'meteorite': 1500
        }
    };


//Meteorite
    instance.meteoriteT1 = {
        name: 'Meteorite Printer',
        desc: 'Contruct an automated way of producing meteorite without you having to do anything.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'meteorite',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'plasma': -3,
            'meteorite': 1
        },
        cost: {
            'spaceMetal': 100000,
            'silicon': 60000
        }
    };

    instance.meteoriteT2 = {
        name: 'Meteorite Web',
        desc: 'The Meteorite Web uses nano-fibres made while submerged in highly radioactive liquids to become strong enough to physically catch meteors from the Asteroid Belt. Plasma is required to refine the asteroids into Meteorite Ore, which can be usable.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'meteorite',
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        resourcePerSecond: {
            'plasma': -21,
            'meteorite': 8
        },
        cost: {
            'spaceMetal': 940000,
            'uranium': 490000,
            'silicon': 510000
        }
    };

    return instance;
}());