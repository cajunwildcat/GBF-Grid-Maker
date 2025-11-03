const omegaMods = {
    "Ironflame's": "Fire", "Oceansoul's": "Water", "Lifetree's": "Earth", "Stormwyrm's": "Wind", "Knightcode's":
        "Light", "Mistfall's": "Dark"
};
const primalMods = { "Fire's": { element: "Fire", size: "small" }, "Water's": { element: "Water", size: "small" }, "Earth's": { element: "Earth", size: "small" }, "Wind's": { element: "Wind", size: "small" }, "Light's": { element: "Light", size: "small" }, "Dark's": { element: "Dark", size: "small" }, "Hellfire's": { element: "Fire", size: "medium" }, "Tsunami's": { element: "Water", size: "medium" }, "Mountain's": { element: "Earth", size: "medium" }, "Whirlwind's": { element: "Wind", size: "medium" }, "Thunder's": { element: "Light", size: "medium" }, "Hatred's": { element: "Dark", size: "medium" }, "Inferno's": { element: "Fire", size: "big" }, "Hoarfrost's": { element: "Water", size: "big" }, "Terra's": { element: "Earth", size: "big" }, "Ventosus's": { element: "Wind", size: "big" }, "Zion's": { element: "Light", size: "big" }, "Oblivion's": { element: "Dark", size: "big" } };
const gridSkillCaps = {
    //red
    "might": { cap: Number.POSITIVE_INFINITY, sortOrder: 1},
    "omega might": { cap: Number.POSITIVE_INFINITY, sortOrder: 2},
    "ex might": { cap: Number.POSITIVE_INFINITY, sortOrder: 3},
    "stamina": { cap: Number.POSITIVE_INFINITY, sortOrder: 4},
    "omega stamina": { cap: Number.POSITIVE_INFINITY, sortOrder: 5},
    "enmity": { cap: 800, sortOrder: 6},
    "omega enmity": { cap: 800, sortOrder: 7},
    "ex enmity": { cap: 800, sortOrder: 8},
    "ex might (sp)": { cap: 80, sortOrder: 9},
    "ele atk (prog)": { cap: 75, sortOrder: 10},
    "da": { cap: 75, sortOrder: 11},
    "ta": { cap: 75, sortOrder: 12},
    "crit": { cap: 100, sortOrder: 13},
    "crit (sp)": { cap: 100, sortOrder: 14},
    "counter": { cap: 20, sortOrder: 15},
    "fire optimus": { cap: 90, sortOrder: 16},
    "water optimus": { cap: 90, sortOrder: 17},
    "earth optimus": { cap: 90, sortOrder: 18},
    "wind optimus": { cap: 90, sortOrder: 19},
    "light optimus": { cap: 90, sortOrder: 20},
    "dark optimus": { cap: 90, sortOrder: 21},
    "fire omega": { cap: 100, sortOrder: 22},
    "water omega": { cap: 100, sortOrder: 23},
    "earth omega": { cap: 100, sortOrder: 24},
    "wind omega": { cap: 100, sortOrder: 25},
    "light omega": { cap: 100, sortOrder: 26},
    "dark omega": { cap: 100, sortOrder: 27},
    "ele atk": { cap: 40, sortOrder: 28},
    "bonus dmg": { cap: 50, sortOrder: 29},
    "bonus dmg (ca)": { cap: 20, sortOrder: 30},
    //green
    "hp": { cap: 400, sortOrder: 31},
    "hp cut": { cap: 70, sortOrder: 32},
    "hp dmg": { cap: 40, sortOrder: 33},
    "heal cap": { cap: 100, sortOrder: 34},
    //blue
    "def": { cap: 400, sortOrder: 35},
    "debuff res": { cap: 30, sortOrder: 36},
    "fire reduction": { cap: 30, sortOrder: 37},
    "water reduction": { cap: 30, sortOrder: 38},
    "earth reduction": { cap: 30, sortOrder: 39},
    "wind reduction": { cap: 30, sortOrder: 40},
    "light reduction": { cap: 30, sortOrder: 41},
    "dark reduction": { cap: 30, sortOrder: 42},
    //yellow
    "dmg cap": { cap: 20, sortOrder: 43},
    "dmg cap (sp)": { cap: 20, sortOrder: 44},
    "na dmg cap": { cap: 20, sortOrder: 45},
    "ca dmg": { cap: 120, sortOrder: 46},
    "ca dmg cap": { cap: 100, sortOrder: 47},
    "ca dmg cap (sp)": { cap: 100, sortOrder: 48},
    "ca dmg supp": { cap: 1000000, sortOrder: 49},
    "cb dmg": { cap: 120, sortOrder: 50},
    "cb dmg cap": { cap: 100, sortOrder: 51},
    "cb dmg amp": { cap: 200, sortOrder: 52},
    "fc dmg amp": { cap: 200, sortOrder: 53},
    "crit amp": { cap: 20, sortOrder: 54},
    "skill dmg cap": { cap: 100, sortOrder: 55},
    "skill dmg supp": { cap: 200000, sortOrder: 56},
    "dmg supp": { cap: 100000, sortOrder: 57},
    "na dmg supp": { cap: 100000, sortOrder: 58},
    "charge gain": { cap: 50, sortOrder: 59},
    "na dmg amp": { cap: 30, sortOrder: 60},
    "na dmg amp (sp)": { cap: 20, sortOrder: 61},
    "ca dmg amp (sp)": { cap: 20, sortOrder: 62},
    "ca dmg cap (sp)": { cap: 60, sortOrder: 63},
    "skill dmg amp (sp)": { cap: 20, sortOrder: 64},
    "def ignore": { cap: 30, sortOrder: 65},
    "dmg cap (arc)": { cap: 20, sortOrder: 66},
    "ca dmg amp (arc)": { cap: 20, sortOrder: 67},
    "na dmg amp (arc)": { cap: 15, sortOrder: 68},
    "skill dmg amp (arc)": { cap: 10, sortOrder: 69},
}
const weaponSkillData = {
    "bloodshed": {
        "big": {
            10: [{ value: 15, statName: "might", affects: "<element>" }, { value: 20, statName: "hp dmg", affects: "<element>" }],
            15: [{ value: 18, statName: "might", affects: "<element>" }, { value: 20, statName: "hp dmg", affects: "<element>" }],
        }
    },
    "fandango": {
        "small": {
            10: [{ value: 1.35, statName: "ta", affects: "<element>" }, { value: 10, statName: "might", affects: "<element>" }],
            15: [{ value: 2, statName: "ta", affects: "<element>" }, { value: 12, statName: "might", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 2.15, statName: "ta", affects: "<element>" }, { value: 12, statName: "might", affects: "<element>" }],
            15: [{ value: 2.9, statName: "ta", affects: "<element>" }, { value: 14.5, statName: "might", affects: "<element>" }],
            20: [{ value: 3.65, statName: "ta", affects: "<element>" }, { value: 16, statName: "might", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 3.45, statNameName: "ta", affects: "<element>" }, { value: 15, statName: "might", affects: "<element>" }],
            15: [{ value: 4.2, statName: "ta", affects: "<element>" }, { value: 18, statName: "might", affects: "<element>" }]
        }
    },
    "majesty": {
        "small": {
            10: [{value: 10, statName: "hp", affects: "<element>"}, {value: 10, statName: "might", affects: "<element>"}],
            15: [{value: 12, statName: "hp", affects: "<element>"}, {value: 12, statName: "might", affects: "<element>"}],
            20: [{value: 12.5, statName: "hp", affects: "<element>"}, {value: 12.5, statName: "might", affects: "<element>"}],
        },
        "medium": {
            10: [{value: 12, statName: "hp", affects: "<element>"}, {value: 12, statName: "might", affects: "<element>"}],
            15: [{value: 14.5, statName: "hp", affects: "<element>"}, {value: 14.5, statName: "might", affects: "<element>"}],
            20: [{value: 15.5, statName: "hp", affects: "<element>"}, {value: 15.5, statName: "might", affects: "<element>"}],
            25: [{value: 16.5, statName: "hp", affects: "<element>"}, {value: 16.5, statName: "might", affects: "<element>"}],
        },
        "big": {
            10: [{value: 15, statName: "hp", affects: "<element>"}, {value: 15, statName: "might", affects: "<element>"}],
            15: [{value: 18, statName: "hp", affects: "<element>"}, {value: 18, statName: "might", affects: "<element>"}],
            20: [{value: 20, statName: "hp", affects: "<element>"}, {value: 20, statName: "might", affects: "<element>"}],
        },
        "big ii": {
            20: [{value: 22, statName: "hp", affects: "<element>"}, {value: 22, statName: "might", affects: "<element>"}],
        },
    },
    "restraint" : {
        "small": {
            10: [{value: 2.2, statName: "da", affects: "<element>"}, {value: 2, statName: "crit", affects: "<element>"}],
            15: [{value: 3.5, statName: "da", affects: "<element>"}, {value: 3, statName: "crit", affects: "<element>"}],
        },
        "medium": {
            10: [{value: 3.2, statName: "da", affects: "<element>"}, {value: 5, statName: "crit", affects: "<element>"}],
            15: [{value: 5, statName: "da", affects: "<element>"}, {value: 6.5, statName: "crit", affects: "<element>"}],
        },
    },
    "sentence": {
        "small": {
            10: [{value: 5, statName: "ca dmg", affects: "<element>"}, {value: 2, statName: "ca dmg cap", affects: "<element>"}],
            15: [{value: 7.5, statName: "ca dmg", affects: "<element>"}, {value: 3, statName: "ca dmg cap", affects: "<element>"}],
        },
        "medium": {
            10: [{value: 7, statName: "ca dmg", affects: "<element>"}, {value: 3.5, statName: "ca dmg cap", affects: "<element>"}],
            15: [{value: 9.5, statName: "ca dmg", affects: "<element>"}, {value: 5, statName: "ca dmg cap", affects: "<element>"}],
        },
        "medium omega": {
            10: [{value: 7, statName: "ca dmg", affects: "<element>"}, {value: 7, statName: "ca dmg cap", affects: "<element>"}],
            15: [{value: 9.5, statName: "ca dmg", affects: "<element>"}, {value: 9.5, statName: "ca dmg cap", affects: "<element>"}],
        },
        "big": {
            10: [{value: 10, statName: "ca dmg", affects: "<element>"}, {value: 4.8, statName: "ca dmg cap", affects: "<element>"}],
            15: [{value: 12.5, statName: "ca dmg", affects: "<element>"}, {value: 6.8, statName: "ca dmg cap", affects: "<element>"}],
        },
    },
    "tempering": {
        "small": {
            10: [{value: 2.5, statName: "skill dmg cap", affects: "<element>"}, {value: 10000, statName: "skill dmg supp", affects: "<element>"}],
            15: [{value: 3.5, statName: "skill dmg cap", affects: "<element>"}, {value: 12500, statName: "skill dmg supp", affects: "<element>"}]
        },
        "medium": {
            10: [{value: 3.2, statName: "skill dmg cap", affects: "<element>"}, {value: 15000, statName: "skill dmg supp", affects: "<element>"}],
            15: [{value: 4.5, statName: "skill dmg cap", affects: "<element>"}, {value: 18000, statName: "skill dmg supp", affects: "<element>"}]
        },
        "big": {
            10: [{value: 4.0, statName: "skill dmg cap", affects: "<element>"}, {value: 20000, statName: "skill dmg supp", affects: "<element>"}],
            15: [{value: 5.5, statName: "skill dmg cap", affects: "<element>"}, {value: 25000, statName: "skill dmg supp", affects: "<element>"}]
        }
    },
    "trium": {
        "small": {
            10: [{ value: 2.5, statName: "ta", affects: "<element>" }],
            15: [{ value: 3.5, statName: "ta", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 3.5, statName: "ta", affects: "<element>" }],
            15: [{ value: 5, statName: "ta", affects: "<element>" }],
            20: [{ value: 6, statName: "ta", affects: "<element>" }],
            25: [{ value: 7, statName: "ta", affects: "<element>" }],
        },
        "big": {
            10: [{ value: 5, statName: "ta", affects: "<element>" }],
            15: [{ value: 7, statName: "ta", affects: "<element>" }],
        },
        "big ii": {
            10: [{ value: 7, statName: "ta", affects: "<element>" }],
            15: [{ value: 9, statName: "ta", affects: "<element>" }],
        },
        "massive": {
            10: [{ value: 10, statName: "ta", affects: "<element>" }],
            15: [{ value: 14, statName: "ta", affects: "<element>" }],
        },
    },
    "tyranny": {
        "big": {
            10: [{ value: 15, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>" }],
            15: [{ value: 18, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>" }],
        },
        "massive": {
            10: [{ value: 18, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>" }],
            15: [{ value: 23, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>" }],
            20: [{ value: 25.5, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>" }],
        },
    },
    "verity": {
        "small": {
            10: [{ value: 2.0, statName: "crit", affects: "<element>" }],
            15: [{ value: 3.0, statName: "crit", affects: "<element>" }],
            20: [{ value: 4.0, statName: "crit", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 5.0, statName: "crit", affects: "<element>" }],
            15: [{ value: 6.5, statName: "crit", affects: "<element>" }],
            20: [{ value: 7.5, statName: "crit", affects: "<element>" }],
        },
        "big": {
            10: [{ value: 8.0, statName: "crit", affects: "<element>" }],
            15: [{ value: 10.0, statName: "crit", affects: "<element>" }],
            20: [{ value: 11.0, statName: "crit", affects: "<element>" }],
        },
        "big ii": {
            10: [{ value: 10.0, statName: "crit", affects: "<element>" }],
            15: [{ value: 12.0, statName: "crit", affects: "<element>" }],
        },
        "massive": {
            10: [{ value: 16.0, statName: "crit", affects: "<element>" }],
            15: [{ value: 20.0, statName: "crit", affects: "<element>" }],
        },
    },
    "Omega Exalto Caliginis": [
        {value: 0.2, statName: "dark omega", aura: "Mistfall's"}
    ],
    "Guiding Star's Splendor": [
        {value: 30, statName: "might", affects: "all"}, {value: 25, statName: "def", affects: "all"}, {value: 30, statName: "hp", affects: "all"}
    ],
    "Star-Sea Sovereign's Decree": [
        {value: 20, statName: "ex might", affects: "all"}, {value: 10, statName: "da", affects: "all"}, {value: 5, statName: "ta", affects: "all"}, {value: 10, statName: "ca dmg", affects: "all"}, {value: 5, statName: "ca dmg cap", affects: "all"}, {value: 5, statName: "dmg cap", affects: "all"},
        {value: 20, statName: "ex might", affects: "weapon:sabre"}, {value: 5, statName: "da", affects: "weapon:sabre"}, {value: 5, statName: "ta", affects: "weapon:sabre"}, {value: 10, statName: "ca dmg", affects: "weapon:sabre"}, {value: 10, statName: "ca dmg cap", affects: "weapon:sabre"}, {value: 5, statName: "dmg cap", affects: "weapon:sabre"}
    ],
    "Ultimate Wisdom's Shine": [
        {value: 20, statName: "ex might", affects: "all"}, {value: 10, statName: "da", affects: "all"}, {value: 5, statName: "ta", affects: "all"}, {value: 10, statName: "ca dmg", affects: "all"}, {value: 5, statName: "ca dmg cap", affects: "all"}, {value: 5, statName: "dmg cap", affects: "all"},
        {value: 20, statName: "ex might", affects: "weapon:staff"}, {value: 5, statName: "da", affects: "weapon:staff"}, {value: 5, statName: "ta", affects: "weapon:staff"}, {value: 10, statName: "ca dmg", affects: "weapon:staff"}, {value: 10, statName: "ca dmg cap", affects: "weapon:staff"}, {value: 5, statName: "dmg cap", affects: "weapon:staff"}
    ]
}
const summonAuraData = {
    2040034000: {
        0: [{value: 0.5, aura: "Ironflame's"}],
        3: [{value: 1, aura: "Ironflame's"}],
        4: [{value: 1.2, aura: "Ironflame's"}],
        5: [{value: 1.4, aura: "Ironflame's"}],
        "t1": [{value: 1.5, aura: "Ironflame's"}],
        "t2": [{value: 1.5, aura: "Ironflame's"}],
        "t3": [{value: 1.5, aura: "Ironflame's"}],
        "t4": [{value: 1.6, aura: "Ironflame's"}],
        "t5": [{value: 1.7, aura: "Ironflame's"}],
    },
    2040028000: {
        0: [{value: 0.5, aura: "Oceansoul's"}],
        3: [{value: 1, aura: "Oceansoul's"}],
        4: [{value: 1.2, aura: "Oceansoul's"}],
        5: [{value: 1.4, aura: "Oceansoul's"}],
        "t1": [{value: 1.5, aura: "Oceansoul's"}],
        "t2": [{value: 1.5, aura: "Oceansoul's"}],
        "t3": [{value: 1.5, aura: "Oceansoul's"}],
        "t4": [{value: 1.6, aura: "Oceansoul's"}],
        "t5": [{value: 1.7, aura: "Oceansoul's"}],
    },
    2040027000: {
        0: [{value: 0.5, aura: "Lifetree's"}],
        3: [{value: 1, aura: "Lifetree's"}],
        4: [{value: 1.2, aura: "Lifetree's"}],
        5: [{value: 1.4, aura: "Lifetree's"}],
        "t1": [{value: 1.5, aura: "Lifetree's"}],
        "t2": [{value: 1.5, aura: "Lifetree's"}],
        "t3": [{value: 1.5, aura: "Lifetree's"}],
        "t4": [{value: 1.6, aura: "Lifetree's"}],
        "t5": [{value: 1.7, aura: "Lifetree's"}],
    },
    2040020000: {
        0: [{value: 0.5, aura: "Stormwyrm's"}],
        3: [{value: 1, aura: "Stormwyrm's"}],
        4: [{value: 1.2, aura: "Stormwyrm's"}],
        5: [{value: 1.4, aura: "Stormwyrm's"}],
        "t1": [{value: 1.5, aura: "Stormwyrm's"}],
        "t2": [{value: 1.5, aura: "Stormwyrm's"}],
        "t3": [{value: 1.5, aura: "Stormwyrm's"}],
        "t4": [{value: 1.6, aura: "Stormwyrm's"}],
        "t5": [{value: 1.7, aura: "Stormwyrm's"}],
    },
    2040047000: {
        0: [{value: 0.5, aura: "Knightcode's"}],
        3: [{value: 1, aura: "Knightcode's"}],
        4: [{value: 1.2, aura: "Knightcode's"}],
        5: [{value: 1.4, aura: "Knightcode's"}],
        "t1": [{value: 1.5, aura: "Knightcode's"}],
        "t2": [{value: 1.5, aura: "Knightcode's"}],
        "t3": [{value: 1.5, aura: "Knightcode's"}],
        "t4": [{value: 1.6, aura: "Knightcode's"}],
        "t5": [{value: 1.7, aura: "Knightcode's"}],
    },
    2040046000: {
        0: [{value: 0.5, aura: "Mistfall's"}],
        3: [{value: 1, aura: "Mistfall's"}],
        4: [{value: 1.2, aura: "Mistfall's"}],
        5: [{value: 1.4, aura: "Mistfall's"}],
        "t1": [{value: 1.5, aura: "Mistfall's"}],
        "t2": [{value: 1.5, aura: "Mistfall's"}],
        "t3": [{value: 1.5, aura: "Mistfall's"}],
        "t4": [{value: 1.6, aura: "Mistfall's"}],
        "t5": [{value: 1.7, aura: "Mistfall's"}],
    },

    2040094000: ["Fire's", "Hellfire's", "Inferno's"],
    2040100000: ["Water's", "Tsunami's", "Hoarfrost's"],
    2040084000: ["Earth's", "Mountain's", "Terra's"],
    2040098000: ["Wind's", "Whirlwind's", "Ventosus's"],
    2040080000: ["Light's", "Thunder's", "Zion's"],
    2040090000: ["Dark's", "Hatred's", "Oblivion's"],
}