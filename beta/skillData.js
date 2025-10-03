const omegaMods = {
    "Ironflame's": "Fire", "Oceansoul's": "Water", "Lifetree's": "Earth", "Stormwyrm's": "Wind", "Knightcode's":
        "Light", "Mistfall's": "Dark"
};
const primalMods = { "Fire's": { element: "Fire", size: "small" }, "Water's": { element: "Water", size: "small" }, "Earth's": { element: "Earth", size: "small" }, "Wind's": { element: "Wind", size: "small" }, "Light's": { element: "Light", size: "small" }, "Dark's": { element: "Dark", size: "small" }, "Hellfire's": { element: "Fire", size: "medium" }, "Tsunami's": { element: "Water", size: "medium" }, "Mountain's": { element: "Earth", size: "medium" }, "Whirlwind's": { element: "Wind", size: "medium" }, "Thunder's": { element: "Light", size: "medium" }, "Hatred's": { element: "Dark", size: "medium" }, "Inferno's": { element: "Fire", size: "big" }, "Hoarfrost's": { element: "Water", size: "big" }, "Terra's": { element: "Earth", size: "big" }, "Ventosus's": { element: "Wind", size: "big" }, "Zion's": { element: "Light", size: "big" }, "Oblivion's": { element: "Dark", size: "big" } };
const skillData = {
    "fandango": {
        "small": {
            10: [{ value: 1.35, stat: "ta", affects: "<element>" }, { value: 10, stat: "might", affects: "<element>" }],
            15: [{ value: 2, stat: "ta", affects: "<element>" }, { value: 12, stat: "might", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 2.15, stat: "ta", affects: "<element>" }, { value: 12, stat: "might", affects: "<element>" }],
            15: [{ value: 2.9, stat: "ta", affects: "<element>" }, { value: 14.5, stat: "might", affects: "<element>" }],
            20: [{ value: 3.65, stat: "ta", affects: "<element>" }, { value: 16, stat: "might", affects: "<element>" }]
        },
        "big": {
            10: [{ value: 3.45, stat: "ta", affects: "<element>" }, { value: 15, stat: "might", affects: "<element>" }],
            15: [{ value: 4.2, stat: "ta", affects: "<element>" }, { value: 18, stat: "might", affects: "<element>" }]
        }
    },
    "trium": {
        "small": {
            10: [{ value: 2.5, stat: "ta", affects: "<element>" }],
            15: [{ value: 3.5, stat: "ta", affects: "<element>" }]
        },
        "medium": {
            10: [{ value: 3.5, stat: "ta", affects: "<element>" }],
            15: [{ value: 5, stat: "ta", affects: "<element>" }],
            20: [{ value: 6, stat: "ta", affects: "<element>" }],
            25: [{ value: 7, stat: "ta", affects: "<element>" }],
        },
        "big": {
            10: [{ value: 5, stat: "ta", affects: "<element>" }],
            15: [{ value: 7, stat: "ta", affects: "<element>" }],
        },
        "big ii": {
            10: [{ value: 7, stat: "ta", affects: "<element>" }],
            15: [{ value: 9, stat: "ta", affects: "<element>" }],
        },
        "massive": {
            10: [{ value: 10, stat: "ta", affects: "<element>" }],
            15: [{ value: 14, stat: "ta", affects: "<element>" }],
        },
    },
}