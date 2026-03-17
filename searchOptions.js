const opusSkillOptions = {
    skill2: [
        { label: "Auto", jplabel: "アルファ", metatags: ["auto", "α Revelation", "normal", "alpha"], img: "./assets/Ws_skill_normal_limit.png" },
        { label: "Skill", jplabel: "ベータ", metatags: ["skill", "β Revelation", "beta"], img: "./assets/Ws_skill_ability_limit.png" },
        { label: "Charge Attack", jplabel: "ガンマ", metatags: ["ca", "γ Revelation", "gamma", "ougi", "charge attack"], img: "./assets/Ws_skill_special_limit.png" },
        { label: "Chain Burst", jplabel: "デルタ", metatags: ["cb", "Δ Revelation", "delta", "chain burst"], img: "./assets/Ws_skill_chain_limit.png" },
    ],
    skill3: [
        { label: "Stamina", jplabel: "強壮", metatags: ["stamina", "strength", "渾身"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_whole_m_<element>_3.webp" },
        { label: "Emnity", jplabel: "激情", metatags: ["emnity", "zeal", "背水"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_backwater_m_<element>_3.webp" },
        { label: "Trium", jplabel: "闘争", metatags: ["strife", "trium", "三手"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_ta_m_<element>_2.webp" },
        { label: "Progression", jplabel: "隆盛", metatags: ["progression", "prosperity", "進境"], img: "./assets/skill_item_14004.jpg" },
        { label: "Celere", jplabel: "技錬", metatags: ["celere", "temperament", "刹那"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_moment_m_<element>.webp" },
        { label: "Majesty", jplabel: "賦活", metatags: ["majesty", "restoration", "神威"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_god_m_<element>_2.webp" },
        { label: "Glory", jplabel: "謳歌", metatags: ["glory", "glorification", "英傑"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_hero_m_<element>_3.webp" },
        { label: "Tempation", jplabel: "誘惑", metatags: ["freyr", "temptation", "cunning temptation"], img: "./assets/skill_item_14014.jpg" },
        { label: "Forbiddance", jplabel: "禁忌", metatags: ["apple", "fruit", "forbidden fruit"], img: "./assets/skill_item_14015.jpg" },
        { label: "Depravity", jplabel: "邪罪", metatags: ["conduct", "wicked conduct"], img: "./assets/skill_item_14016.jpg" },
        { label: "Falsehood", jplabel: "虚詐", metatags: ["echo", "fallacy", "deceitful fallacy"], img: "./assets/skill_item_14017.jpg" },
        { label: "Extremity", jplabel: "絶涯", metatags: ["ruination", "divine ruination", "極破"], img: "./assets/skill_item_14005.jpg" },
        { label: "Sagacity", jplabel: "窮理", metatags: ["honing", "divine honing", "極技"], img: "./assets/skill_item_14006.jpg" },
        { label: "Supremacy", jplabel: "天髄", metatags: ["fathoms", "divine fathoms", "極奥"], img: "./assets/skill_item_14007.jpg" },
    ]
};
const ccwSkillOptions = {
    skill2: [
        { label: "Humanity", jplabel: "英勇", metatags: ["humanity"], img: "./assets/skill_item_12001.jpg" },
        { label: "Divinity", jplabel: "天聖", metatags: ["divinity"], img: "./assets/skill_item_12002.jpg" },
        { label: "Devilry", jplabel: "魔獄", metatags: ["devilry"], img: "./assets/skill_item_12003.jpg" },
    ]
}
const ultimaSkillOptions = {
    skill1: [
        { label: "Will", jplabel: "戦意", metatags: ["atk", "will", "dominion", "ウィス"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_atk_<weapon type>.webp" },
        { label: "Strife", jplabel: "闘争", metatags: ["ma", "strife", "parity", "ビス"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_da_<weapon type>.webp" },
        { label: "Vitality", jplabel: "生命", metatags: ["hp", "vitality", "utopia", "メンス"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_hp_<weapon type>.webp" },
        { label: "Strength", jplabel: "強壮", metatags: ["stamina", "strength", "plenum", "プレナム"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_whole_<weapon type>.webp" },
        { label: "Zeal", jplabel: "激情", metatags: ["enmity", "zeal", "ultio", "ウルティオ"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_backwater_<weapon type>.webp" },
        { label: "Courage", jplabel: "勇気", metatags: ["crit", "courage", "ars", "アルス"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_weapon_tech_<weapon type>.webp" },
    ],
    skill2: [
        { label: "Auto", jplabel: "α", metatags: ["auto", "Gauph Key α", "normal", "alpha", "アッグレシオ"], img: "./assets/Ws_skill_normal_limit.png" },
        { label: "Skill", jplabel: "β", metatags: ["skill", "Gauph Key β", "beta", "ファクルタス"], img: "./assets/Ws_skill_ability_limit.png" },
        { label: "Charge Attack", jplabel: "γ", metatags: ["ca", "Gauph Key γ", "gamma", "ougi", "charge attack", "アルカヌム"], img: "./assets/Ws_skill_special_limit.png" },
        { label: "Chain Burst", jplabel: "Δ", metatags: ["cb", "Gauph Key Δ", "delta", "chain burst", "カテーナ"], img: "./assets/Ws_skill_chain_limit.png" },
    ],
    skill3: [
        { label: "Damage Cap", jplabel: "エナ", metatags: ["cap", "ena", "fortis", "フォルティス"], img: "./assets/skill_item_17001.jpg" },
        { label: "Healing Cap", jplabel: "ディオ", metatags: ["healing", "dio", "sanatio", "サーナーティオ"], img: "./assets/skill_item_17002.jpg" },
        { label: "Seraphic", jplabel: "トリア", metatags: ["seraphic", "tria", "impetus", "インペトゥス"], img: "./assets/skill_item_17003.jpg" },
        { label: "Charge Bar Gain", jplabel: "テーセラ", metatags: ["cbgain", "tessera", "elatio", "エーラーティオ"], img: "./assets/skill_item_17004.jpg" },
    ]
}
const draconicSkillOptions = {
    skill2: [
        { label: "Endurance Teluma", jplabel: "剛堅", metatags: ["def", "endurance", "true dragon", "真"], img: "./assets/skill_damage_red_0.png" },
        { label: "Inferno Teluma", jplabel: "炎獄", metatags: ["fire", "inferno", "vermillion", "朱", "火"], img: "./assets/skill_damage_red_1.png" },
        { label: "Abyss Teluma", jplabel: "深海", metatags: ["water", "abyss", "azure", "碧", "水"], img: "./assets/skill_damage_red_2.png" },
        { label: "Crag Teluma", jplabel: "巨岩", metatags: ["earth", "crag", "golden", "金", "土"], img: "./assets/skill_damage_red_3.png" },
        { label: "Tempest Teluma", jplabel: "暴風", metatags: ["wind", "tempest", "emerald", "翠", "風"], img: "./assets/skill_damage_red_4.png" },
        { label: "Aureole Teluma", jplabel: "後光", metatags: ["light", "aureole", "white", "白", "光"], img: "./assets/skill_damage_red_5.png" },
        { label: "Malice Teluma", jplabel: "闇禍", metatags: ["dark", "malice", "black", "黒", "闇"], img: "./assets/skill_damage_red_6.png" },
        { label: "Salvation Teluma", jplabel: "燦護のテルマ", metatags: ["hp", "salvation", "fortitude"], img: "./assets/skill_draconic_hp_add_5.png" },
        { label: "Oblivion Teluma", jplabel: "冥烈のテルマ", metatags: ["amp", "oblivion", "magnitude"], img: "./assets/skill_item_15009.jpg" },
    ],
    skill3: [
        { label: "Optimus Teluma", jplabel: "オプティマス", metatags: ["primal", "optimus"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_god_<element>_3.webp" },
        { label: "Omega Teluma", jplabel: "マグナ", metatags: ["magna", "omega"], img: "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/assets/weapons/skills/ws_skill_god_m_<element>_3.webp" },
    ]
}
const destroyerSkillOptions = {
    skill3: [
        {label: "Auto", jplabel: "崩焉のアンクレット", metatags: ["auto", "na", "oblivion", "神撃"], img: "./assets/skill_item_19001.jpg" },
        {label: "Skill", jplabel: "越達のアンクレット", metatags: ["skill", "ascendance", "神技"], img: "./assets/skill_item_19002.jpg" },
        {label: "Charge Attack", jplabel: "竟極のアンクレット", metatags: ["ca", "ougi", "maximality", "神奥"], img: "./assets/skill_item_19003.jpg" },
    ]
}