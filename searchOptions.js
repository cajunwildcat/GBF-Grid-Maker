const opusSkillOptions = {
    skill2: [
        { label: "Auto", metatags: ["auto", "α Revelation", "normal", "alpha"], img: "./assets/Ws_skill_normal_limit.png" },
        { label: "Skill", metatags: ["skill", "β Revelation", "beta"], img: "./assets/Ws_skill_ability_limit.png" },
        { label: "Charge Attack", metatags: ["ca", "γ Revelation", "gamma", "ougi", "charge attack"], img: "./assets/Ws_skill_special_limit.png" },
        { label: "Chain Burst", metatags: ["cb", "Δ Revelation", "delta", "chain burst"], img: "./assets/Ws_skill_chain_limit.png" },
    ],
    skill3: [
        { label: "Stamina", metatags: ["stamina", "strength"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_whole_m_<element>_3.webp" },
        { label: "Emnity", metatags: ["emnity", "zeal"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_backwater_m_<element>_3.webp" },
        { label: "Trium", metatags: ["strife", "trium"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_ta_m_<element>_2.webp" },
        { label: "Progression", metatags: ["progression", "prosperity"], img: "./assets/skill_item_14004.jpg" },
        { label: "Celere", metatags: ["celere", "temperament"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_moment_m_<element>.webp" },
        { label: "Majesty", metatags: ["majesty", "restoration"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_god_m_<element>_2.webp" },
        { label: "Glory", metatags: ["glory", "glorification"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_hero_m_<element>_3.webp" },
        { label: "Tempation", metatags: ["freyr", "temptation", "cunning temptation"], img: "./assets/skill_item_14014.jpg" },
        { label: "Forbiddance", metatags: ["apple", "fruit", "forbidden fruit"], img: "./assets/skill_item_14015.jpg" },
        { label: "Depravity", metatags: ["conduct", "wicked conduct"], img: "./assets/skill_item_14016.jpg" },
        { label: "Falsehood", metatags: ["echo", "fallacy", "deceitful fallacy"], img: "./assets/skill_item_14017.jpg" },
        { label: "Extremity", metatags: ["ruination", "divine ruination"], img: "./assets/skill_item_14005.jpg" },
        { label: "Sagacity", metatags: ["honing", "divine honing"], img: "./assets/skill_item_14006.jpg" },
        { label: "Supremacy", metatags: ["fathoms", "divine fathoms"], img: "./assets/skill_item_14007.jpg" },
    ]
};
const ccwSkillOptions = {
    skill2: [
        { label: "Humanity", metatags: ["humanity"], img: "./assets/skill_item_12001.jpg" },
        { label: "Divinity", metatags: ["divinity"], img: "./assets/skill_item_12002.jpg" },
        { label: "Devilry", metatags: ["devilry"], img: "./assets/skill_item_12003.jpg" },
    ]
}
const ultimaSkillOptions = {
    skill1: [
        { label: "Will", metatags: ["atk", "will", "dominion"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_atk_<weapon type>.webp" },
        { label: "Strife", metatags: ["ma", "strife", "parity"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_da_<weapon type>.webp" },
        { label: "Vitality", metatags: ["hp", "vitality", "utopia"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_hp_<weapon type>.webp" },
        { label: "Strength", metatags: ["stamina", "strength", "plenum"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_whole_<weapon type>.webp" },
        { label: "Zeal", metatags: ["enmity", "zeal", "ultio"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_backwater_<weapon type>.webp" },
        { label: "Courage", metatags: ["crit", "courage", "ars"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_tech_<weapon type>.webp" },
    ],
    skill2: [
        { label: "Auto", metatags: ["auto", "Gauph Key α", "normal", "alpha"], img: "./assets/Ws_skill_normal_limit.png" },
        { label: "Skill", metatags: ["skill", "Gauph Key β", "beta"], img: "./assets/Ws_skill_ability_limit.png" },
        { label: "Charge Attack", metatags: ["ca", "Gauph Key γ", "gamma", "ougi", "charge attack"], img: "./assets/Ws_skill_special_limit.png" },
        { label: "Chain Burst", metatags: ["cb", "Gauph Key Δ", "delta", "chain burst"], img: "./assets/Ws_skill_chain_limit.png" },
    ],
    skill3: [
        { label: "Damage Cap", metatags: ["cap", "ena", "fortis"], img: "./assets/skill_item_17001.jpg" },
        { label: "Healing Cap", metatags: ["healing", "dio", "sanatio"], img: "./assets/skill_item_17002.jpg" },
        { label: "Seraphic", metatags: ["seraphic", "tria", "impetus"], img: "./assets/skill_item_17003.jpg" },
        { label: "Charge Bar Gain", metatags: ["cbgain", "tessera", "elatio"], img: "./assets/skill_item_17004.jpg" },
    ]
}
const draconicSkillOptions = {
    skill2: [
        { label: "Endurance Teluma", metatags: ["def", "endurance", "true dragon"], img: "./assets/skill_damage_red_0.png" },
        { label: "Inferno Teluma", metatags: ["fire", "inferno", "vermillion"], img: "./assets/skill_damage_red_1.png" },
        { label: "Abyss Teluma", metatags: ["water", "abyss", "azure"], img: "./assets/skill_damage_red_2.png" },
        { label: "Crag Teluma", metatags: ["earth", "crag", "golden"], img: "./assets/skill_damage_red_3.png" },
        { label: "Tempest Teluma", metatags: ["wind", "tempest", "emerald"], img: "./assets/skill_damage_red_4.png" },
        { label: "Aureole Teluma", metatags: ["light", "aureole", "white"], img: "./assets/skill_damage_red_5.png" },
        { label: "Malice Teluma", metatags: ["dark", "malice", "black"], img: "./assets/skill_damage_red_6.png" },
        { label: "Salvation Teluma", metatags: ["hp", "salvation", "fortitude"], img: "./assets/skill_draconic_hp_add_5.png" },
        { label: "Oblivion Teluma", metatags: ["amp", "oblivion", "magnitude"], img: "./assets/skill_item_15009.jpg" },
    ],
    skill3: [
        { label: "Optimus Teluma", metatags: ["primal", "optimus"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_god_<element>_3.webp" },
        { label: "Omega Teluma", metatags: ["magna", "omega"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_god_m_<element>_3.webp" },
    ]
}
const destroyerSkillOptions = {
    skill3: [
        {label: "Auto", metatags: ["auto", "na", "oblivion"], img: "./assets/skill_item_19001.jpg" },
        {label: "Skill", metatags: ["skill", "ascendance"], img: "./assets/skill_item_19002.jpg" },
        {label: "Charge Attack", metatags: ["ca", "ougi", "maximality"], img: "./assets/skill_item_19003.jpg" },
    ]
}