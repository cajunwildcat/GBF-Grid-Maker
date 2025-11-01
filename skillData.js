const omegaMods = {
    "Ironflame's": "Fire", "Oceansoul's": "Water", "Lifetree's": "Earth", "Stormwyrm's": "Wind", "Knightcode's":
        "Light", "Mistfall's": "Dark"
};
const primalMods = { "Fire's": { element: "Fire", size: "small" }, "Water's": { element: "Water", size: "small" }, "Earth's": { element: "Earth", size: "small" }, "Wind's": { element: "Wind", size: "small" }, "Light's": { element: "Light", size: "small" }, "Dark's": { element: "Dark", size: "small" }, "Hellfire's": { element: "Fire", size: "medium" }, "Tsunami's": { element: "Water", size: "medium" }, "Mountain's": { element: "Earth", size: "medium" }, "Whirlwind's": { element: "Wind", size: "medium" }, "Thunder's": { element: "Light", size: "medium" }, "Hatred's": { element: "Dark", size: "medium" }, "Inferno's": { element: "Fire", size: "big" }, "Hoarfrost's": { element: "Water", size: "big" }, "Terra's": { element: "Earth", size: "big" }, "Ventosus's": { element: "Wind", size: "big" }, "Zion's": { element: "Light", size: "big" }, "Oblivion's": { element: "Dark", size: "big" } };
const skillData = {
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
    "tempering": {
        "small": {
            10: [{value: 2.5, statName: "skillDmgCap", affects: "<element>"}, {value: 10000, statName: "skillDmgSupp", affects: "<element>"}],
            15: [{value: 3.5, statName: "skillDmgCap", affects: "<element>"}, {value: 12500, statName: "skillDmgSupp", affects: "<element>"}]
        },
        "medium": {
            10: [{value: 3.2, statName: "skillDmgCap", affects: "<element>"}, {value: 15000, statName: "skillDmgSupp", affects: "<element>"}],
            15: [{value: 4.5, statName: "skillDmgCap", affects: "<element>"}, {value: 18000, statName: "skillDmgSupp", affects: "<element>"}]
        },
        "big": {
            10: [{value: 4.0, statName: "skillDmgCap", affects: "<element>"}, {value: 20000, statName: "skillDmgSupp", affects: "<element>"}],
            15: [{value: 5.5, statName: "skillDmgCap", affects: "<element>"}, {value: 25000, statName: "skillDmgSupp", affects: "<element>"}]
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
    ]
}