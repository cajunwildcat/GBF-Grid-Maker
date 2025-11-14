const omegaMods = {
    "Ironflame's": "Fire", "Oceansoul's": "Water", "Lifetree's": "Earth", "Stormwyrm's": "Wind", "Knightcode's":
        "Light", "Mistfall's": "Dark"
};
const primalMods = { "Fire's": { element: "Fire", size: "small" }, "Water's": { element: "Water", size: "small" }, "Earth's": { element: "Earth", size: "small" }, "Wind's": { element: "Wind", size: "small" }, "Light's": { element: "Light", size: "small" }, "Dark's": { element: "Dark", size: "small" }, "Hellfire's": { element: "Fire", size: "medium" }, "Tsunami's": { element: "Water", size: "medium" }, "Mountain's": { element: "Earth", size: "medium" }, "Whirlwind's": { element: "Wind", size: "medium" }, "Thunder's": { element: "Light", size: "medium" }, "Hatred's": { element: "Dark", size: "medium" }, "Inferno's": { element: "Fire", size: "big" }, "Hoarfrost's": { element: "Water", size: "big" }, "Terra's": { element: "Earth", size: "big" }, "Ventosus's": { element: "Wind", size: "big" }, "Zion's": { element: "Light", size: "big" }, "Oblivion's": { element: "Dark", size: "big" } };
const gridSkillCaps = {
    //red
    "might": { cap: Number.POSITIVE_INFINITY, sortOrder: 1 },
    "omega might": { cap: Number.POSITIVE_INFINITY, sortOrder: 2 },
    "ex might": { cap: Number.POSITIVE_INFINITY, sortOrder: 3 },
    "stamina": { cap: Number.POSITIVE_INFINITY, sortOrder: 4 },
    "omega stamina": { cap: Number.POSITIVE_INFINITY, sortOrder: 5 },
    "enmity": { cap: 800, sortOrder: 6 },
    "omega enmity": { cap: 800, sortOrder: 7 },
    "ex enmity": { cap: 800, sortOrder: 8 },
    "ex might (sp)": { cap: 80, sortOrder: 9 },
    "ele atk (prog)": { cap: 75, sortOrder: 10 },
    "da": { cap: 75, sortOrder: 11 },
    "ta": { cap: 75, sortOrder: 12 },
    "crit": { cap: 100, sortOrder: 13 },
    "crit (sp)": { cap: 100, sortOrder: 14 },
    "counter rate": { cap: 20, sortOrder: 15 },
    "counter dmg": { cap: Number.POSITIVE_INFINITY, sortOrder: 15 },
    "fire optimus": { cap: 90, sortOrder: 16 },
    "water optimus": { cap: 90, sortOrder: 17 },
    "earth optimus": { cap: 90, sortOrder: 18 },
    "wind optimus": { cap: 90, sortOrder: 19 },
    "light optimus": { cap: 90, sortOrder: 20 },
    "dark optimus": { cap: 90, sortOrder: 21 },
    "fire omega": { cap: 100, sortOrder: 22 },
    "water omega": { cap: 100, sortOrder: 23 },
    "earth omega": { cap: 100, sortOrder: 24 },
    "wind omega": { cap: 100, sortOrder: 25 },
    "light omega": { cap: 100, sortOrder: 26 },
    "dark omega": { cap: 100, sortOrder: 27 },
    "ele atk": { cap: 40, sortOrder: 28 },
    "bonus dmg": { cap: 50, sortOrder: 29 },
    "bonus dmg (ca)": { cap: 20, sortOrder: 30 },
    //green
    "hp": { cap: 400, sortOrder: 31 },
    "hp cut": { cap: 70, sortOrder: 32 },
    "hp dmg": { cap: 40, sortOrder: 33 },
    "heal cap": { cap: 100, sortOrder: 34 },
    //blue
    "def": { cap: 400, sortOrder: 35 },
    "hit to def": { cap: Number.POSITIVE_INFINITY, sortOrder: 35 },
    "debuff res": { cap: 30, sortOrder: 36 },
    "fire reduction": { cap: 30, sortOrder: 37 },
    "water reduction": { cap: 30, sortOrder: 38 },
    "earth reduction": { cap: 30, sortOrder: 39 },
    "wind reduction": { cap: 30, sortOrder: 40 },
    "light reduction": { cap: 30, sortOrder: 41 },
    "dark reduction": { cap: 30, sortOrder: 42 },
    //yellow
    "dmg cap": { cap: 20, sortOrder: 43 },
    "dmg cap (sp)": { cap: 20, sortOrder: 44 },
    "na dmg cap": { cap: 20, sortOrder: 45 },
    "ca dmg": { cap: 120, sortOrder: 46 },
    "ca dmg cap": { cap: 100, sortOrder: 47 },
    "ca dmg cap (sp)": { cap: 100, sortOrder: 48 },
    "ca dmg supp": { cap: 1000000, sortOrder: 49 },
    "cb dmg": { cap: 120, sortOrder: 50 },
    "cb dmg cap": { cap: 100, sortOrder: 51 },
    "dmg amp": { cap: Number.POSITIVE_INFINITY, sortOrder: 70 },
    "cb dmg amp": { cap: 200, sortOrder: 52 },
    "fc dmg amp": { cap: 200, sortOrder: 53 },
    "crit amp": { cap: 20, sortOrder: 54 },
    "skill dmg cap": { cap: 100, sortOrder: 55 },
    "skill dmg supp": { cap: 200000, sortOrder: 56 },
    "dmg supp": { cap: 100000, sortOrder: 57 },
    "na dmg supp": { cap: 100000, sortOrder: 58 },
    "charge gain": { cap: 50, sortOrder: 59 },
    "na dmg amp": { cap: 30, sortOrder: 60 },
    "na dmg amp (sp)": { cap: 20, sortOrder: 61 },
    "ca dmg amp (sp)": { cap: 20, sortOrder: 62 },
    "ca dmg cap (sp)": { cap: 60, sortOrder: 63 },
    "skill dmg amp (sp)": { cap: 20, sortOrder: 64 },
    "def ignore": { cap: 30, sortOrder: 65 },
    "dmg cap (arc)": { cap: 20, sortOrder: 66 },
    "ca dmg amp (arc)": { cap: 20, sortOrder: 67 },
    "na dmg amp (arc)": { cap: 15, sortOrder: 68 },
    "skill dmg amp (arc)": { cap: 10, sortOrder: 69 },
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
            10: [{ value: 12, statName: "might", affects: "<element>" }, { value: -10, statName: "da", affects: "<element>" }],
            15: [{ value: 14.5, statName: "might", affects: "<element>" }, { value: -10, statName: "da", affects: "<element>" }]
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
    /// Uniques
    //exaltos
    "Omega Exalto Ardendi": [
        { value: 0.2, statName: "fire omega", aura: "Ironflame's" }
    ],
    "Omega Exalto Aquae": [
        { value: 0.2, statName: "water omega", aura: "Oceansoul's" }
    ],
    "Omega Exalto Terrae": [
        { value: 0.2, statName: "earth omega", aura: "Lifetree's" }
    ],
    "Omega Exalto Aeros": [
        { value: 0.2, statName: "wind omega", aura: "Stormwyrm's" }
    ],
    "Omega Exalto Luminis": [
        { value: 0.2, statName: "light omega", aura: "Knightcode's" }
    ],
    "Omega Exalto Caliginis": [
        { value: 0.2, statName: "dark omega", aura: "Mistfall's" }
    ],

    "Optimus Exalto Ardendi": [
        { value: 0.3, statName: "fire optimus", aura: "Fire's" },
        { value: 0.3, statName: "fire optimus", aura: "Hellfire's" },
        { value: 0.3, statName: "fire optimus", aura: "Inferno's" },
    ],
    "Optimus Exalto Aquae": [
        { value: 0.3, statName: "water optimus", aura: "Water's" },
        { value: 0.3, statName: "water optimus", aura: "Tsunami's" },
        { value: 0.3, statName: "water optimus", aura: "Hoarfrost's" },
    ],
    "Optimus Exalto Terrae": [
        { value: 0.3, statName: "earth optimus", aura: "Earth's" },
        { value: 0.3, statName: "earth optimus", aura: "Mountain's" },
        { value: 0.3, statName: "earth optimus", aura: "Terra's" },
    ],
    "Optimus Exalto Aeros": [
        { value: 0.3, statName: "wind optimus", aura: "Wind's" },
        { value: 0.3, statName: "wind optimus", aura: "Whirlwind's" },
        { value: 0.3, statName: "wind optimus", aura: "Ventosus's" },
    ],
    "Optimus Exalto Luminis": [
        { value: 0.3, statName: "light optimus", aura: "Light's" },
        { value: 0.3, statName: "light optimus", aura: "Thunder's" },
        { value: 0.3, statName: "light optimus", aura: "Zion's" },
    ],
    "Optimus Exalto Caliginis": [
        { value: 0.3, statName: "dark optimus", aura: "Dark's" },
        { value: 0.3, statName: "dark optimus", aura: "Hatred's" },
        { value: 0.3, statName: "dark optimus", aura: "Oblivion's" },
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
}
const summonAuraData = {
    2040034000: {
        "main": {
            0: [{ value: 0.5, aura: "Ironflame's" }],
            3: [{ value: 1, aura: "Ironflame's" }],
            4: [{ value: 1.2, aura: "Ironflame's" }],
            5: [{ value: 1.4, aura: "Ironflame's" }],
            "t1": [{ value: 1.5, aura: "Ironflame's" }],
            "t2": [{ value: 1.5, aura: "Ironflame's" }],
            "t3": [{ value: 1.5, aura: "Ironflame's" }],
            "t4": [{ value: 1.6, aura: "Ironflame's" }],
            "t5": [{ value: 1.7, aura: "Ironflame's" }],
        },
        "sub": {

        }
    },
    2040028000: {
        "main": {
            0: [{ value: 0.5, aura: "Oceansoul's" }],
            3: [{ value: 1, aura: "Oceansoul's" }],
            4: [{ value: 1.2, aura: "Oceansoul's" }],
            5: [{ value: 1.4, aura: "Oceansoul's" }],
            "t1": [{ value: 1.5, aura: "Oceansoul's" }],
            "t2": [{ value: 1.5, aura: "Oceansoul's" }],
            "t3": [{ value: 1.5, aura: "Oceansoul's" }],
            "t4": [{ value: 1.6, aura: "Oceansoul's" }],
            "t5": [{ value: 1.7, aura: "Oceansoul's" }],
        },
        "sub": {

        }
    },
    2040027000: {
        "main": {
            0: [{ value: 0.5, aura: "Lifetree's" }],
            3: [{ value: 1, aura: "Lifetree's" }],
            4: [{ value: 1.2, aura: "Lifetree's" }],
            5: [{ value: 1.4, aura: "Lifetree's" }],
            "t1": [{ value: 1.5, aura: "Lifetree's" }],
            "t2": [{ value: 1.5, aura: "Lifetree's" }],
            "t3": [{ value: 1.5, aura: "Lifetree's" }],
            "t4": [{ value: 1.6, aura: "Lifetree's" }],
            "t5": [{ value: 1.7, aura: "Lifetree's" }],
        },
        "sub": {

        }
    },
    2040020000: {
        "main": {
            0: [{ value: 0.5, aura: "Stormwyrm's" }],
            3: [{ value: 1, aura: "Stormwyrm's" }],
            4: [{ value: 1.2, aura: "Stormwyrm's" }],
            5: [{ value: 1.4, aura: "Stormwyrm's" }],
            "t1": [{ value: 1.5, aura: "Stormwyrm's" }],
            "t2": [{ value: 1.5, aura: "Stormwyrm's" }],
            "t3": [{ value: 1.5, aura: "Stormwyrm's" }],
            "t4": [{ value: 1.6, aura: "Stormwyrm's" }],
            "t5": [{ value: 1.7, aura: "Stormwyrm's" }],
        },
        "sub": {

        }
    },
    2040047000: {
        "main": {
            0: [{ value: 0.5, aura: "Knightcode's" }],
            3: [{ value: 1, aura: "Knightcode's" }],
            4: [{ value: 1.2, aura: "Knightcode's" }],
            5: [{ value: 1.4, aura: "Knightcode's" }],
            "t1": [{ value: 1.5, aura: "Knightcode's" }],
            "t2": [{ value: 1.5, aura: "Knightcode's" }],
            "t3": [{ value: 1.5, aura: "Knightcode's" }],
            "t4": [{ value: 1.6, aura: "Knightcode's" }],
            "t5": [{ value: 1.7, aura: "Knightcode's" }],
        },
        "sub": {

        }
    },
    2040046000: {
        "main": {
            0: [{ value: 0.5, aura: "Mistfall's" }],
            3: [{ value: 1, aura: "Mistfall's" }],
            4: [{ value: 1.2, aura: "Mistfall's" }],
            5: [{ value: 1.4, aura: "Mistfall's" }],
            "t1": [{ value: 1.5, aura: "Mistfall's" }],
            "t2": [{ value: 1.5, aura: "Mistfall's" }],
            "t3": [{ value: 1.5, aura: "Mistfall's" }],
            "t4": [{ value: 1.6, aura: "Mistfall's" }],
            "t5": [{ value: 1.7, aura: "Mistfall's" }],
        },
        "sub": {

        }
    },

    2040094000: {
        "main": {
            0: [{ value: 0.8, aura: "Fire's" },{ value: 0.8, aura: "Hellfire's" },{ value: 0.8, aura: "Inferno's" }],
            3: [{ value: 1.2, aura: "Fire's" },{ value: 1.2, aura: "Hellfire's" },{ value: 1.2, aura: "Inferno's" }],
            4: [{ value: 1.4, aura: "Fire's" },{ value: 1.4, aura: "Hellfire's" },{ value: 1.4, aura: "Inferno's" }],
            5: [{ value: 1.5, aura: "Fire's" },{ value: 1.5, aura: "Hellfire's" },{ value: 1.5, aura: "Inferno's" }],
            "t1": [{ value: 1.5, aura: "Fire's" },{ value: 1.5, aura: "Hellfire's" },{ value: 1.5, aura: "Inferno's" }],
            "t2": [{ value: 1.5, aura: "Fire's" },{ value: 1.5, aura: "Hellfire's" },{ value: 1.5, aura: "Inferno's" }],
            "t3": [{ value: 1.6, aura: "Fire's" },{ value: 1.6, aura: "Hellfire's" },{ value: 1.6, aura: "Inferno's" }],
            "t4": [{ value: 1.6, aura: "Fire's" },{ value: 1.6, aura: "Hellfire's" },{ value: 1.6, aura: "Inferno's" }],
            "t5": [{ value: 1.7, aura: "Fire's" },{ value: 1.7, aura: "Hellfire's" },{ value: 1.7, aura: "Inferno's" }],
        }
    },
    2040100000: {
        "main": {
            0: [{ value: 0.8, aura: "Water's" }, { value: 0.8, aura: "Tsunami's" }, { value: 0.8, aura: "Hoarfrost's" }],
            3: [{ value: 1.2, aura: "Water's" }, { value: 1.2, aura: "Tsunami's" }, { value: 1.2, aura: "Hoarfrost's" }],
            4: [{ value: 1.4, aura: "Water's" }, { value: 1.4, aura: "Tsunami's" }, { value: 1.4, aura: "Hoarfrost's" }],
            5: [{ value: 1.5, aura: "Water's" }, { value: 1.5, aura: "Tsunami's" }, { value: 1.5, aura: "Hoarfrost's" }],
            "t1": [{ value: 1.5, aura: "Water's" }, { value: 1.5, aura: "Tsunami's" }, { value: 1.5, aura: "Hoarfrost's" }],
            "t2": [{ value: 1.5, aura: "Water's" }, { value: 1.5, aura: "Tsunami's" }, { value: 1.5, aura: "Hoarfrost's" }],
            "t3": [{ value: 1.6, aura: "Water's" }, { value: 1.6, aura: "Tsunami's" }, { value: 1.6, aura: "Hoarfrost's" }],
            "t4": [{ value: 1.6, aura: "Water's" }, { value: 1.6, aura: "Tsunami's" }, { value: 1.6, aura: "Hoarfrost's" }],
            "t5": [{ value: 1.7, aura: "Water's" }, { value: 1.7, aura: "Tsunami's" }, { value: 1.7, aura: "Hoarfrost's" }],
        }
    },
    2040084000: {
        "main": {
            0: [{ value: 0.8, aura: "Earth's" }, { value: 0.8, aura: "Mountain's" }, { value: 0.8, aura: "Terra's" }],
            3: [{ value: 1.2, aura: "Earth's" }, { value: 1.2, aura: "Mountain's" }, { value: 1.2, aura: "Terra's" }],
            4: [{ value: 1.4, aura: "Earth's" }, { value: 1.4, aura: "Mountain's" }, { value: 1.4, aura: "Terra's" }],
            5: [{ value: 1.5, aura: "Earth's" }, { value: 1.5, aura: "Mountain's" }, { value: 1.5, aura: "Terra's" }],
            "t1": [{ value: 1.5, aura: "Earth's" }, { value: 1.5, aura: "Mountain's" }, { value: 1.5, aura: "Terra's" }],
            "t2": [{ value: 1.5, aura: "Earth's" }, { value: 1.5, aura: "Mountain's" }, { value: 1.5, aura: "Terra's" }],
            "t3": [{ value: 1.6, aura: "Earth's" }, { value: 1.6, aura: "Mountain's" }, { value: 1.6, aura: "Terra's" }],
            "t4": [{ value: 1.6, aura: "Earth's" }, { value: 1.6, aura: "Mountain's" }, { value: 1.6, aura: "Terra's" }],
            "t5": [{ value: 1.7, aura: "Earth's" }, { value: 1.7, aura: "Mountain's" }, { value: 1.7, aura: "Terra's" }],
        }
    },
    2040098000: {
        "main": {
            0: [{ value: 0.8, aura: "Wind's" }, { value: 0.8, aura: "Whirlwind's" }, { value: 0.8, aura: "Ventosus's" }],
            3: [{ value: 1.2, aura: "Wind's" }, { value: 1.2, aura: "Whirlwind's" }, { value: 1.2, aura: "Ventosus's" }],
            4: [{ value: 1.4, aura: "Wind's" }, { value: 1.4, aura: "Whirlwind's" }, { value: 1.4, aura: "Ventosus's" }],
            5: [{ value: 1.5, aura: "Wind's" }, { value: 1.5, aura: "Whirlwind's" }, { value: 1.5, aura: "Ventosus's" }],
            "t1": [{ value: 1.5, aura: "Wind's" }, { value: 1.5, aura: "Whirlwind's" }, { value: 1.5, aura: "Ventosus's" }],
            "t2": [{ value: 1.5, aura: "Wind's" }, { value: 1.5, aura: "Whirlwind's" }, { value: 1.5, aura: "Ventosus's" }],
            "t3": [{ value: 1.6, aura: "Wind's" }, { value: 1.6, aura: "Whirlwind's" }, { value: 1.6, aura: "Ventosus's" }],
            "t4": [{ value: 1.6, aura: "Wind's" }, { value: 1.6, aura: "Whirlwind's" }, { value: 1.6, aura: "Ventosus's" }],
            "t5": [{ value: 1.7, aura: "Wind's" }, { value: 1.7, aura: "Whirlwind's" }, { value: 1.7, aura: "Ventosus's" }],
        }
    },
    2040080000: {
        "main": {
            0: [{ value: 0.8, aura: "Light's" }, { value: 0.8, aura: "Thunder's" }, { value: 0.8, aura: "Zion's" }],
            3: [{ value: 1.2, aura: "Light's" }, { value: 1.2, aura: "Thunder's" }, { value: 1.2, aura: "Zion's" }],
            4: [{ value: 1.4, aura: "Light's" }, { value: 1.4, aura: "Thunder's" }, { value: 1.4, aura: "Zion's" }],
            5: [{ value: 1.5, aura: "Light's" }, { value: 1.5, aura: "Thunder's" }, { value: 1.5, aura: "Zion's" }],
            "t1": [{ value: 1.5, aura: "Light's" }, { value: 1.5, aura: "Thunder's" }, { value: 1.5, aura: "Zion's" }],
            "t2": [{ value: 1.5, aura: "Light's" }, { value: 1.5, aura: "Thunder's" }, { value: 1.5, aura: "Zion's" }],
            "t3": [{ value: 1.6, aura: "Light's" }, { value: 1.6, aura: "Thunder's" }, { value: 1.6, aura: "Zion's" }],
            "t4": [{ value: 1.6, aura: "Light's" }, { value: 1.6, aura: "Thunder's" }, { value: 1.6, aura: "Zion's" }],
            "t5": [{ value: 1.7, aura: "Light's" }, { value: 1.7, aura: "Thunder's" }, { value: 1.7, aura: "Zion's" }],
        }
    },
    2040090000: {
        "main": {
            0: [{ value: 0.8, aura: "Dark's" }, { value: 0.8, aura: "Hatred's" }, { value: 0.8, aura: "Oblivion's" }],
            3: [{ value: 1.2, aura: "Dark's" }, { value: 1.2, aura: "Hatred's" }, { value: 1.2, aura: "Oblivion's" }],
            4: [{ value: 1.4, aura: "Dark's" }, { value: 1.4, aura: "Hatred's" }, { value: 1.4, aura: "Oblivion's" }],
            5: [{ value: 1.5, aura: "Dark's" }, { value: 1.5, aura: "Hatred's" }, { value: 1.5, aura: "Oblivion's" }],
            "t1": [{ value: 1.5, aura: "Dark's" }, { value: 1.5, aura: "Hatred's" }, { value: 1.5, aura: "Oblivion's" }],
            "t2": [{ value: 1.5, aura: "Dark's" }, { value: 1.5, aura: "Hatred's" }, { value: 1.5, aura: "Oblivion's" }],
            "t3": [{ value: 1.6, aura: "Dark's" }, { value: 1.6, aura: "Hatred's" }, { value: 1.6, aura: "Oblivion's" }],
            "t4": [{ value: 1.6, aura: "Dark's" }, { value: 1.6, aura: "Hatred's" }, { value: 1.6, aura: "Oblivion's" }],
            "t5": [{ value: 1.7, aura: "Dark's" }, { value: 1.7, aura: "Hatred's" }, { value: 1.7, aura: "Oblivion's" }],
        }
    },
}