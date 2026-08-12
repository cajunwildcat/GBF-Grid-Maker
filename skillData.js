const omegaMods = {
    "Ironflame's": "Fire", "Oceansoul's": "Water", "Lifetree's": "Earth", "Stormwyrm's": "Wind", "Knightcode's":
        "Light", "Mistfall's": "Dark"
};
const primalMods = { "Fire's": { element: "Fire", size: "small" }, "Water's": { element: "Water", size: "small" }, "Earth's": { element: "Earth", size: "small" }, "Wind's": { element: "Wind", size: "small" }, "Light's": { element: "Light", size: "small" }, "Dark's": { element: "Dark", size: "small" }, "Hellfire's": { element: "Fire", size: "medium" }, "Tsunami's": { element: "Water", size: "medium" }, "Mountain's": { element: "Earth", size: "medium" }, "Whirlwind's": { element: "Wind", size: "medium" }, "Thunder's": { element: "Light", size: "medium" }, "Hatred's": { element: "Dark", size: "medium" }, "Inferno's": { element: "Fire", size: "big" }, "Hoarfrost's": { element: "Water", size: "big" }, "Terra's": { element: "Earth", size: "big" }, "Ventosus's": { element: "Wind", size: "big" }, "Zion's": { element: "Light", size: "big" }, "Oblivion's": { element: "Dark", size: "big" } };
const gridSkillCaps = {
    //red
    "might": { cap: Number.POSITIVE_INFINITY, sortOrder: 1 },
    "omega might": { cap: Number.POSITIVE_INFINITY, sortOrder: 2 },
    "taboo might": { cap: Number.POSITIVE_INFINITY, sortOrder: 3 },
    "stamina": { cap: Number.POSITIVE_INFINITY, sortOrder: 4 },
    "omega stamina": { cap: Number.POSITIVE_INFINITY, sortOrder: 5 },
    "taboo stamina": { cap: Number.POSITIVE_INFINITY, sortOrder: 6 },
    "enmity": { cap: 800, sortOrder: 7 },
    "omega enmity": { cap: 800, sortOrder: 8 },
    "taboo enmity": { cap: 800, sortOrder: 9 },
    "ex might": { cap: Number.POSITIVE_INFINITY, sortOrder: 10 },
    "ex might (sp)": { cap: 80, sortOrder: 11 },
    "ex enmity": { cap: 800, sortOrder: 12 },
    "ele atk (prog)": { cap: 75, sortOrder: 13 },
    "da": { cap: 75, sortOrder: 14 },
    "ta": { cap: 75, sortOrder: 15 },
    "crit": { cap: 100, sortOrder: 16 },
    "crit (sp)": { cap: 100, sortOrder: 17 },
    "counter rate": { cap: 20, sortOrder: 18 },
    "counter dmg": { cap: Number.POSITIVE_INFINITY, sortOrder: 19 },
    "ele atk": { cap: 40, sortOrder: 20 },
    "fire optimus": { cap: 90, sortOrder: 21 },
    "water optimus": { cap: 90, sortOrder: 22 },
    "earth optimus": { cap: 90, sortOrder: 23 },
    "wind optimus": { cap: 90, sortOrder: 24 },
    "light optimus": { cap: 90, sortOrder: 25 },
    "dark optimus": { cap: 90, sortOrder: 26 },
    "fire omega": { cap: 100, sortOrder: 27 },
    "water omega": { cap: 100, sortOrder: 28 },
    "earth omega": { cap: 100, sortOrder: 29 },
    "wind omega": { cap: 100, sortOrder: 30 },
    "light omega": { cap: 100, sortOrder: 31 },
    "dark omega": { cap: 100, sortOrder: 32 },
    "fire taboo": { cap: 100, sortOrder: 33 },
    "water taboo": { cap: 100, sortOrder: 34 },
    "earth taboo": { cap: 100, sortOrder: 35 },
    "wind taboo": { cap: 100, sortOrder: 36 },
    "light taboo": { cap: 100, sortOrder: 37 },
    "dark taboo": { cap: 100, sortOrder: 38 },
    "bonus dmg": { cap: 50, sortOrder: 39 },
    "bonus dmg (ca)": { cap: 20, sortOrder: 40 },
    //green
    "hp": { cap: 400, sortOrder: 101 },
    "hp cut": { cap: 70, sortOrder: 102 },
    "hp dmg": { cap: 40, sortOrder: 103 },
    "heal cap": { cap: 100, sortOrder: 104 },
    //blue
    "def": { cap: 400, sortOrder: 201 },
    "hit to def": { cap: Number.POSITIVE_INFINITY, sortOrder: 202 },
    "debuff res": { cap: 30, sortOrder: 203 },
    "fire reduction": { cap: 30, sortOrder: 204 },
    "water reduction": { cap: 30, sortOrder: 205 },
    "earth reduction": { cap: 30, sortOrder: 206 },
    "wind reduction": { cap: 30, sortOrder: 207 },
    "light reduction": { cap: 30, sortOrder: 208 },
    "dark reduction": { cap: 30, sortOrder: 209 },
    //yellow
    "dmg cap": { cap: 20, sortOrder: 301 },
    "dmg cap (sp)": { cap: 20, sortOrder: 302 },
    "na dmg cap": { cap: 20, sortOrder: 303 },
    "ca dmg": { cap: 120, sortOrder: 304 },
    "ca dmg cap": { cap: 100, sortOrder: 305 },
    "ca dmg cap (sp)": { cap: 100, sortOrder: 306 },
    "ca dmg supp": { cap: 1000000, sortOrder: 307 },
    "cb dmg": { cap: 120, sortOrder: 308 },
    "cb dmg cap": { cap: 100, sortOrder: 309 },
    "dmg amp": { cap: Number.POSITIVE_INFINITY, sortOrder: 310 },
    "cb dmg amp": { cap: 200, sortOrder: 311 },
    "fc dmg amp": { cap: 200, sortOrder: 312 },
    "crit amp": { cap: 20, sortOrder: 313 },
    "skill dmg cap": { cap: 100, sortOrder: 314 },
    "skill dmg supp": { cap: 200000, sortOrder: 315 },
    "dmg supp": { cap: 100000, sortOrder: 316 },
    "na dmg supp": { cap: 100000, sortOrder: 317 },
    "charge gain": { cap: 50, sortOrder: 318 },
    "na dmg amp": { cap: 30, sortOrder: 319 },
    "na dmg amp (sp)": { cap: 20, sortOrder: 320 },
    "ca dmg amp (sp)": { cap: 20, sortOrder: 321 },
    "ca dmg cap (sp)": { cap: 60, sortOrder: 322 },
    "skill dmg amp (sp)": { cap: 20, sortOrder: 323 },
    "def ignore": { cap: 30, sortOrder: 324 },
    "dmg cap (arc)": { cap: 20, sortOrder: 325 },
    "ca dmg amp (arc)": { cap: 20, sortOrder: 326 },
    "na dmg amp (arc)": { cap: 15, sortOrder: 327 },
    "skill dmg amp (arc)": { cap: 10, sortOrder: 328 },
}
const weaponSkillData = {
    "apotheosis": {
        "big": {
            10: [{ value: 17, statName: "might", affects: "<element>" }, { value: 17, statName: "hp", affects: "<element>" }, { value: 1, statName: "dmg amp", affects: "<element>" }],
            15: [{ value: 20, statName: "might", affects: "<element>" }, { value: 20, statName: "hp", affects: "<element>" }, { value: 1.5, statName: "dmg amp", affects: "<element>" }],
            20: [{ value: 22, statName: "might", affects: "<element>" }, { value: 22, statName: "hp", affects: "<element>" }, { value: 1.75, statName: "dmg amp", affects: "<element>" }],
            25: [{ value: 24, statName: "might", affects: "<element>" }, { value: 24, statName: "hp", affects: "<element>" }, { value: 2, statName: "dmg amp", affects: "<element>" }]
        }
    },

    "auspice": {
        "small": {
            10: [{ value: 12, statName: "hp", affects: "<element>" }, { value: 5, statName: "heal cap", affects: "<element>" }],
            15: [{ value: 14, statName: "hp", affects: "<element>" }, { value: 7.5, statName: "heal cap", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 15, statName: "hp", affects: "<element>" }, { value: 7.5, statName: "heal cap", affects: "<element>" }],
            15: [{ value: 17, statName: "hp", affects: "<element>" }, { value: 10, statName: "heal cap", affects: "<element>" }]
        },
    },

    "bladeshield": {
        "small": {
            10: [{ value: 12, statName: "hp", affects: "<element>" }, { value: 2, statName: "crit", affects: "<element>" }],
            15: [{ value: 14, statName: "hp", affects: "<element>" }, { value: 3, statName: "crit", affects: "<element>" }]
        },
    },

    "bloodrage": {
        "medium": {
            10: [{ value: 12, statName: "might", affects: "<element>" }, { value: 5, statName: "crit", affects: "<element>" }, { value: 10, statName: "hit to def", affects: "<element>" }],
            15: [{ value: 14.5, statName: "might", affects: "<element>" }, { value: 6.5, statName: "crit", affects: "<element>" }, { value: 10, statName: "hit to def", affects: "<element>" }]
        },
    },

    "bloodshed": {
        "big": {
            10: [{ value: 15, statName: "might", affects: "<element>" }, { value: 20, statName: "hp dmg", affects: "<element>" }],
            15: [{ value: 18, statName: "might", affects: "<element>" }, { value: 20, statName: "hp dmg", affects: "<element>" }]
        }
    },

    "celere": {
        "small": {
            10: [{ value: 10, statName: "might", affects: "<element>" }, { value: 2, statName: "crit", affects: "<element>" }],
            15: [{ value: 12, statName: "might", affects: "<element>" }, { value: 3, statName: "crit", affects: "<element>" }],
            20: [{ value: 13, statName: "might", affects: "<element>" }, { value: 4, statName: "crit", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 12, statName: "might", affects: "<element>" }, { value: 5, statName: "crit", affects: "<element>" }],
            15: [{ value: 14.5, statName: "might", affects: "<element>" }, { value: 6.5, statName: "crit", affects: "<element>" }],
            20: [{ value: 16, statName: "might", affects: "<element>" }, { value: 7.5, statName: "crit", affects: "<element>" }],
            25: [{ value: 17.5, statName: "might", affects: "<element>" }, { value: 8.5, statName: "crit", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 15, statName: "might", affects: "<element>" }, { value: 8, statName: "crit", affects: "<element>" }],
            15: [{ value: 18, statName: "might", affects: "<element>" }, { value: 10, statName: "crit", affects: "<element>" }],
            20: [{ value: 20, statName: "might", affects: "<element>" }, { value: 11, statName: "crit", affects: "<element>" }]
        },
        "big ii": {
            10: [{ value: 16, statName: "might", affects: "<element>" }, { value: 10, statName: "crit", affects: "<element>" }],
            15: [{ value: 20, statName: "might", affects: "<element>" }, { value: 12, statName: "crit", affects: "<element>" }]
        }
    },

    "crux": {
        "big": {
            10: [{ value: 80000, statName: "ca dmg supp", affects: "<element>" }],
            15: [{ value: 105000, statName: "ca dmg supp", affects: "<element>" }]
        }
    },
    "crux unboostable": [
        { value: 400000, statName: "ca dmg supp", affects: "<element>" }
    ],


    "deathstrike": {
        "medium": {
            10: [{ value: 2.35, statName: "bonus dmg", affects: "<element>" }],
            15: [{ value: 3, statName: "bonus dmg", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 3.5, statName: "bonus dmg", affects: "<element>" }],
            15: [{ value: 4.5, statName: "bonus dmg", affects: "<element>" }]
        },
    },

    "demolishment": {
        "big": {
            10: [{ value: 2.5, statName: "na dmg amp", affects: "<element>" }],
            15: [{ value: 3, statName: "na dmg amp", affects: "<element>" }]
        }
    },

    "devastation": {
        "small": {
            10: [{ value: 1.75, statName: "ta", affects: "<element>" }],
            15: [{ value: 2.5, statName: "ta", affects: "<element>" }]
        },
    },

    "dual-edge": {
        "small": {
            10: [{ value: 2.2, statName: "da", affects: "<element>" }],
            15: [{ value: 3.5, statName: "da", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 3.5, statName: "da", affects: "<element>" }],
            15: [{ value: 5, statName: "da", affects: "<element>" }],
            20: [{ value: 6, statName: "da", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 5, statName: "da", affects: "<element>" }],
            15: [{ value: 7, statName: "da", affects: "<element>" }]
        },
    },

    "encouragement": {
        "medium": {
            10: [{ value: 15, statName: "hp", affects: "<element>" }, { value: 2.15, statName: "ta", affects: "<element>" }],
            15: [{ value: 17, statName: "hp", affects: "<element>" }, { value: 2.9, statName: "ta", affects: "<element>" }]
        },
    },

    "enmity": {
        "small": {
            10: [{value: (i) => EnmityFormula(i.hp, 6), statName: "enmity", affects: "<element>"}],
            15: [{value: (i) => EnmityFormula(i.hp, 7), statName: "enmity", affects: "<element>"}],
            20: [{value: (i) => EnmityFormula(i.hp, 7.5), statName: "enmity", affects: "<element>"}],
        },
        "medium": {
            10: [{value: (i) => EnmityFormula(i.hp, 8), statName: "enmity", affects: "<element>"}],
            15: [{value: (i) => EnmityFormula(i.hp, 10), statName: "enmity", affects: "<element>"}],
        },
        "big": {
            10: [{value: (i) => EnmityFormula(i.hp, 10), statName: "enmity", affects: "<element>"}],
            15: [{value: (i) => EnmityFormula(i.hp, 12.5), statName: "enmity", affects: "<element>"}],
            20: [{value: (i) => EnmityFormula(i.hp, 13.5), statName: "enmity", affects: "<element>"}],
            25: [{value: (i) => EnmityFormula(i.hp, 14.5), statName: "enmity", affects: "<element>"}],
        },
        "masssive": {
            15: [{value: (i) => EnmityFormula(i.hp, 18.75), statName: "enmity", affects: "<element>"}],
        },
    },

    "essence": {
        "medium": {
            10: [{ value: 12, statName: "might", affects: "<element>" }],
            15: [{ value: 14.5, statName: "might", affects: "<element>" }]
        },
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

    "garrison": {
        "small": {
            10: [{ value: 6, statName: "def", affects: "<element>" }],
            15: [{ value: 7, statName: "def", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 8, statName: "def", affects: "<element>" }],
            15: [{ value: 10, statName: "def", affects: "<element>" }],
            20: [{ value: 11, statName: "def", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 10, statNameName: "def", affects: "<element>" }],
            15: [{ value: 12.5, statName: "def", affects: "<element>" }],
            20: [{ value: 13.5, statName: "def", affects: "<element>" }]
        }
    },

    "glory": {
        "medium": {
            10: [{ value: 7, statName: "ca dmg", affects: "<element>" }, { value: 3.5, statName: "ca dmg cap", affects: "<element>" }, { value: 9, statName: "cb dmg", affects: "<element>" }, { value: 3.5, statName: "cb dmg cap", affects: "<element>" }],
            15: [{ value: 9.5, statName: "ca dmg", affects: "<element>" }, { value: 5, statName: "ca dmg cap", affects: "<element>" }, { value: 11, statName: "cb dmg", affects: "<element>" }, { value: 5, statName: "cb dmg cap", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 10, statName: "ca dmg", affects: "<element>" }, { value: 4.8, statName: "ca dmg cap", affects: "<element>" }, { value: 12, statName: "cb dmg", affects: "<element>" }, { value: 4.8, statName: "cb dmg cap", affects: "<element>" }],
            15: [{ value: 12.5, statName: "ca dmg", affects: "<element>" }, { value: 6.8, statName: "ca dmg cap", affects: "<element>" }, { value: 14.5, statName: "cb dmg", affects: "<element>" }, { value: 6.8, statName: "cb dmg cap", affects: "<element>" }],
            20: [{ value: 14.5, statName: "ca dmg", affects: "<element>" }, { value: 7.8, statName: "ca dmg cap", affects: "<element>" }, { value: 16.5, statName: "cb dmg", affects: "<element>" }, { value: 7.8, statName: "cb dmg cap", affects: "<element>" }],
            25: [{ value: 16.5, statName: "ca dmg", affects: "<element>" }, { value: 8.8, statName: "ca dmg cap", affects: "<element>" }, { value: 18.5, statName: "cb dmg", affects: "<element>" }, { value: 8.8, statName: "cb dmg cap", affects: "<element>" }]
        },
    },

    "grace": {
        "small": {
            10: [{ value: 3, statName: "debuff res", affects: "<element>" }, { value: 12, statName: "hp", affects: "<element>" }],
            15: [{ value: 4, statName: "debuff res", affects: "<element>" }, { value: 14, statName: "hp", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 5, statName: "debuff res", affects: "<element>" }, { value: 15, statName: "hp", affects: "<element>" }],
            15: [{ value: 6.5, statName: "debuff res", affects: "<element>" }, { value: 17, statName: "hp", affects: "<element>" }]
        },
    },

    "haunt": {
        "medium": {
            10: [{ value: 12, statName: "might", affects: "<element>" }, { value: -10, statName: "da", affects: "<element>", unboosted: true }],
            15: [{ value: 14.5, statName: "might", affects: "<element>" }, { value: -10, statName: "da", affects: "<element>", unboosted: true }]
        },
    },

    "healing": {
        "small": {
            10: [{ value: 5, statName: "heal cap", affects: "<element>" }],
            15: [{ value: 7.5, statName: "heal cap", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 7.5, statName: "heal cap", affects: "<element>" }],
            15: [{ value: 10, statName: "heal cap", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 10, statNameName: "heal cap", affects: "<element>" }],
            15: [{ value: 15, statName: "heal cap", affects: "<element>" }],
            20: [{ value: 17.5, statName: "heal cap", affects: "<element>" }]
        }
    },

    "heroism": {
        "medium": {
            10: [{ value: 3.5, statName: "da", affects: "<element>" }, { value: 12, statName: "hp", affects: "<element>" }],
            15: [{ value: 5, statName: "da", affects: "<element>" }, { value: 14, statName: "hp", affects: "<element>" }]
        },
    },

    "impalement": {
        "big": {
            10: [{ value: 1.75, statName: "def ignore", affects: "<element>" }, { value: 10, statName: "might", affects: "<element>" }],
            15: [{ value: 2, statName: "def ignore", affects: "<element>" }, { value: 12, statName: "might", affects: "<element>" }]
        },
    },

    "insignia": {
        "big": {
            10: [{ value: 15, statName: "might", affects: "<element>" }],
            15: [{ value: 18, statName: "might", affects: "<element>" }]
        },
    },

    "majesty": {
        "small": {
            10: [{ value: 10, statName: "hp", affects: "<element>" }, { value: 10, statName: "might", affects: "<element>" }],
            15: [{ value: 12, statName: "hp", affects: "<element>" }, { value: 12, statName: "might", affects: "<element>" }],
            20: [{ value: 12.5, statName: "hp", affects: "<element>" }, { value: 12.5, statName: "might", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 12, statName: "hp", affects: "<element>" }, { value: 12, statName: "might", affects: "<element>" }],
            15: [{ value: 14.5, statName: "hp", affects: "<element>" }, { value: 14.5, statName: "might", affects: "<element>" }],
            20: [{ value: 15.5, statName: "hp", affects: "<element>" }, { value: 15.5, statName: "might", affects: "<element>" }],
            25: [{ value: 16.5, statName: "hp", affects: "<element>" }, { value: 16.5, statName: "might", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 15, statName: "hp", affects: "<element>" }, { value: 15, statName: "might", affects: "<element>" }],
            15: [{ value: 18, statName: "hp", affects: "<element>" }, { value: 18, statName: "might", affects: "<element>" }],
            20: [{ value: 20, statName: "hp", affects: "<element>" }, { value: 20, statName: "might", affects: "<element>" }]
        },
        "big ii": {
            20: [{ value: 22, statName: "hp", affects: "<element>" }, { value: 22, statName: "might", affects: "<element>" }],
        },
    },

    "might": {
        "small": {
            10: [{ value: 10, statName: "might", affects: "<element>" }],
            15: [{ value: 12, statName: "might", affects: "<element>" }],
            20: [{ value: 13, statName: "might", affects: "<element>" }]
        },
        "small omega": {
            10: [{ value: 10, statName: "might", affects: "<element>" }],
            15: [{ value: 12.5, statName: "might", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 12, statName: "might", affects: "<element>" }],
            15: [{ value: 14.5, statName: "might", affects: "<element>" }],
            20: [{ value: 16, statName: "might", affects: "<element>" }]
        },
        "medium omega": {
            10: [{ value: 12, statName: "might", affects: "<element>" }],
            15: [{ value: 14.5, statName: "might", affects: "<element>" }],
            20: [{ value: 16, statName: "might", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 15, statName: "might", affects: "<element>" }],
            15: [{ value: 18, statName: "might", affects: "<element>" }],
            20: [{ value: 20, statName: "might", affects: "<element>" }]
        },
        "big omega": {
            10: [{ value: 15, statName: "might", affects: "<element>" }],
            15: [{ value: 18, statName: "might", affects: "<element>" }],
            20: [{ value: 20, statName: "might", affects: "<element>" }]
        },
        "big ii": {
            10: [{ value: 16, statName: "might", affects: "<element>" }],
            15: [{ value: 20, statName: "might", affects: "<element>" }],
            20: [{ value: 22, statName: "might", affects: "<element>" }]
        },
        "massive": {
            10: [{ value: 25, statName: "might", affects: "<element>" }],
            15: [{ value: 33, statName: "might", affects: "<element>" }]
        },
    },
    "mystery": {
        "small": {
            10: [{ value: 5, statName: "ca dmg", affects: "<element>" }],
            15: [{ value: 7.5, statName: "ca dmg", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 7, statName: "ca dmg", affects: "<element>" }],
            15: [{ value: 9.5, statName: "ca dmg", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 10, statName: "ca dmg", affects: "<element>" }],
            15: [{ value: 12.5, statName: "ca dmg", affects: "<element>" }]
        },
        "massive": {
            10: [{ value: 20, statName: "ca dmg", affects: "<element>" }],
            15: [{ value: 25, statName: "ca dmg", affects: "<element>" }]
        },
    },

    "onslaught": {
        "big": {
            10: [{ value: 1.75, statName: "bonus dmg (ca)", affects: "<element>" }],
            15: [{ value: 2, statName: "bonus dmg (ca)", affects: "<element>" }]
        },
    },

    "precocity": {
        "medium": {
            10: [{ value: 5, statName: "crit", affects: "<element>" }, { value: 7.5, statName: "heal cap", affects: "<element>" }],
            15: [{ value: 6.5, statName: "crit", affects: "<element>" }, { value: 10, statName: "heal cap", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 8, statName: "crit", affects: "<element>" }, { value: 10, statName: "heal cap", affects: "<element>" }],
            15: [{ value: 10, statName: "crit", affects: "<element>" }, { value: 15, statName: "heal cap", affects: "<element>" }]
        },
    },

    "primacy": {
        "medium": {
            10: [{ value: 12, statName: "might", affects: "<element>" }, { value: 3.5, statName: "da", affects: "<element>" }],
            15: [{ value: 14.5, statName: "might", affects: "<element>" }, { value: 5, statName: "da", affects: "<element>" }],
            20: [{ value: 16, statName: "might", affects: "<element>" }, { value: 6, statName: "da", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 15, statName: "might", affects: "<element>" }, { value: 5, statName: "da", affects: "<element>" }],
            15: [{ value: 18, statName: "might", affects: "<element>" }, { value: 7, statName: "da", affects: "<element>" }]
        },
        "big ii": {
            10: [{ value: 16, statName: "might", affects: "<element>" }, { value: 7, statName: "da", affects: "<element>" }],
            15: [{ value: 20, statName: "might", affects: "<element>" }, { value: 9, statName: "da", affects: "<element>" }]
        },
    },

    "restraint": {
        "small": {
            10: [{ value: 2.2, statName: "da", affects: "<element>" }, { value: 2, statName: "crit", affects: "<element>" }],
            15: [{ value: 3.5, statName: "da", affects: "<element>" }, { value: 3, statName: "crit", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 3.5, statName: "da", affects: "<element>" }, { value: 5, statName: "crit", affects: "<element>" }],
            15: [{ value: 5, statName: "da", affects: "<element>" }, { value: 6.5, statName: "crit", affects: "<element>" }]
        },
    },

    "sapience": {
        "medium": {
            10: [{ value: 2.15, statName: "ta", affects: "<element>" }, { value: 7.5, statName: "heal cap", affects: "<element>" }],
            15: [{ value: 2.9, statName: "ta", affects: "<element>" }, { value: 10, statName: "heal cap", affects: "<element>" }]
        },
    },

    "sentence": {
        "small": {
            10: [{ value: 5, statName: "ca dmg", affects: "<element>" }, { value: 2, statName: "ca dmg cap", affects: "<element>" }],
            15: [{ value: 7.5, statName: "ca dmg", affects: "<element>" }, { value: 3, statName: "ca dmg cap", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 7, statName: "ca dmg", affects: "<element>" }, { value: 3.5, statName: "ca dmg cap", affects: "<element>" }],
            15: [{ value: 9.5, statName: "ca dmg", affects: "<element>" }, { value: 5, statName: "ca dmg cap", affects: "<element>" }]
        },
        "medium omega": {
            10: [{ value: 7, statName: "ca dmg", affects: "<element>" }, { value: 7, statName: "ca dmg cap", affects: "<element>" }],
            15: [{ value: 9.5, statName: "ca dmg", affects: "<element>" }, { value: 9.5, statName: "ca dmg cap", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 10, statName: "ca dmg", affects: "<element>" }, { value: 4.8, statName: "ca dmg cap", affects: "<element>" }],
            15: [{ value: 12.5, statName: "ca dmg", affects: "<element>" }, { value: 6.8, statName: "ca dmg cap", affects: "<element>" }]
        },
    },

    "spearhead": {
        "small": {
            10: [{ value: 1.35, statName: "ta", affects: "<element>" }, { value: 2, statName: "crit", affects: "<element>" }],
            15: [{ value: 2, statName: "ta", affects: "<element>" }, { value: 3, statName: "crit", affects: "<element>" }]
        },
    },

    "stratagem": {
        "medium": {
            15: [{ value: 1.4, statName: "crit amp", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 1.4, statName: "crit amp", affects: "<element>" }],
            15: [{ value: 1.8, statName: "crit amp", affects: "<element>" }]
        },
    },

    "sweep": {
        "big": {
            10: [{ value: 15, statName: "might", affects: "<element>" }],
            15: [{ value: 18, statName: "might", affects: "<element>" }]
        },
    },

    "tempering": {
        "small": {
            10: [{ value: 2.5, statName: "skill dmg cap", affects: "<element>" }, { value: 10000, statName: "skill dmg supp", affects: "<element>" }],
            15: [{ value: 3.5, statName: "skill dmg cap", affects: "<element>" }, { value: 12500, statName: "skill dmg supp", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 3.2, statName: "skill dmg cap", affects: "<element>" }, { value: 15000, statName: "skill dmg supp", affects: "<element>" }],
            15: [{ value: 4.5, statName: "skill dmg cap", affects: "<element>" }, { value: 18000, statName: "skill dmg supp", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 4, statName: "skill dmg cap", affects: "<element>" }, { value: 20000, statName: "skill dmg supp", affects: "<element>" }],
            15: [{ value: 5.5, statName: "skill dmg cap", affects: "<element>" }, { value: 25000, statName: "skill dmg supp", affects: "<element>" }]
        },
    },

    "trium": {
        "small": {
            10: [{ value: 2.5, statName: "ta", affects: "<element>" }, { value: 2.5, statName: "da", affects: "<element>" }],
            15: [{ value: 3.5, statName: "ta", affects: "<element>" }, { value: 3.5, statName: "da", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 3.5, statName: "ta", affects: "<element>" }, { value: 3.5, statName: "da", affects: "<element>" }],
            15: [{ value: 5, statName: "ta", affects: "<element>" }, { value: 5, statName: "da", affects: "<element>" }],
            20: [{ value: 6, statName: "ta", affects: "<element>" }, { value: 6, statName: "da", affects: "<element>" }],
            25: [{ value: 7, statName: "ta", affects: "<element>" }, { value: 7, statName: "da", affects: "<element>" }],
        },
        "big": {
            10: [{ value: 5, statName: "ta", affects: "<element>" }, { value: 5, statName: "da", affects: "<element>" }],
            15: [{ value: 7, statName: "ta", affects: "<element>" }, { value: 7, statName: "da", affects: "<element>" }],
        },
        "big ii": {
            10: [{ value: 7, statName: "ta", affects: "<element>" }, { value: 7, statName: "da", affects: "<element>" }],
            15: [{ value: 9, statName: "ta", affects: "<element>" }, { value: 9, statName: "da", affects: "<element>" }],
        },
        "massive": {
            10: [{ value: 10, statName: "ta", affects: "<element>" }, { value: 10, statName: "da", affects: "<element>" }],
            15: [{ value: 14, statName: "ta", affects: "<element>" }, { value: 14, statName: "da", affects: "<element>" }],
        },
    },

    "tyranny": {
        "big": {
            10: [{ value: 15, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>", unboosted: true }],
            15: [{ value: 18, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>", unboosted: true }],
        },
        "massive": {
            10: [{ value: 18, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>", unboosted: true }],
            15: [{ value: 23, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>", unboosted: true }],
            20: [{ value: 25.5, statName: "might", affects: "<element>" }, { value: 10, statName: "hp cut", affects: "<element>", unboosted: true }],
        },
    },

    "stamina": {
        "small": {
            10: [{ value: (i) => StaminaFormula(i.hp, "small", 10, 85), statName: "stamina", affects: "<element>"}],
            15: [{ value: (i) => StaminaFormula(i.hp, "small", 15, 85), statName: "stamina", affects: "<element>"}],
            20: [{ value: (i) => StaminaFormula(i.hp, "small", 20, 85), statName: "stamina", affects: "<element>"}],
            25: [{ value: (i) => StaminaFormula(i.hp, "small", 25, 85), statName: "stamina", affects: "<element>"}],
        },
        "medium": {
            10: [{ value: (i) => StaminaFormula(i.hp, "medium", 10, 65), statName: "stamina", affects: "<element>"}],
            15: [{ value: (i) => StaminaFormula(i.hp, "medium", 15, 65), statName: "stamina", affects: "<element>"}],
            20: [{ value: (i) => StaminaFormula(i.hp, "medium", 20, 65), statName: "stamina", affects: "<element>"}],
            25: [{ value: (i) => StaminaFormula(i.hp, "medium", 25, 65), statName: "stamina", affects: "<element>"}],
        },
        "big": {
            10: [{ value: (i) => StaminaFormula(i.hp, "big", 10, 56.4), statName: "stamina", affects: "<element>"}],
            15: [{ value: (i) => StaminaFormula(i.hp, "big", 15, 56.4), statName: "stamina", affects: "<element>"}],
            20: [{ value: (i) => StaminaFormula(i.hp, "big", 20, 56.4), statName: "stamina", affects: "<element>"}],
            25: [{ value: (i) => StaminaFormula(i.hp, "big", 25, 56.4), statName: "stamina", affects: "<element>"}],
        },
        "big ii": {
            10: [{ value: (i) => StaminaFormula(i.hp, "big ii", 10, 53.7), statName: "stamina", affects: "<element>"}],
            15: [{ value: (i) => StaminaFormula(i.hp, "big ii", 15, 53.7), statName: "stamina", affects: "<element>"}],
            20: [{ value: (i) => StaminaFormula(i.hp, "big ii", 20, 53.7), statName: "stamina", affects: "<element>"}],
            25: [{ value: (i) => StaminaFormula(i.hp, "big ii", 25, 53.7), statName: "stamina", affects: "<element>"}],
        },
        "medium omega": {
            10: [{ value: (i) => StaminaFormula(i.hp, "medium", 10, 60.4), statName: "omega stamina", affects: "<element>"}],
            15: [{ value: (i) => StaminaFormula(i.hp, "medium", 15, 60.4), statName: "omega stamina", affects: "<element>"}],
            20: [{ value: (i) => StaminaFormula(i.hp, "medium", 20, 60.4), statName: "omega stamina", affects: "<element>"}],
            25: [{ value: (i) => StaminaFormula(i.hp, "medium", 25, 60.4), statName: "omega stamina", affects: "<element>"}],
        },
        "big omega": {
            10: [{ value: (i) => StaminaFormula(i.hp, "big", 10, 56.4), statName: "omega stamina", affects: "<element>"}],
            15: [{ value: (i) => StaminaFormula(i.hp, "big", 15, 56.4), statName: "omega stamina", affects: "<element>"}],
            20: [{ value: (i) => StaminaFormula(i.hp, "big", 20, 56.4), statName: "omega stamina", affects: "<element>"}],
            25: [{ value: (i) => StaminaFormula(i.hp, "big", 25, 56.4), statName: "omega stamina", affects: "<element>"}],
        },
        "small odious": {
            10: [{ value: (i) => StaminaFormula(i.hp, "small", 10, 79.1), statName: "odious stamina", affects: "<element>"}],
            15: [{ value: (i) => StaminaFormula(i.hp, "small", 15, 79.1), statName: "odious stamina", affects: "<element>"}],
            20: [{ value: (i) => StaminaFormula(i.hp, "small", 20, 79.1), statName: "odious stamina", affects: "<element>"}],
            25: [{ value: (i) => StaminaFormula(i.hp, "small", 25, 79.1), statName: "odious stamina", affects: "<element>"}],
        },
        "big odious": {
            10: [{ value: (i) => StaminaFormula(i.hp, "big", 10, 53.5), statName: "odious stamina", affects: "<element>"}],
            15: [{ value: (i) => StaminaFormula(i.hp, "big", 15, 53.5), statName: "odious stamina", affects: "<element>"}],
            20: [{ value: (i) => StaminaFormula(i.hp, "big", 20, 53.5), statName: "odious stamina", affects: "<element>"}],
            25: [{ value: (i) => StaminaFormula(i.hp, "big", 25, 53.5), statName: "odious stamina", affects: "<element>"}],
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
    /// Uniques
    //exaltos
    "Omega Exalto Ardendi": [
        { value: 20, statName: "fire omega", aura: "Ironflame's" }
    ],
    "Omega Exalto Aquae": [
        { value: 20, statName: "water omega", aura: "Oceansoul's" }
    ],
    "Omega Exalto Terrae": [
        { value: 20, statName: "earth omega", aura: "Lifetree's" }
    ],
    "Omega Exalto Aeros": [
        { value: 20, statName: "wind omega", aura: "Stormwyrm's" }
    ],
    "Omega Exalto Luminis": [
        { value: 20, statName: "light omega", aura: "Knightcode's" }
    ],
    "Omega Exalto Caliginis": [
        { value: 20, statName: "dark omega", aura: "Mistfall's" }
    ],

    "Optimus Exalto Ardendi": [
        { value: 30, statName: "fire optimus", aura: "Fire's" },
        { value: 30, statName: "fire optimus", aura: "Hellfire's" },
        { value: 30, statName: "fire optimus", aura: "Inferno's" },
    ],
    "Optimus Exalto Aquae": [
        { value: 30, statName: "water optimus", aura: "Water's" },
        { value: 30, statName: "water optimus", aura: "Tsunami's" },
        { value: 30, statName: "water optimus", aura: "Hoarfrost's" },
    ],
    "Optimus Exalto Terrae": [
        { value: 30, statName: "earth optimus", aura: "Earth's" },
        { value: 30, statName: "earth optimus", aura: "Mountain's" },
        { value: 30, statName: "earth optimus", aura: "Terra's" },
    ],
    "Optimus Exalto Aeros": [
        { value: 30, statName: "wind optimus", aura: "Wind's" },
        { value: 30, statName: "wind optimus", aura: "Whirlwind's" },
        { value: 30, statName: "wind optimus", aura: "Ventosus's" },
    ],
    "Optimus Exalto Luminis": [
        { value: 30, statName: "light optimus", aura: "Light's" },
        { value: 30, statName: "light optimus", aura: "Thunder's" },
        { value: 30, statName: "light optimus", aura: "Zion's" },
    ],
    "Optimus Exalto Caliginis": [
        { value: 30, statName: "dark optimus", aura: "Dark's" },
        { value: 30, statName: "dark optimus", aura: "Hatred's" },
        { value: 30, statName: "dark optimus", aura: "Oblivion's" },
    ],
    //nwf
    "Tidings of the New World": {
        10: [{ value: 18, statName: "ex might", affects: "all" }, { value: 12, statName: "hp", affects: "all" }],
        15: [{ value: 23, statName: "ex might", affects: "all" }, { value: 14.5, statName: "hp", affects: "all" }]
    },
    "Sephirath Haton": [
        { value: 8, statName: "na dmg amp", affects: "weapon:staff" }, { value: 8, statName: "na dmg amp", affects: "weapon:axe" }
    ],
    //celestials
    "Guiding Star's Splendor": [
        { value: 30, statName: "might", affects: "all" }, { value: 25, statName: "def", affects: "all" }, { value: 30, statName: "hp", affects: "all" }
    ],
    "Star-Sea Sovereign's Decree": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:sabre" }, { value: 5, statName: "da", affects: "weapon:sabre" }, { value: 5, statName: "ta", affects: "weapon:sabre" }, { value: 10, statName: "ca dmg", affects: "weapon:sabre" }, { value: 10, statName: "ca dmg cap", affects: "weapon:sabre" }, { value: 5, statName: "dmg cap", affects: "weapon:sabre" }
    ],
    "Dualblade Flash's Bond": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:dagger" }, { value: 5, statName: "da", affects: "weapon:dagger" }, { value: 5, statName: "ta", affects: "weapon:dagger" }, { value: 10, statName: "ca dmg", affects: "weapon:dagger" }, { value: 10, statName: "ca dmg cap", affects: "weapon:dagger" }, { value: 5, statName: "dmg cap", affects: "weapon:dagger" }
    ],
    "Dawnfinder's Calm": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:spear" }, { value: 5, statName: "da", affects: "weapon:spear" }, { value: 5, statName: "ta", affects: "weapon:spear" }, { value: 10, statName: "ca dmg", affects: "weapon:spear" }, { value: 10, statName: "ca dmg cap", affects: "weapon:spear" }, { value: 5, statName: "dmg cap", affects: "weapon:spear" }
    ],
    "Pillar-Smasher's Conviction": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:axe" }, { value: 5, statName: "da", affects: "weapon:axe" }, { value: 5, statName: "ta", affects: "weapon:axe" }, { value: 10, statName: "ca dmg", affects: "weapon:axe" }, { value: 10, statName: "ca dmg cap", affects: "weapon:axe" }, { value: 5, statName: "dmg cap", affects: "weapon:axe" }
    ],
    "Ultimate Wisdom's Shine": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:staff" }, { value: 5, statName: "da", affects: "weapon:staff" }, { value: 5, statName: "ta", affects: "weapon:staff" }, { value: 10, statName: "ca dmg", affects: "weapon:staff" }, { value: 10, statName: "ca dmg cap", affects: "weapon:staff" }, { value: 5, statName: "dmg cap", affects: "weapon:staff" }
    ],
    "Cloud of Howling Twilight": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:gun" }, { value: 5, statName: "da", affects: "weapon:gun" }, { value: 5, statName: "ta", affects: "weapon:gun" }, { value: 10, statName: "ca dmg", affects: "weapon:gun" }, { value: 10, statName: "ca dmg cap", affects: "weapon:gun" }, { value: 5, statName: "dmg cap", affects: "weapon:gun" }
    ],
    "Realm-Breaker's Animus": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:melee" }, { value: 5, statName: "da", affects: "weapon:melee" }, { value: 5, statName: "ta", affects: "weapon:melee" }, { value: 10, statName: "ca dmg", affects: "weapon:melee" }, { value: 10, statName: "ca dmg cap", affects: "weapon:melee" }, { value: 5, statName: "dmg cap", affects: "weapon:melee" }
    ],
    "Heaven-Eye's Light": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:bow" }, { value: 5, statName: "da", affects: "weapon:bow" }, { value: 5, statName: "ta", affects: "weapon:bow" }, { value: 10, statName: "ca dmg", affects: "weapon:bow" }, { value: 10, statName: "ca dmg cap", affects: "weapon:bow" }, { value: 5, statName: "dmg cap", affects: "weapon:bow" }
    ],
    "Mystic Musician's Melody": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:harp" }, { value: 5, statName: "da", affects: "weapon:harp" }, { value: 5, statName: "ta", affects: "weapon:harp" }, { value: 10, statName: "ca dmg", affects: "weapon:harp" }, { value: 10, statName: "ca dmg cap", affects: "weapon:harp" }, { value: 5, statName: "dmg cap", affects: "weapon:harp" }
    ],
    "Cyclic Rebirth's Reverie": [
        { value: 20, statName: "ex might", affects: "all" }, { value: 10, statName: "da", affects: "all" }, { value: 5, statName: "ta", affects: "all" }, { value: 10, statName: "ca dmg", affects: "all" }, { value: 5, statName: "ca dmg cap", affects: "all" }, { value: 5, statName: "dmg cap", affects: "all" },
        { value: 20, statName: "ex might", affects: "weapon:katana" }, { value: 5, statName: "da", affects: "weapon:katana" }, { value: 5, statName: "ta", affects: "weapon:katana" }, { value: 10, statName: "ca dmg", affects: "weapon:katana" }, { value: 10, statName: "ca dmg cap", affects: "weapon:katana" }, { value: 5, statName: "dmg cap", affects: "weapon:katana" }
    ],
    //destroyers
    "Destruction's Godblade III": [
        { value: 35, statName: "ex might", affects: "<element>"}, { value: 20, statName: "bonus des dmg", affects: "<element>"}
    ],
    "Rebirth's Godshield III": [
        { value: 35, statName: "hp", affects: "<element>"}, { value: 10, statName: "bonus des dmg ca", affects: "<element>"}
    ],
}

const summonAuraData = {
    2040034000: {
        "main": {
            0: [{ value: 50, aura: "Ironflame's" }],
            3: [{ value: 100, aura: "Ironflame's" }],
            4: [{ value: 120, aura: "Ironflame's" }],
            5: [{ value: 140, aura: "Ironflame's" }],
            "t1": [{ value: 150, aura: "Ironflame's" }],
            "t2": [{ value: 150, aura: "Ironflame's" }],
            "t3": [{ value: 150, aura: "Ironflame's" }],
            "t4": [{ value: 160, aura: "Ironflame's" }],
            "t5": [{ value: 170, aura: "Ironflame's" }],
        },
        "sub": {

        }
    },
    2040028000: {
        "main": {
            0: [{ value: 50, aura: "Oceansoul's" }],
            3: [{ value: 10, aura: "Oceansoul's" }],
            4: [{ value: 1.20, aura: "Oceansoul's" }],
            5: [{ value: 1.40, aura: "Oceansoul's" }],
            "t1": [{ value: 1.50, aura: "Oceansoul's" }],
            "t2": [{ value: 1.50, aura: "Oceansoul's" }],
            "t3": [{ value: 1.50, aura: "Oceansoul's" }],
            "t4": [{ value: 1.60, aura: "Oceansoul's" }],
            "t5": [{ value: 1.70, aura: "Oceansoul's" }],
        },
        "sub": {

        }
    },
    2040027000: {
        "main": {
            0: [{ value: 50, aura: "Lifetree's" }],
            3: [{ value: 10, aura: "Lifetree's" }],
            4: [{ value: 120, aura: "Lifetree's" }],
            5: [{ value: 140, aura: "Lifetree's" }],
            "t1": [{ value: 150, aura: "Lifetree's" }],
            "t2": [{ value: 150, aura: "Lifetree's" }],
            "t3": [{ value: 150, aura: "Lifetree's" }],
            "t4": [{ value: 160, aura: "Lifetree's" }],
            "t5": [{ value: 170, aura: "Lifetree's" }],
        },
        "sub": {

        }
    },
    2040020000: {
        "main": {
            0: [{ value: 50, aura: "Stormwyrm's" }],
            3: [{ value: 10, aura: "Stormwyrm's" }],
            4: [{ value: 120, aura: "Stormwyrm's" }],
            5: [{ value: 140, aura: "Stormwyrm's" }],
            "t1": [{ value: 150, aura: "Stormwyrm's" }],
            "t2": [{ value: 150, aura: "Stormwyrm's" }],
            "t3": [{ value: 150, aura: "Stormwyrm's" }],
            "t4": [{ value: 160, aura: "Stormwyrm's" }],
            "t5": [{ value: 170, aura: "Stormwyrm's" }],
        },
        "sub": {

        }
    },
    2040047000: {
        "main": {
            0: [{ value: 50, aura: "Knightcode's" }],
            3: [{ value: 10, aura: "Knightcode's" }],
            4: [{ value: 120, aura: "Knightcode's" }],
            5: [{ value: 140, aura: "Knightcode's" }],
            "t1": [{ value: 150, aura: "Knightcode's" }],
            "t2": [{ value: 150, aura: "Knightcode's" }],
            "t3": [{ value: 150, aura: "Knightcode's" }],
            "t4": [{ value: 160, aura: "Knightcode's" }],
            "t5": [{ value: 170, aura: "Knightcode's" }],
        },
        "sub": {

        }
    },
    2040046000: {
        "main": {
            0: [{ value: 50, aura: "Mistfall's" }],
            3: [{ value: 10, aura: "Mistfall's" }],
            4: [{ value: 120, aura: "Mistfall's" }],
            5: [{ value: 140, aura: "Mistfall's" }],
            "t1": [{ value: 150, aura: "Mistfall's" }],
            "t2": [{ value: 150, aura: "Mistfall's" }],
            "t3": [{ value: 150, aura: "Mistfall's" }],
            "t4": [{ value: 160, aura: "Mistfall's" }],
            "t5": [{ value: 170, aura: "Mistfall's" }],
        },
        "sub": {

        }
    },

    2040094000: {
        "main": {
            0: [{ value: 80, aura: "Fire's" },{ value: 80, aura: "Hellfire's" },{ value: 80, aura: "Inferno's" }],
            3: [{ value: 120, aura: "Fire's" },{ value: 120, aura: "Hellfire's" },{ value: 120, aura: "Inferno's" }],
            4: [{ value: 140, aura: "Fire's" },{ value: 140, aura: "Hellfire's" },{ value: 140, aura: "Inferno's" }],
            5: [{ value: 150, aura: "Fire's" },{ value: 150, aura: "Hellfire's" },{ value: 150, aura: "Inferno's" }],
            "t1": [{ value: 150, aura: "Fire's" },{ value: 150, aura: "Hellfire's" },{ value: 150, aura: "Inferno's" }],
            "t2": [{ value: 150, aura: "Fire's" },{ value: 150, aura: "Hellfire's" },{ value: 150, aura: "Inferno's" }],
            "t3": [{ value: 160, aura: "Fire's" },{ value: 160, aura: "Hellfire's" },{ value: 160, aura: "Inferno's" }],
            "t4": [{ value: 160, aura: "Fire's" },{ value: 160, aura: "Hellfire's" },{ value: 160, aura: "Inferno's" }],
            "t5": [{ value: 170, aura: "Fire's" },{ value: 170, aura: "Hellfire's" },{ value: 170, aura: "Inferno's" }],
        }
    },
    2040100000: {
        "main": {
            0: [{ value: 80, aura: "Water's" }, { value: 80, aura: "Tsunami's" }, { value: 80, aura: "Hoarfrost's" }],
            3: [{ value: 120, aura: "Water's" }, { value: 120, aura: "Tsunami's" }, { value: 120, aura: "Hoarfrost's" }],
            4: [{ value: 140, aura: "Water's" }, { value: 140, aura: "Tsunami's" }, { value: 140, aura: "Hoarfrost's" }],
            5: [{ value: 150, aura: "Water's" }, { value: 150, aura: "Tsunami's" }, { value: 150, aura: "Hoarfrost's" }],
            "t1": [{ value: 150, aura: "Water's" }, { value: 150, aura: "Tsunami's" }, { value: 150, aura: "Hoarfrost's" }],
            "t2": [{ value: 150, aura: "Water's" }, { value: 150, aura: "Tsunami's" }, { value: 150, aura: "Hoarfrost's" }],
            "t3": [{ value: 160, aura: "Water's" }, { value: 160, aura: "Tsunami's" }, { value: 160, aura: "Hoarfrost's" }],
            "t4": [{ value: 160, aura: "Water's" }, { value: 160, aura: "Tsunami's" }, { value: 160, aura: "Hoarfrost's" }],
            "t5": [{ value: 170, aura: "Water's" }, { value: 170, aura: "Tsunami's" }, { value: 170, aura: "Hoarfrost's" }],
        }
    },
    2040084000: {
        "main": {
            0: [{ value: 80, aura: "Earth's" }, { value: 80, aura: "Mountain's" }, { value: 80, aura: "Terra's" }],
            3: [{ value: 120, aura: "Earth's" }, { value: 120, aura: "Mountain's" }, { value: 120, aura: "Terra's" }],
            4: [{ value: 140, aura: "Earth's" }, { value: 140, aura: "Mountain's" }, { value: 140, aura: "Terra's" }],
            5: [{ value: 150, aura: "Earth's" }, { value: 150, aura: "Mountain's" }, { value: 150, aura: "Terra's" }],
            "t1": [{ value: 150, aura: "Earth's" }, { value: 150, aura: "Mountain's" }, { value: 150, aura: "Terra's" }],
            "t2": [{ value: 150, aura: "Earth's" }, { value: 150, aura: "Mountain's" }, { value: 150, aura: "Terra's" }],
            "t3": [{ value: 160, aura: "Earth's" }, { value: 160, aura: "Mountain's" }, { value: 160, aura: "Terra's" }],
            "t4": [{ value: 160, aura: "Earth's" }, { value: 160, aura: "Mountain's" }, { value: 160, aura: "Terra's" }],
            "t5": [{ value: 170, aura: "Earth's" }, { value: 170, aura: "Mountain's" }, { value: 170, aura: "Terra's" }],
        }
    },
    2040098000: {
        "main": {
            0: [{ value: 80, aura: "Wind's" }, { value: 80, aura: "Whirlwind's" }, { value: 80, aura: "Ventosus's" }],
            3: [{ value: 120, aura: "Wind's" }, { value: 120, aura: "Whirlwind's" }, { value: 120, aura: "Ventosus's" }],
            4: [{ value: 140, aura: "Wind's" }, { value: 140, aura: "Whirlwind's" }, { value: 140, aura: "Ventosus's" }],
            5: [{ value: 150, aura: "Wind's" }, { value: 150, aura: "Whirlwind's" }, { value: 150, aura: "Ventosus's" }],
            "t1": [{ value: 150, aura: "Wind's" }, { value: 150, aura: "Whirlwind's" }, { value: 150, aura: "Ventosus's" }],
            "t2": [{ value: 150, aura: "Wind's" }, { value: 150, aura: "Whirlwind's" }, { value: 150, aura: "Ventosus's" }],
            "t3": [{ value: 160, aura: "Wind's" }, { value: 160, aura: "Whirlwind's" }, { value: 160, aura: "Ventosus's" }],
            "t4": [{ value: 160, aura: "Wind's" }, { value: 160, aura: "Whirlwind's" }, { value: 160, aura: "Ventosus's" }],
            "t5": [{ value: 170, aura: "Wind's" }, { value: 170, aura: "Whirlwind's" }, { value: 170, aura: "Ventosus's" }],
        }
    },
    2040080000: {
        "main": {
            0: [{ value: 80, aura: "Light's" }, { value: 80, aura: "Thunder's" }, { value: 80, aura: "Zion's" }],
            3: [{ value: 120, aura: "Light's" }, { value: 120, aura: "Thunder's" }, { value: 120, aura: "Zion's" }],
            4: [{ value: 140, aura: "Light's" }, { value: 140, aura: "Thunder's" }, { value: 140, aura: "Zion's" }],
            5: [{ value: 150, aura: "Light's" }, { value: 150, aura: "Thunder's" }, { value: 150, aura: "Zion's" }],
            "t1": [{ value: 150, aura: "Light's" }, { value: 150, aura: "Thunder's" }, { value: 150, aura: "Zion's" }],
            "t2": [{ value: 150, aura: "Light's" }, { value: 150, aura: "Thunder's" }, { value: 150, aura: "Zion's" }],
            "t3": [{ value: 160, aura: "Light's" }, { value: 160, aura: "Thunder's" }, { value: 160, aura: "Zion's" }],
            "t4": [{ value: 160, aura: "Light's" }, { value: 160, aura: "Thunder's" }, { value: 160, aura: "Zion's" }],
            "t5": [{ value: 170, aura: "Light's" }, { value: 170, aura: "Thunder's" }, { value: 170, aura: "Zion's" }],
        }
    },
    2040090000: {
        "main": {
            0: [{ value: 80, aura: "Dark's" }, { value: 80, aura: "Hatred's" }, { value: 80, aura: "Oblivion's" }],
            3: [{ value: 120, aura: "Dark's" }, { value: 120, aura: "Hatred's" }, { value: 120, aura: "Oblivion's" }],
            4: [{ value: 140, aura: "Dark's" }, { value: 140, aura: "Hatred's" }, { value: 140, aura: "Oblivion's" }],
            5: [{ value: 150, aura: "Dark's" }, { value: 150, aura: "Hatred's" }, { value: 150, aura: "Oblivion's" }],
            "t1": [{ value: 150, aura: "Dark's" }, { value: 150, aura: "Hatred's" }, { value: 150, aura: "Oblivion's" }],
            "t2": [{ value: 150, aura: "Dark's" }, { value: 150, aura: "Hatred's" }, { value: 150, aura: "Oblivion's" }],
            "t3": [{ value: 160, aura: "Dark's" }, { value: 160, aura: "Hatred's" }, { value: 160, aura: "Oblivion's" }],
            "t4": [{ value: 160, aura: "Dark's" }, { value: 160, aura: "Hatred's" }, { value: 160, aura: "Oblivion's" }],
            "t5": [{ value: 170, aura: "Dark's" }, { value: 170, aura: "Hatred's" }, { value: 170, aura: "Oblivion's" }],
        }
    },

    2040430000: {
        "sub": {
            3: [{value: 20, aura: "Ironflame's"}, {value: 20, aura: "Oceansoul's"}, {value: 20, aura: "Stormwyrm's"}, {value: 20, aura: "Lifetree's"}, {value: 20, aura: "Knightcode's"}, {value: 20, aura: "Mistfall's"}],
            4: [{value: 30, aura: "Ironflame's"}, {value: 30, aura: "Oceansoul's"}, {value: 30, aura: "Stormwyrm's"}, {value: 30, aura: "Lifetree's"}, {value: 30, aura: "Knightcode's"}, {value: 30, aura: "Mistfall's"}]
        }
    }
}

function StaminaFormula(hp, size, sl, coef) {
    if (hp < 25) return 0;
    let res;
    if ((sl <= 15 && size != "small") || (sl <= 10 && size == "small")) res = Math.pow(hp / (coef - sl), 2.9) + 2.1;
    else if (sl <= 15 && size == "small") res = Math.pow(hp / (coef - (10 + (2 * (sl - 10)))), 2.9) + 2.1;
    else if (sl <= 20) res = Math.pow(hp / (coef - (15 + (0.4 * (sl-15)))), 2.9) + 2.1;
    else if (sl < 25) res = Math.pow(hp / coef - (17 + 0.34 * (sl-20)), 2.9) + 2.1;
    else res = Math.pow(hp / (coef - 18.7), 2.9) + 2.1;
    return Math.round(res * 10000) / 10000;
}

function EnmityFormula(hp, coef) {
    let invhp = (100 - hp) / 100;
    let res = coef * ((1 + 2 * invhp) * invhp);
    return Math.round(res * 10000) / 10000;
}