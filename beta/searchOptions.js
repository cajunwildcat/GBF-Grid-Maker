const opusSkillOptions = {
    skill2: [
        { label: "Auto", metatags: ["auto", "α Revelation", "normal", "alpha"], img: "https://gbf.wiki/images/thumb/f/f6/Ws_skill_normal_limit.png/50px-Ws_skill_normal_limit.png" },
        { label: "Skill", metatags: ["skill", "β Revelation", "beta"], img: "https://gbf.wiki/images/thumb/6/60/Ws_skill_ability_limit.png/50px-Ws_skill_ability_limit.png" },
        { label: "Charge Attack", metatags: ["ca", "γ Revelation", "gamma", "ougi", "charge attack"], img: "https://gbf.wiki/images/thumb/b/b7/Ws_skill_special_limit.png/50px-Ws_skill_special_limit.png" },
        { label: "Chain Burst", metatags: ["cb", "Δ Revelation", "delta", "chain burst"], img: "https://gbf.wiki/images/thumb/1/13/Ws_skill_chain_limit.png/50px-Ws_skill_chain_limit.png" },
    ],
    skill3: [
        { label: "Stamina", metatags: ["stamina", "strength"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_whole_m_<element>_3.png" },
        { label: "Emnity", metatags: ["emnity", "zeal"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_backwater_m_<element>_3.png" },
        { label: "Trium", metatags: ["strife", "trium"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_ta_m_<element>_2.png" },
        { label: "Progression", metatags: ["progression", "prosperity"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14004.jpg" },
        { label: "Celere", metatags: ["celere", "temperament"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_moment_m_<element>.png" },
        { label: "Majesty", metatags: ["majesty", "restoration"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_god_m_<element>_2.png" },
        { label: "Glory", metatags: ["glory", "glorification"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_hero_m_<element>_3.png" },
        { label: "Tempation", metatags: ["freyr", "temptation", "cunning temptation"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14014.jpg" },
        { label: "Forbiddance", metatags: ["apple", "fruit", "forbidden fruit"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14015.jpg" },
        { label: "Depravity", metatags: ["conduct", "wicked conduct"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14016.jpg" },
        { label: "Falsehood", metatags: ["echo", "fallacy", "deceitful fallacy"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14017.jpg" },
        { label: "Extremity", metatags: ["ruination", "divine ruination"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14005.jpg" },
        { label: "Sagacity", metatags: ["honing", "divine honing"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14006.jpg" },
        { label: "Supremacy", metatags: ["fathoms", "divine fathoms"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14007.jpg" },
    ]
};
const ccwSkillOptions = {
    skill2: [
        { label: "Humanity", metatags: ["humanity"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/12001.jpg" },
        { label: "Divinity", metatags: ["divinity"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/12002.jpg" },
        { label: "Devilry", metatags: ["devilry"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/12003.jpg" },
    ]
}
const ultimaSkillOptions = {
    skill1: [
        { label: "Will", metatags: ["atk", "will", "dominion"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_atk_<weapon type>.png" },
        { label: "Strife", metatags: ["ma", "strife", "parity"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_da_<weapon type>.png" },
        { label: "Vitality", metatags: ["hp", "vitality", "utopia"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_hp_<weapon type>.png" },
        { label: "Strength", metatags: ["stamina", "strength", "plenum"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_whole_<weapon type>.png" },
        { label: "Zeal", metatags: ["enmity", "zeal", "ultio"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_backwater_<weapon type>.png" },
        { label: "Courage", metatags: ["crit", "courage", "ars"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_tech_<weapon type>.png" },
    ],
    skill2: [
        { label: "Atuo", metatags: ["auto", "Gauph Key α", "normal", "alpha"], img: "https://gbf.wiki/images/thumb/f/f6/Ws_skill_normal_limit.png/50px-Ws_skill_normal_limit.png" },
        { label: "Skill", metatags: ["skill", "Gauph Key β", "beta"], img: "https://gbf.wiki/images/thumb/6/60/Ws_skill_ability_limit.png/50px-Ws_skill_ability_limit.png" },
        { label: "Charge Attack", metatags: ["ca", "Gauph Key γ", "gamma", "ougi", "charge attack"], img: "https://gbf.wiki/images/thumb/b/b7/Ws_skill_special_limit.png/50px-Ws_skill_special_limit.png" },
        { label: "Chain Burst", metatags: ["cb", "Gauph Key Δ", "delta", "chain burst"], img: "https://gbf.wiki/images/thumb/1/13/Ws_skill_chain_limit.png/50px-Ws_skill_chain_limit.png" },
    ],
    skill3: [
        { label: "Damage Cap", metatags: ["cap", "ena", "fortis"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/17001.jpg" },
        { label: "Healing Cap", metatags: ["healing", "dio", "sanatio"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/17002.jpg" },
        { label: "Seraphic", metatags: ["seraphic", "tria", "impetus"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/17003.jpg" },
        { label: "Charge Bar Gain", metatags: ["cbgain", "tessera", "elatio"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/17004.jpg" },
    ]
}
const draconicSkillOptions = {
    skill2: [
        { label: "Endurance Teluma", metatags: ["def", "endurance", "true dragon"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_damage_red_0.png" },
        { label: "Inferno Teluma", metatags: ["fire", "inferno", "vermillion"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_damage_red_1.png" },
        { label: "Abyss Teluma", metatags: ["water", "abyss", "azure"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_damage_red_2.png" },
        { label: "Crag Teluma", metatags: ["earth", "crag", "golden"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_damage_red_3.png" },
        { label: "Tempest Teluma", metatags: ["wind", "tempest", "emerald"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_damage_red_4.png" },
        { label: "Aureole Teluma", metatags: ["light", "aureole", "white"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_damage_red_5.png" },
        { label: "Malice Teluma", metatags: ["dark", "malice", "black"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_damage_red_6.png" },
        { label: "Salvation Teluma", metatags: ["hp", "salvation", "fortitude"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_draconic_hp_add_5.png" },
        { label: "Oblivion Teluma", metatags: ["amp", "oblivion", "magnitude"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/15009.jpg" },
    ],
    skill3: [
        { label: "Optimus Teluma", metatags: ["primal", "optimus"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_god_<element>_3.png" },
        { label: "Omega Teluma", metatags: ["magna", "omega"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_god_m_<element>_3.png" },
    ]
}
const destroyerSkillOptions = {
    skill3: [
        {label: "Auto", metatags: ["auto", "na", "oblivion"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/19001.jpg" },
        {label: "Skill", metatags: ["skill", "ascendance"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/19002.jpg" },
        {label: "Charge Attack", metatags: ["ca", "ougi", "maximality"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/19003.jpg" },
    ]
}
const minoOptions = [
    { label: "Burlona", metatags: ["1", "burlona"] },
    { label: "Schalk", metatags: ["2", "schalk"] },
    { label: "Leviathan Mino", metatags: ["3", "levi"] },
    { label: "Yggdrasil Mino", metatags: ["4", "yggy"] },
    { label: "Bahamut", metatags: ["5", "baha"] },
    { label: "Lu Woh Mino", metatags: ["6", "luwoh"] },
    { label: "Mini Mimic", metatags: ["7", "mimic"] },
    { label: "Ouroboros", metatags: ["8", "ouro", "cag"] },
    { label: "Europa", metatags: ["9", "europa"] },
    { label: "Wilnas", metatags: ["10", "wilnas"] },
    { label: "Agastia Simulacrum", metatags: ["11", "agastia", "agatura"] },
    { label: "Dark Rapture Simulacrum", metatags: ["12", "faa", "blue"] },
    { label: "Chachazero", metatags: ["13", "chachazero", "evangeline"] },
    { label: "Perfida", metatags: ["14", "ccw"] },
    { label: "Qilin Simulacrum", metatags: ["15"] },
    { label: "Coco and Mimi", metatags: ["16", "cerberus", "cocomimi"] },
]
const shieldOptions = [
    { label: "Round Shield", metatags: ["2001", "round shield", "round", "hp1"] },
    { label: "Buckler", metatags: ["2002", "buckler", "dodge"] },
    { label: "Knight Shield", metatags: ["2003", "knight shield", "knight", "def1"] },
    { label: "Scutum", metatags: ["3001", "scutum", "def2"] },
    { label: "Mythril Shield", metatags: ["3002", "mythril shield", "mythril", "hp2"] },
    { label: "Holy Shield", metatags: ["3003", "holy shield", "holy", "darkres"] },
    { label: "Tiamat Shield", metatags: ["3004", "tiamat shield", "tiamat", "windatk"] },
    { label: "Rose Crystal Shield", metatags: ["3005", "rose crystal shield", "rose", "superiorelementres"] },
    { label: "Spartan Shield", metatags: ["4001", "spartan shield", "spartan", "default", "def3"] },
    { label: "Malice Adarga", metatags: ["4002", "malice adarga", "malice", "atk"] },
    { label: "Archangel's Shield", metatags: ["4003", "archangel's shield", "angel", "hp3"] },
    { label: "Colossus Wall", metatags: ["4004", "colossus wall", "colossus", "fireatk"] },
    { label: "Bahamut Shield", metatags: ["4005", "bahamut shield", "bahamut", "baha", "cadmg"] },
    { label: "Soul of Oneness", metatags: ["4006", "soul of oneness", "twinelements", "firewaterdef"] },
    { label: "Eutr Nogadr Ldeysh", metatags: ["4007", "eutr nogadr ldeysh", "lindwurm", "debuffres"] },
    { label: "Hero's Shield", metatags: ["4008", "hero's shield", "hero", "gilgamesh", "gilg", "def"] },
    { label: "Shield of Lamentation", metatags: ["4009", "shield of lamentation", "grandorder", "go", "nadmg"] },
    { label: "Huanglong Shield", metatags: ["4010", "huanglong shield", "huanglong", "lightatk"] },
    { label: "Qilin Shield", metatags: ["4011", "qilin shield", "qilin", "darkatk"] },
    { label: "Nibelung Mauer", metatags: ["4012", "nibelung mauer", "alex", "alexiel", "waterres"] },
    { label: "Obelisk", metatags: ["4013", "obelisk", "ennead", "cb"] },
    { label: "Shield of the Enthroned", metatags: ["4014", "atum", "enthroned", "shield of the enthroned"] },
    { label: "Lustrous Wall", metatags: ["4015", "horus", "lustrous wall"] },
    { label: "Eth Ldog Ldeysh", metatags: ["4016", "galleon", "eth ldog ldeysh"] },
    { label: "Eth Ckalb Ldeysh", metatags: ["4017", "fediel", "eth ckalb ldeysh"] },
    { label: "Moonhill", metatags: ["4018", "dias", "diaspora", "moonhill"] },
    { label: "Shield of Tenets", metatags: ["4019", "subhl", "subbie", "tenets", "shield of tenets"] },
    { label: "Shield of Tenets", metatags: ["4020", "world"] },
    { label: "Shield of Tenets", metatags: ["4021", "anima animus", "aniani"] },
]