const skillData = {
    "Trium": {
        "small": {
            10: [{ value: 2.5, stat: "ta", affects: "<element>" }]
        }
    }
}

let omegaMods = ["Ironflame's","Oceansoul's","Lifetree's","Stormwyrm's","Knightcode's","Mistfall's"];
let primalMods = ["Fire's","Water's","Earth's","Wind's","Light's","Dark's","Hellfire's","Tsunami's","Mountain's","Whirlwind's","Thunder's","Hatred's","Inferno's","Hoarfrost's","Terra's","Ventosus's","Zion's","Oblivion's"];
let boost = "unboosted"
if (omegaMods.includes(s1Name.split(" ")[0])) boost = "magna"
else if (primalMods.includes(s1Name.split(" ")[0])) boost = "primal"
//skillData[