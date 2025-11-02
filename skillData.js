const omegaMods = {
    "Ironflame's": "Fire", "Oceansoul's": "Water", "Lifetree's": "Earth", "Stormwyrm's": "Wind", "Knightcode's":
        "Light", "Mistfall's": "Dark"
};
const primalMods = { "Fire's": { element: "Fire", size: "small" }, "Water's": { element: "Water", size: "small" }, "Earth's": { element: "Earth", size: "small" }, "Wind's": { element: "Wind", size: "small" }, "Light's": { element: "Light", size: "small" }, "Dark's": { element: "Dark", size: "small" }, "Hellfire's": { element: "Fire", size: "medium" }, "Tsunami's": { element: "Water", size: "medium" }, "Mountain's": { element: "Earth", size: "medium" }, "Whirlwind's": { element: "Wind", size: "medium" }, "Thunder's": { element: "Light", size: "medium" }, "Hatred's": { element: "Dark", size: "medium" }, "Inferno's": { element: "Fire", size: "big" }, "Hoarfrost's": { element: "Water", size: "big" }, "Terra's": { element: "Earth", size: "big" }, "Ventosus's": { element: "Wind", size: "big" }, "Zion's": { element: "Light", size: "big" }, "Oblivion's": { element: "Dark", size: "big" } };
const gridSkillCaps = {
    //red
    "might": Number.POSITIVE_INFINITY,
    "omega might": Number.POSITIVE_INFINITY,
    "ex might": Number.POSITIVE_INFINITY,
    "stamina": Number.POSITIVE_INFINITY,
    "omega stamina": Number.POSITIVE_INFINITY,
    "enmity": 800,
    "omega enmity": 800,
    "ex enmity": 800,
    "ex might (sp)": 80,
    "ele atk (prog)": 75,
    "da": 75,
    "ta": 75,
    "crit": 100,
    "crit (sp)": 100,
    "counter": 20,
    "fire optimus": 90,
    "water optimus": 90,
    "earth optimus": 90,
    "wind optimus": 90,
    "light optimus": 90,
    "dark optimus": 90,
    "fire omega": 100,
    "water omega": 100,
    "earth omega": 100,
    "wind omega": 100,
    "light omega": 100,
    "dark omega": 100,
    "ele atk": 40,
    "bonus dmg": 50,
    "bonus dmg (ca)": 20,
    //green
    "hp": 400,
    "hp cut": 70,
    "hp dmg": 40,
    "heal cap": 100,
    //blue
    "def": 400,
    "debuff res": 30,
    "fire reduction": 30,
    "water reduction": 30,
    "earth reduction": 30,
    "wind reduction": 30,
    "light reduction": 30,
    "dark reduction": 30,
    //yellow
    "dmg cap": 20,
    "dmg cap (sp)": 20,
    "na dmg cap": 20,
    "ca dmg": 120,
    "ca dmg cap": 100,
    "ca dmg cap (sp)": 100,
    "ca dmg supp": 1000000,
    "cb dmg": 120,
    "cb dmg cap": 100,
    "cb dmg amp": 200,
    "fc dmg amp": 200,
    "crit amp": 20,
    "skill dmg cap": 100,
    "skill dmg supp": 200000,
    "dmg supp": 100000,
    "na dmg supp": 100000,
    "charge gain": 50,
    "na dmg amp": 30,
    "na dmg amp (sp)": 20,
    "ca dmg amp (sp)": 20,
    "ca dmg cap (sp)": 60,
    "skill dmg amp (sp)": 20,
    "def ignore": 30,
    "dmg cap (arc)": 20,
    "ca dmg amp (arc)": 20,
    "na dmg amp (arc)": 15,
    "skill dmg amp (arc)": 10,
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
    "Guiding Star's Splendor": [
        {value: 30, statName: "might", affects: "all"}, {value: 25, statName: "def", affects: "all"}, {value: 30, statName: "hp", affects: "all"}
    ],
    "Star-Sea Sovereign's Decree": [
        {value: 20, statName: "ex might", affects: "all"}, {value: 10, statName: "da", affects: "all"}, {value: 5, statName: "ta", affects: "all"}, {value: 10, statName: "ca dmg", affects: "all"}, {value: 5, statName: "ca dmg cap", affects: "all"}, {value: 5, statName: "dmg cap", affects: "all"},
        {value: 20, statName: "ex might", affects: "weapon:Sabre"}, {value: 5, statName: "da", affects: "weapon:Sabre"}, {value: 5, statName: "ta", affects: "weapon:Sabre"}, {value: 10, statName: "ca dmg", affects: "weapon:Sabre"}, {value: 10, statName: "ca dmg cap", affects: "weapon:Sabre"}, {value: 5, statName: "dmg cap", affects: "weapon:Sabre"}
    ],
    "Ultimate Wisdom's Shine": [
        {value: 20, statName: "ex might", affects: "all"}, {value: 10, statName: "da", affects: "all"}, {value: 5, statName: "ta", affects: "all"}, {value: 10, statName: "ca dmg", affects: "all"}, {value: 5, statName: "ca dmg cap", affects: "all"}, {value: 5, statName: "dmg cap", affects: "all"},
        {value: 20, statName: "ex might", affects: "weapon:Staff"}, {value: 5, statName: "da", affects: "weapon:Staff"}, {value: 5, statName: "ta", affects: "weapon:Staff"}, {value: 10, statName: "ca dmg", affects: "weapon:Staff"}, {value: 10, statName: "ca dmg cap", affects: "weapon:Staff"}, {value: 5, statName: "dmg cap", affects: "weapon:Staff"}
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