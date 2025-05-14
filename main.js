let cOptions = [];
let wOptions = [];
let sOptions = [];
let clOptions = [
    { label: "Berserker", metatags: ["100301_sw"] },
    { label: "Viking", metatags: ["100401_sw"] },
    { label: "Spartan", metatags: ["110301_sw"] },
    { label: "Paladin", metatags: ["110401_sw"] },
    { label: "Sage", metatags: ["120301_wa"] },
    { label: "Iatromantis", metatags: ["120401_wa"] },
    { label: "Warlock", metatags: ["130301_wa"] },
    { label: "Manadiver", metatags: ["130401_wa"] },
    { label: "Bandit Tycoon", metatags: ["140301_kn"] },
    { label: "Street King", metatags: ["140401_kn"] },
    { label: "Chaos Ruler", metatags: ["150301_sw"] },
    { label: "Onmyoji", metatags: ["150401_kn"] },
    { label: "Luchador", metatags: ["160301_me"] },
    { label: "Sumaibito", metatags: ["160401_me"] },
    { label: "Nighthound", metatags: ["170301_bw"] },
    { label: "Boogeyman", metatags: ["170401_bw"] },
    { label: "Elysian", metatags: ["180301_mc"] },
    { label: "Apsaras", metatags: ["190301_sp"] },
    { label: "Alchemist", metatags: ["200201_kn"] },
    { label: "Doctor", metatags: ["200301_kn"] },
    { label: "Ninja", metatags: ["210201_kt"] },
    { label: "Runeslayer", metatags: ["210301_kt"] },
    { label: "Samurai", metatags: ["220201_kt"] },
    { label: "Kengo", metatags: ["220301_kt"] },
    { label: "Sword Master", metatags: ["230201_sw"] },
    { label: "Glorybringer", metatags: ["230301_sw"] },
    { label: "Gunslinger", metatags: ["240201_gu"] },
    { label: "Soldier", metatags: ["240301_gu"] },
    { label: "Mystic", metatags: ["250201_wa"] },
    { label: "Nekomancer", metatags: ["250301_wa"] },
    { label: "Assassin", metatags: ["260201_kn"] },
    { label: "Tormentor", metatags: ["260301_kn"] },
    { label: "Drum Master", metatags: ["270201_mc"] },
    { label: "Rising Force", metatags: ["270301_mc"] },
    { label: "Dancer", metatags: ["280201_kn"] },
    { label: "Masquerade", metatags: ["280301_kn"] },
    { label: "Mechanic", metatags: ["290201_gu"] },
    { label: "Chrysaor", metatags: ["300301_sw"] },
    { label: "Lumberjack", metatags: ["410301_ax"] },
    { label: "Cavalier", metatags: ["420301_sp"] },
    { label: "Monk", metatags: ["430301_me"] },
    { label: "Robin Hood", metatags: ["440301_bw"] },
    { label: "Relic Buster", metatags: ["450301_sw"] },
    { label: "Yamato", metatags: ["460301_sw"] },
    { label: "Shieldsworn", metatags: ["470301_ax"] }
];
let aOptoins = [];
let opusSkillOptions = {
    skill2: [
        { label: "α Revelation", metatags: ["auto", "α Revelation", "normal", "alpha"], img: "https://gbf.wiki/images/thumb/f/f6/Ws_skill_normal_limit.png/50px-Ws_skill_normal_limit.png" },
        { label: "β Revelation", metatags: ["skill", "β Revelation", "beta"], img: "https://gbf.wiki/images/thumb/6/60/Ws_skill_ability_limit.png/50px-Ws_skill_ability_limit.png" },
        { label: "γ Revelation", metatags: ["ca", "γ Revelation", "gamma", "ougi", "charge attack"], img: "https://gbf.wiki/images/thumb/b/b7/Ws_skill_special_limit.png/50px-Ws_skill_special_limit.png" },
        { label: "Δ Revelation", metatags: ["cb", "Δ Revelation", "delta", "chain burst"], img: "https://gbf.wiki/images/thumb/1/13/Ws_skill_chain_limit.png/50px-Ws_skill_chain_limit.png" },
    ],
    skill3: [
        { label: "Stamina", metatags: ["stamina", "strength"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_whole_m_<element>_3.png" },
        { label: "Emnity", metatags: ["emnity", "zeal"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_backwater_m_<element>_3.png" },
        { label: "Trium", metatags: ["strife", "trium"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_ta_m_<element>_2.png" },
        { label: "Progression", metatags: ["progression", "prosperity"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14004.jpg" },
        { label: "Celere", metatags: ["celere", "temperament"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_moment_m_<element>.png" },
        { label: "Majesty", metatags: ["majesty", "restoration"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_god_m_<element>_2.png" },
        { label: "Glory", metatags: ["glory", "glorification"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_hero_m_<element>_3.png" },
        { label: "Cunning Tempation", metatags: ["freyr", "temptation"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14014.jpg" },
        { label: "Forbidden Fruit", metatags: ["apple", "fruit", "forbiddance"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14015.jpg" },
        { label: "Wicked Conduct", metatags: ["conduct", "depravity"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14016.jpg" },
        { label: "Deceitful Fallacy", metatags: ["echo", "fallacy", "falsehood"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14017.jpg" },
        { label: "Divine Ruination", metatags: ["extremity", "ruination"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14005.jpg" },
        { label: "Divine Honing", metatags: ["sagacity", "honing"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14006.jpg" },
        { label: "Divine Fathoms", metatags: ["supremacy", "fathoms"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/14007.jpg" },
    ]
};
let ccwSkillOptions = {
    skill2: [
        { label: "Humanity", metatags: ["humanity"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/12001.jpg" },
        { label: "Divinity", metatags: ["divinity"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/12002.jpg" },
        { label: "Devilry", metatags: ["devilry"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/12003.jpg" },
    ]
}
let ultimaSkillOptions = {
    skill1: [
        { label: "Guaph Key of Will", metatags: ["atk", "will", "dominion"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_atk_<weapon type>.png" },
        { label: "Guaph Key of Strife", metatags: ["ma", "strife", "parity"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_da_<weapon type>.png" },
        { label: "Guaph Key of Vitality", metatags: ["hp", "vitality", "utopia"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_hp_<weapon type>.png" },
        { label: "Guaph Key of Strength", metatags: ["stamina", "strength", "plenum"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_whole_<weapon type>.png" },
        { label: "Guaph Key of Zeal", metatags: ["enmity", "zeal", "ultio"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_backwater_<weapon type>.png" },
        { label: "Guaph Key of Courage", metatags: ["crit", "courage", "ars"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/skill/skill_weapon_tech_<weapon type>.png" },
    ],
    skill2: [
        { label: "Guaph Key α", metatags: ["auto", "Guaph Key α", "normal", "alpha"], img: "https://gbf.wiki/images/thumb/f/f6/Ws_skill_normal_limit.png/50px-Ws_skill_normal_limit.png" },
        { label: "Guaph Key β", metatags: ["skill", "Guaph Key β", "beta"], img: "https://gbf.wiki/images/thumb/6/60/Ws_skill_ability_limit.png/50px-Ws_skill_ability_limit.png" },
        { label: "Guaph Key γ", metatags: ["ca", "Guaph Key γ", "gamma", "ougi", "charge attack"], img: "https://gbf.wiki/images/thumb/b/b7/Ws_skill_special_limit.png/50px-Ws_skill_special_limit.png" },
        { label: "Guaph Key Δ", metatags: ["cb", "Guaph Key Δ", "delta", "chain burst"], img: "https://gbf.wiki/images/thumb/1/13/Ws_skill_chain_limit.png/50px-Ws_skill_chain_limit.png" },
    ],
    skill3: [
        { label: "Guaph Key Ena", metatags: ["cap", "ena", "fortis"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/17001.jpg" },
        { label: "Guaph Key Dio", metatags: ["healing", "dio", "sanatio"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/17002.jpg" },
        { label: "Guaph Key Tria", metatags: ["seraphic", "tria", "impetus"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/17003.jpg" },
        { label: "Guaph Key Tessera", metatags: ["cbgain", "tessera", "elatio"], img: "https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/item/skillplus/s/17004.jpg" },
    ]
}
let draconicSkillOptions = {
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
let minoOptions = [
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
    { label: "Perfida", metatags: ["14", "ccw"] }
]
let shieldOptions = [
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
    { label: "Shield of Tenets", metatags: ["4019", "subhl", "subbie", "tenets", "shield of tenets"] }
]
let elements = { "fire": 1, "water": 2, "earth": 3, "wind": 4, "light": 5, "dark": 6 };
let weaponTypes = { "sabre": 1, "dagger": 2, "spear": 3, "axe": 4, "staff": 5, "gun": 6, "melee": 7, "bow": 8, "harp": 9, "katana": 10 };
let worldHarps = [1040815000, 1040815100, 1040815200, 1040815300, 1040815400];
let teamData = {};
let characters, summons, weapons, abilities;
let characterIDs = {}, summonIDs = {}, weaponIDs = {};
let filters = {
    characters: ["any"],
    weapons: ["any"],
    summons: ["any"]
}
const aliases = {
    "Catura": ["cow"],
    "Payila": ["dragon"],
    "Vikala": ["rat"]
};
const artToUncap = (art) => {
    switch (art) {
        case "D": return 6;
        case "C": return 5;
        default: return 4;
    }
}
const uncapToArt = (uncap) => {
    switch (uncap) {
        case 6: return "D";
        case 5: return "C";
        default: return "A";
    }
}
window.onload = async (e) => {
    await fetch("https://raw.githubusercontent.com/cajunwildcat/GBF-Party-Parser/main/characters.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => characters = response);
    await fetch("https://raw.githubusercontent.com/cajunwildcat/GBF-Party-Parser/main/summons.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => summons = response);
    await fetch("https://raw.githubusercontent.com/cajunwildcat/GBF-Party-Parser/main/weapons.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => weapons = response);
    await fetch("https://raw.githubusercontent.com/cajunwildcat/GBF-Party-Parser/main/abilities.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => abilities = response);

    for (let id in characters) {
        let name = characters[id].pageName;
        characterIDs[name] = id;
        cOptions.push({
            label: name,
            metatags: [id, characters[id].jpname]
        });
        if (aliases[name]) {
            cOptions[cOptions.length - 1].metatags.push(...aliases[name]);
        }
    }
    for (let id in summons) {
        let name = summons[id].pageName;
        summonIDs[name] = id;
        sOptions.push({
            label: name,
            metatags: [id]
        });
        if (aliases[name]) {
            sOptions[sOptions.length - 1].metatags.push(...aliases[name]);
        }
    }
    for (let id in weapons) {
        let name = weapons[id].pageName;
        weaponIDs[name] = id;
        wOptions.push({
            label: name,
            metatags: [id]
        });
        if (aliases[name]) {
            sOptions[wOptions.length - 1].metatags.push(...aliases[name]);
        }
    }
    for (let ability in abilities) {
        abilities[ability].name = abilities[ability].name.replace("&#039;", "'");
        let name = abilities[ability].name;
        aOptoins.push({
            label: name,
            metatags: [ability]
        });
        if (aliases[name]) {
            aOptoins[aOptoins.length - 1].metatags.push(...aliases[name]);
        }
    }
    setupButtonSearch();
};

const optionSets = {
    classes: clOptions,
    characters: cOptions,
    weapons: wOptions,
    summons: sOptions,
    skills: aOptoins,
    opusSkill2: opusSkillOptions.skill2,
    opusSkill3: opusSkillOptions.skill3,
    ccwSkill2: ccwSkillOptions.skill2,
    draconicSkill2: draconicSkillOptions.skill2,
    draconicSkill3: draconicSkillOptions.skill3,
    ultimaSkill1: ultimaSkillOptions.skill1,
    ultimaSkill2: ultimaSkillOptions.skill2,
    ultimaSkill3: ultimaSkillOptions.skill3,
    mino: minoOptions,
    shield: shieldOptions
};
let currentOptions = [];
let filteredOptions = [];
let activeButton = null;
let activeIndex = -1;
let dropdown;
let searchInput;
let optionsList;
function setupButtonSearch() {
    dropdown = document.getElementById('dropdown');
    searchInput = document.getElementById('searchInput');
    optionsList = document.getElementById('optionsList');
    // Handle keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        const items = optionsList.querySelectorAll('li');
        if (e.key === 'Escape') {
            searchInput.value = '';
            filteredOptions = currentOptions;
            renderOptions(filteredOptions);
            activeIndex = -1; // Reset active index
        } else if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = (activeIndex + 1) % items.length;
            updateActiveOption();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = (activeIndex - 1 + items.length) % items.length;
            updateActiveOption();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex === -1 && items.length > 0) {
                activeIndex = 0; // Default to the top option if none is selected
                updateActiveOption();
            }
            if (activeIndex >= 0) {
                const selectedOption = currentOptions[currentOptions.indexOf(filteredOptions[activeIndex])];
                setButtonToItem(activeButton, activeButton.dataset.options, selectedOption);
                let nextButton = document.querySelector(`[tabIndex='${activeButton.tabIndex + 1}']`);
                hideDropdown();
                nextButton.focus();
            }
        }
    });

    // Filter options on input
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filteredOptions = currentOptions.filter(option =>
            option.label.toLowerCase().includes(searchTerm) ||
            option.metatags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        renderOptions(filteredOptions);
        activeIndex = 0; // Reset active index
    });

    // Attach event listeners to buttons
    document.querySelectorAll('.grid-input').forEach(button => {
        button.addEventListener('click', (event) => gridInputClick(event));

        button.oncontextmenu = (e) => gridInputContextMenu(e);

        button.onkeydown = (e) => {
            if (e.key === "Tab") return;
            button.click();
            searchInput.focus();
        }
    });
    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (document.querySelector("#uncap-dropdown") && !document.querySelector("#uncap-dropdown").contains(event.target)) {
            document.querySelector("#uncap-dropdown")?.parentElement.click();
        }
        if (!dropdown.contains(event.target) && (event.target.nodeName !== 'BUTTON' && event.target.parentElement?.nodeName !== 'BUTTON')) {
            hideDropdown();
        }
    });

    document.querySelector("#export-button").onclick = () => {
        document.querySelector("#import-export-text").value = wikiTemplateText();
    }

    document.querySelector("#import-button").onclick = () => {
        importData(document.querySelector("#import-export-text").value);
    }

    document.querySelector("#import-export-text").onkeydown = (e) => {
        if (e.key == "Escape") {
            document.querySelector("#import-export-text").value = "";
        }
    }

    document.querySelectorAll(".filter-button").forEach(button => {
        let cat = button.parentElement.id.replace("-filters", "");
        if (button.dataset.filterEnabled == "true") {
            filters[cat].push(button.dataset.filter);
        }
        button.onclick = (e) => {
            if (e.ctrlKey) {
                button.dataset.filterEnabled = "true";
                filters[cat].push(button.dataset.filter);
                document.querySelectorAll(`#${cat}-filters .filter-button[data-filter-type="${button.dataset.filterType}"]`).forEach(b => {
                    if (b !== button && b.dataset.filterEnabled === button.dataset.filterEnabled) b.click();
                });
                if (e.shiftKey) {
                    document.querySelectorAll(`.filter-button[data-filter="${button.dataset.filter}"]`).forEach(b => {
                        if (b !== button) b.dispatchEvent(new MouseEvent("click", { ctrlKey: true }));
                    });
                }
                return;
            }
            if (button.dataset.filterEnabled == "true") {
                button.dataset.filterEnabled = "false";
                filters[cat].splice(filters[cat].indexOf(button.dataset.filter), 1);
            } else {
                button.dataset.filterEnabled = "true";
                filters[cat].push(button.dataset.filter);
            }

            if (e.shiftKey) {
                document.querySelectorAll(`.filter-button[data-filter="${button.dataset.filter}"]`).forEach(b => {
                    if (b.dataset.filterEnabled !== button.dataset.filterEnabled) b.click();
                });
            }
        };
    });
}

///
/// Input Handling
///

function gridInputClick(event, sort = true) {
    button = event.target;
    event.preventDefault();
    event.stopPropagation();
    const cat = button.dataset.options;
    let options = optionSets[cat].filter(option => {
        switch (cat) {
            case 'weapons':
                return filters.weapons.includes(weapons[option.metatags[0]].rarity.toLowerCase())
                    && filters.weapons.includes(weapons[option.metatags[0]].element.toLowerCase());
            case 'characters':
                return filters.characters.includes(characters[option.metatags[0]].rarity.toLowerCase())
                    && filters.characters.includes(characters[option.metatags[0]].element.toLowerCase());
            case 'summons':
                return filters.summons.includes(summons[option.metatags[0]].rarity.toLowerCase())
                    && filters.summons.includes(summons[option.metatags[0]].element.toLowerCase());
            default: return true;
        }
    });
    if (sort) {
        options = options.sort((a, b) => a.label.localeCompare(b.label));
    }
    if (dropdown.style.display === 'block' && activeButton === button) {
        hideDropdown();
    } else {
        showDropdown(event, options);
    }
}

function gridInputContextMenu(event, button = null) {
    if (!button) button = event.target;
    event?.preventDefault();
    button.style.backgroundImage = null;
    if (button.dataset.options == "skills") {
        button.querySelector("img").src = "assets/empty-skill.png";
        button.querySelector("span").textContent = "";
    }
    else if (button.dataset.options == "weapons") {
        let skills = button.parentElement.querySelector(".w-skills");

        while (skills.firstChild) {
            delete teamData[skills.firstChild.id];
            skills.firstChild.remove();
        }
    }
    else if (button.id == "s-main") {
        Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].style.backgroundImage = null;
        Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].querySelector(".uncap")?.remove();
    }
    else if (button.classList.contains("weapon-skill")) {
        button.style.backgroundImage = `url(https://gbf.wiki/thumb.php?f=ws_skill_blank.png&w=33`;
    }

    button.querySelector(".uncap")?.remove();
    button.querySelector(".w-awakening")?.remove();
    if (button.querySelector(".quick-summon-toggle")) {
        if (button.querySelector(".quick-summon-toggle").dataset.toggled == "true") delete teamData.quickSummon;
        button.querySelector(".quick-summon-toggle").remove();
    }
    //possibly re-write to call contextmenu on each child ".grid-input" item so they auto handle teamData deletion
    if (button.querySelector(".class-gear")) {
        delete teamData.mino;
        delete teamData.shield;
        button.querySelector(".class-gear").remove();
    }

    delete teamData[button.id];
    delete teamData[button.id + "Uncap"];
    delete teamData[button.id + "Trans"];
    delete teamData[button.id + "Awk"];
    if (button.dataset.itemId) button.dataset.itemId = "";
    hideDropdown();
}

// Position and show dropdown
function showDropdown(event, options) {
    const button = event.currentTarget;
    const { bottom, left } = button.getBoundingClientRect();
    dropdown.style.top = `${bottom + window.scrollY}px`;
    dropdown.style.left = `${left + window.scrollX}px`;
    dropdown.style.display = 'block';

    currentOptions = options;
    filteredOptions = options;
    activeButton = button;
    renderOptions(currentOptions);
    searchInput.value = ''; // Reset search input
    searchInput.focus();
    activeIndex = -1; // Reset active index
}

// Hide dropdown
function hideDropdown() {
    dropdown.style.display = 'none';
    activeButton?.focus();
    activeButton = null;
    activeIndex = -1;
}

// Render options in the dropdown
function renderOptions(options) {
    optionsList.innerHTML = '';
    options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option.label;
        li.setAttribute('data-index', index);
        li.addEventListener('click', () => {
            setButtonToItem(activeButton, activeButton.dataset.options, option); // Update background image
            hideDropdown();
        });
        optionsList.appendChild(li);
    });

    activeIndex = options.length > 0 ? 0 : -1; // Set the first option as active, or reset if no options
    updateActiveOption(); // Highlight the active option
}

// Update active option
function updateActiveOption() {
    const items = optionsList.querySelectorAll('li');
    items.forEach((item, index) => {
        item.classList.toggle('active', index === activeIndex);
    });
}

/// 
/// Button info parent methods
/// 

function setButtonToItem(button, optionSet, selectedOption, uncap = null, options = {}) {
    let itemName = selectedOption.label;
    let id = selectedOption.metatags[0];
    if (id == button.dataset.itemId && !button.id == "s-main") {
        setButtonBackground(button, selectedOption, optionSet, uncap, id);
        return;
    }
    button.dataset.itemId = id;
    if (["characters", "summons", "weapons"].includes(optionSet)) {
        uncap = addUncapButton(button, optionSet, selectedOption, uncap, id);
    }
    setButtonBackground(button, selectedOption, optionSet, uncap, id);
    switch (optionSet) {
        case 'skills': return;
        case 'classes':
            if (button.querySelector(".class-gear")) {
                gridInputContextMenu(null, button.querySelector(".class-gear"));
                button.querySelector(".class-gear").remove();
            }
            if (["Manadiver", "Paladin", "Shieldsworn"].includes(itemName)) addClassGear(button, itemName);
            break;
        case 'characters': break;
        case 'weapons':
            if (button.querySelector(".w-awakening")) {
                delete teamData[button.querySelector(".w-awakening").id];
                button.querySelector(".w-awakening").remove();
            }
            if (weapons[id].awakening) addAwakeningButton(button, id, options.awk);
            addWeaponSkills(button, id);
            break;
        case 'summons':
            if (!button.parentElement.classList.contains("team-summon") && !button.id.includes("sub")) addQuickSummonButton(button);
            break;
        case 'mino':
        case 'shield':
        case 'opusSkill2':
        case 'opusSkill3':
        case 'ultimaSkill1':
        case 'ultimaSkill2':
        case 'ultimaSkill3':
        case 'draconicSkill2':
        case 'draconicSkill3':
        case 'ccwSkill2': break;
        default:
            console.error('Invalid option set');
            break;
    }
    if (button.id == "s-main") Array(...document.querySelectorAll("#s-main")).filter(e => e.dataset.itemId != id).forEach(e => setButtonToItem(e, optionSet, selectedOption, uncap, options));
    if (optionSet !== "skills" && optionSet.includes("Skill")) {
        teamData[button.id] = selectedOption.metatags[0];
    }
    else if (optionSet == "mino" || optionSet == "shield") {
        teamData[button.id] = selectedOption.metatags[1];
    }
    else {
        teamData[button.id] = selectedOption.label;
    }
}

function setButtonBackground(button, selectedOption, optionSet, uncap, id) {
    let backgroundUrl = '';
    switch (optionSet) {
        case 'skills':
            backgroundUrl = `https://gbf.wiki/thumb.php?f=${abilities[selectedOption.label].icon}&w=25`;
            button.querySelector("img").src = backgroundUrl;
            button.querySelector("span").textContent = selectedOption.label;
            teamData[button.id] = selectedOption.label;
            return;
        case 'classes':
            backgroundUrl = `url('https://prd-game-a1-granbluefantasy.akamaized.net/assets_en/img/sp/assets/leader/quest/${id}_1_01.jpg')`;
            break;
        case 'characters':
            art = uncap == 5 ? 3 : uncap == 6 || uncap.toString().includes("t") ? 4 : 1;
            backgroundUrl = `url('https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/npc/quest/${id}_0${art}.jpg')`;
            break;
        case 'weapons':
            art = uncap == 6 || uncap == "t5" ? "_03" : uncap.toString().includes("t") ? "_02" : "";
            backgroundUrl = `url('https://prd-game-a1-granbluefantasy.akamaized.net/assets_en/img/sp/assets/weapon/${button.parentElement.classList[0].includes("main") ? "ls" : "m"}/${id}${art}.jpg')`;
            break;
        case 'summons':
            art = uncap == 6 || uncap == "t5" ? "_04" : uncap.toString().includes("t") ? "_03" : uncap == 5 && !summons[id].pageName.includes("SSR") ? "_02" : "";
            backgroundUrl = `url('https://prd-game-a1-granbluefantasy.akamaized.net/assets_en/img/sp/assets/summon/${button.parentElement.classList[0].includes("team") ? "m" : `party_${button.parentElement.classList[0].includes("main") ? "main" : "sub"}`}/${id}${art}.jpg')`;
            break;
        case 'mino':
            backgroundUrl = `url(https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/familiar/s/${selectedOption.metatags[0]}.jpg)`
            break;
        case 'shield':
            backgroundUrl = `url(https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/shield/s/${selectedOption.metatags[0]}.jpg)`
            break;
        case 'opusSkill2':
        case 'opusSkill3':
        case 'ultimaSkill1':
        case 'ultimaSkill2':
        case 'ultimaSkill3':
        case 'draconicSkill2':
        case 'draconicSkill3':
        case 'ccwSkill2':
            backgroundUrl = `url(${selectedOption.img})`;
            if (backgroundUrl.includes("<element>")) {
                backgroundUrl = backgroundUrl.replace("<element>", elements[button.dataset.element]);
            }
            if (backgroundUrl.includes("<weapon type>")) {
                backgroundUrl = backgroundUrl.replace("<weapon type>", weaponTypes[button.dataset.weaponType]);
            }
            break;
        default:
            console.error('Invalid option set');
            break;
    }
    button.style.backgroundImage = backgroundUrl;
    if (button.id == "s-main") {
        let otherButton = Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0];
        if (backgroundUrl.includes("/m/")) backgroundUrl = backgroundUrl.replace("/m/", "/party_main/");
        else backgroundUrl = backgroundUrl.replace("/party_main/", "/m/");
        otherButton.style.backgroundImage = backgroundUrl;
    }
}

///
/// Modifier Buttons
///

function addClassGear(button, className) {
    let gearButton = document.createElement("button");
    gearButton.classList.add("class-gear");
    gearButton.classList.add("grid-input");
    let options, id;
    switch (className) {
        case "Manadiver":
            id = options = "mino";
            break;
        case "Shieldsworn":
        case "Paladin":
            id = options = "shield";
            break
    }
    gearButton.dataset.options = options;
    gearButton.id = id;
    gearButton.onclick = gridInputClick;
    gearButton.oncontextmenu = gridInputContextMenu;
    button.appendChild(gearButton);
}

function addQuickSummonButton(button) {
    button.querySelector(".quick-summon-toggle")?.remove();
    let qsButton = document.createElement("button");
    qsButton.classList.add("quick-summon-toggle");
    qsButton.dataset.toggled = "false";
    qsButton.onclick = (e) => {
        e.stopPropagation();
        qsButton.dataset.toggled = qsButton.dataset.toggled == "true" ? "false" : "true";
        if (qsButton.dataset.toggled == "true") {
            teamData.quickSummon = button.id.replace("s", "").replace("-", "");
            Array(...document.querySelectorAll(".quick-summon-toggle")).filter(e => e != qsButton).forEach(e => e.dataset.toggled = "false");
        }
        else {
            delete teamData.quickSummon;
        }
    }
    button.appendChild(qsButton);
}

function addWeaponSkills(button, id) {
    let skills = button.parentElement.querySelector(".w-skills");
    let weapon = weapons[id];
    while (skills.firstChild) skills.firstChild.remove();
    if (weapon["s1 icon"]) {
        let skill;
        if (weapon.series === "ultima") {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "ultimaSkill1");
            skill.dataset.weaponType = weapon.type;
        }
        else {
            skill = document.createElement("img");
            skill.src = `https://gbf.wiki/thumb.php?f=${weapon["s1 icon"]}&w=33`;
        }
        skills.appendChild(skill);
    }
    if (weapon["s2 icon"]) {
        let skill;
        if (weapon.series === "dark opus") {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "opusSkill2");
        }
        else if (weapon.series === "draconic" || weapon.series === "draconicprovenance") {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "draconicSkill2");
        }
        else if (weapon.series === "ultima") {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "ultimaSkill2");
        }
        else if (weapon.series === "ccw" && weapon["s2 icon"].includes("blank")) {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "ccwSkill2");
        }
        else {
            skill = document.createElement("img");
            skill.src = `https://gbf.wiki/thumb.php?f=${weapon["s2 icon"]}&w=33`;
        }
        skills.appendChild(skill);
    }
    if (weapon["s3 icon"]) {
        let skill;
        if (weapon.series === "dark opus") {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "opusSkill3");
            skill.dataset.element = weapon.element;
        }
        else if (weapon.series === "draconic" || weapon.series === "draconicprovenance") {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "draconicSkill3");
            skill.dataset.element = weapon.element;
        }
        else if (weapon.series === "ultima") {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "ultimaSkill3");
        }
        else {
            skill = document.createElement("img");
            skill.src = `https://gbf.wiki/thumb.php?f=${weapon["s3 icon"]}&w=33`;
        }
        skills.appendChild(skill);
    }
}

function addSelectableWeaponSkill(skill, optionSet) {
    skill.dataset.options = optionSet;
    skill.id = optionSet;
    skill.classList.add("weapon-skill");
    skill.classList.add("grid-input");
    skill.style.backgroundImage = `url(https://gbf.wiki/thumb.php?f=ws_skill_blank.png&w=33`;
    skill.style.width = "33px";
    skill.onclick = (e) => gridInputClick(e, false);
    skill.oncontextmenu = (e) => gridInputContextMenu(e);
    return skill;
}

function addUncapButton(button, optionSet, selectedOption, uncap, id) {
    let maxUncap;
    let dopus = false;
    if (button.querySelector(".uncap")) button.querySelector(".uncap").remove();
    switch (optionSet) {
        case "characters": maxUncap = characters[id].maxUncap; break;
        case "summons": maxUncap = summons[id].maxUncap; break;
        case "weapons":
            maxUncap = weapons[id].maxUncap;
            if (weapons[id].series == "dark opus") {
                dopus = true;
            }
            break;
    }
    if (uncap == null) {
        if (dopus) uncap = 5;
        else uncap = maxUncap;
    }
    teamData[button.id + "Uncap"] = uncap;
    let uncapButton;
    if ((optionSet != "characters" && maxUncap == 4) || maxUncap == 5) {
        uncapButton = document.createElement("button");
        uncapButton.classList.add("uncap-toggle");
        uncapButton.classList.add("uncap");
        uncapButton.dataset.toggled = uncap == maxUncap;
        uncapButton.title = "Toggle 5*";
        uncapButton.onclick = (e) => {
            e.stopPropagation();
            uncapButton.dataset.toggled = uncapButton.dataset.toggled === "true" ? "false" : "true";
            switch (optionSet) {
                case "characters": uncap = uncapButton.dataset.toggled === "true" ? 5 : 4; break;
                case "weapons": uncap = uncapButton.dataset.toggled === "true" ? weapons[weaponIDs[selectedOption.label]].maxUncap : 0; break;
                case "summons": uncap = uncapButton.dataset.toggled === "true" ? summons[summonIDs[selectedOption.label]].maxUncap : 0; break;
            }
            if (button.id == "s-main") Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].querySelector(".uncap").dataset.toggled = uncapButton.dataset.toggled;
            setButtonToItem(button, optionSet, selectedOption, uncap);
            teamData[button.id + "Uncap"] = uncap;
        }
        button.appendChild(uncapButton);
    }
    else if (maxUncap === 6) {
        teamData[button.id + "Trans"] = uncap == 6 ? "t5" : uncap;
        teamData[button.id + "Uncap"] = 6
        uncapButton = document.createElement("button");
        uncapButton.classList.add("uncap-select");
        uncapButton.classList.add("uncap");
        uncapButton.dataset.trans = uncap == 6 ? "t5" : uncap;
        uncapButton.title = "Select Uncap";
        uncapButton.onclick = openTransDropdown;
        function openTransDropdown(e) {
            e.stopPropagation();
            hideDropdown();
            uncapButton.onclick = closeTransDropdown;
            let dropdown = document.createElement("div");
            dropdown.classList.add("dropdown");
            dropdown.id = "uncap-dropdown";
            dropdown.innerHTML = `<ul id='options-list'>
                <li data-trans="t5" style="background-image: url('assets/Icon_Transcend_Star_5.png');"></li>
                <li data-trans="t4" style="background-image: url('assets/Icon_Transcend_Star_4.png');"></li>
                <li data-trans="t3" style="background-image: url('assets/Icon_Transcend_Star_3.png');"></li>
                <li data-trans="t2" style="background-image: url('assets/Icon_Transcend_Star_2.png');"></li>
                <li data-trans="t1" style="background-image: url('assets/Icon_Transcend_Star_1.png');"></li>
                <li data-trans="5" style="background-image: url('assets/Icon_Blue_Star_Full.png');"></li>
                <li data-trans="4" style="background-image: url('assets/Icon_Blue_Star.png');"></li>
                </ul>`;
            dropdown.querySelectorAll("li").forEach(li => {
                li.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (li.dataset.trans.includes("t")) {
                        teamData[button.id + "Uncap"] = 6;
                        teamData[button.id + "Trans"] = li.dataset.trans;
                    }
                    else {
                        teamData[button.id + "Uncap"] = parseInt(li.dataset.trans);
                        delete teamData[button.id + "Trans"];
                    }
                    uncapButton.style.backgroundImage = li.style.backgroundImage;
                    if (button.id == "s-main") Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].querySelector(".uncap").style.backgroundImage = li.style.backgroundImage;
                    setButtonToItem(button, optionSet, selectedOption, li.dataset.trans, { skipWeaponSkills: true });
                    uncapButton.querySelector("#uncap-dropdown")?.remove();
                    uncapButton.onclick = openTransDropdown;
                }
            });
            uncapButton.appendChild(dropdown);
        }
        function closeTransDropdown(e) {
            e.stopPropagation();
            uncapButton.querySelector("#uncap-dropdown")?.remove();
            uncapButton.onclick = openTransDropdown;
        }
        button.appendChild(uncapButton);
    }
    return uncap;
}

function addAwakeningButton(button, id, iAwk) {
    if (iAwk) iAwk = iAwk.toLowerCase();
    id = parseInt(id);
    if (worldHarps.includes(id)) {
        let awkType;
        switch (id) {
            //moros
            case 1040815000: awkType = "ca"; break;
            case 1040815100: awkType = "attack"; break;
            case 1040815200: awkType = "skill"; break;
            case 1040815300: awkType = "skill"; break;
            case 1040815400: awkType = "attack"; break;
        }
        let awkButton = document.createElement("button");
        awkButton.classList.add("w-awakening");
        awkButton.classList.add("w-awakening-toggle");
        awkButton.id = button.id + "Awk";
        awkButton.dataset.toggled = "false";
        awkButton.title = "Toggle Awakening";
        awkButton.onclick = (e) => {
            e.stopPropagation();
            awkButton.dataset.toggled = awkButton.dataset.toggled === "true" ? "false" : "true";
            if (awkButton.dataset.toggled == "true") {
                teamData[awkButton.id] = awkType;
                awkButton.style.backgroundImage = `url(assets/Awakening_${awkType}.png)`;
            }
            else {
                delete teamData[awkButton.id];
                awkButton.style.backgroundImage = `url(assets/Awakening_Empty.png)`;
            }
        }
        if (iAwk) awkButton.click();
        button.appendChild(awkButton);
        return;
    }
    let awks = ["empty"];
    switch (weapons[id].awakening) {
        //differnt per weapon
        case "grand": awks.push(weapons[id].awakeningType1.replaceAll(".", ""), weapons[id].awakeningType2.replaceAll(".", "")); break;
        //no special
        case "rowv": awks.push("attack", "defense"); break;
        //atk def special
        default: awks.push("attack", "defense", "special"); break;
    }
    let awkButton = document.createElement("button");
    awkButton.classList.add("w-awakening");
    awkButton.classList.add("w-awakening-select");
    awkButton.id = button.id + "Awk";
    awkButton.title = "Select Awakening";
    awkButton.onclick = openAwakeningDropdown;
    function openAwakeningDropdown(e) {
        e.stopPropagation();
        hideDropdown();
        awkButton.onclick = closeAwakeningDropdown;
        let dropdown = document.createElement("div");
        dropdown.classList.add("dropdown");
        dropdown.id = "awakening-dropdown";
        dropdown.innerHTML = `<ul id="options-list">
            ${awks.map(awk =>
            `<li data-awk="${awk}" style="background-image: url('assets/Awakening_${awk}.png');"></li>`
        ).join("\n")}
            </ul>`
        dropdown.querySelectorAll("li").forEach(li => {
            li.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                teamData[awkButton.id] = li.dataset.awk;
                awkButton.style.backgroundImage = li.style.backgroundImage;
                awkButton.querySelector("#awakening-dropdown")?.remove();
                awkButton.onclick = openAwakeningDropdown;
            }
        });
        awkButton.appendChild(dropdown);
    }
    function closeAwakeningDropdown(e) {
        e.stopPropagation();
        awkButton.querySelector("#awakening-dropdown")?.remove();
        awkButton.onclick = openAwakeningDropdown;
    }
    if (iAwk) {
        awkButton.style.backgroundImage = `url('assets/Awakening_${iAwk}.png')`;
        teamData[awkButton.id] = iAwk;
    }
    button.appendChild(awkButton);
}

///
/// Export / Import
///
function wikiTemplateText() {
    return `{{TeamSpread
|team={{Team
|class=${getTeamData("mc")}${teamData.mino ? `|mino=${teamData.mino}` : ""}${teamData.shield ? `|shield=${teamData.shield}` : ""}
|char1=${getCharacterInfo("char1")}
|char2=${getCharacterInfo("char2")}
|char3=${getCharacterInfo("char3")}
|char4=${getCharacterInfo("char4")}
|char5=${getCharacterInfo("char5")}
|skill1=${getTeamData("skill1")}
|skill2=${getTeamData("skill2")}
|skill3=${getTeamData("skill3")}
|main=${getTeamSummonInfo("s-main")}
|support=${getTeamSummonInfo("s-support")}
}}
|weapons={{WeaponGridSkills
|mh=${getWeaponInfo("mh")}
|wp1=${getWeaponInfo("wp1")}
|wp2=${getWeaponInfo("wp2")}
|wp3=${getWeaponInfo("wp3")}
|wp4=${getWeaponInfo("wp4")}
|wp5=${getWeaponInfo("wp5")}
|wp6=${getWeaponInfo("wp6")}
|wp7=${getWeaponInfo("wp7")}
|wp8=${getWeaponInfo("wp8")}
|wp9=${getWeaponInfo("wp9")}${teamData.wp10 || teamData.wp11 || teamData.wp12 ? `
|wp10=${getWeaponInfo("wp10")}
|wp11=${getWeaponInfo("wp11")}
|wp12=${getWeaponInfo("wp12")}` : ""}${getOpusSkillInfo()
        }${getUltimaSkillInfo()
        }${getDraconicSkillInfo()
        }${getCCWSkillInfo()}
}}
|summons={{SummonGrid
|main=${getSummonInfo("s-main")}
|s1=${getSummonInfo("s1")}
|s2=${getSummonInfo("s2")}
|s3=${getSummonInfo("s3")}
|s4=${getSummonInfo("s4")}
|sub1=${getSummonInfo("s-sub1")}
|sub2=${getSummonInfo("s-sub2")}
|quick=${teamData.quickSummon ? teamData.quickSummon : ""}
}}
}}`
}
function getTeamData(item) {
    return teamData[item] ? teamData[item] : "";
}

function getOpusSkillInfo() {
    let skills = [];
    for (let i = 2; i <= 3; i++) {
        let skill = teamData[`opusSkill${i}`];
        if (skill) {
            skills.push(skill);
        }
    }
    if (skills.length > 0)
        return `
|opus=` + skills.join(',');
    return "";
}

function getUltimaSkillInfo() {
    let skills = [];
    for (let i = 1; i <= 3; i++) {
        let skill = teamData[`ultimaSkill${i}`];
        if (skill) {
            skills.push(skill);
        }
    }
    if (skills.length > 0)
        return `
|ultima=` + skills.join(',');
    return "";
}

function getDraconicSkillInfo() {
    let skills = [];
    for (let i = 1; i <= 3; i++) {
        let skill = teamData[`draconicSkill${i}`];
        if (skill) {
            skills.push(skill);
        }
    }
    if (skills.length > 0)
        return `
|draconic=` + skills.join(',');
    return "";
}

function getCCWSkillInfo() {
    if (teamData.ccwSkill2) {
        return `
|ccw=${teamData.ccwSkill2}`;
    }
    else return "";
}

function getWeaponInfo(weaponSlot) {
    let index = weaponSlot.replace("wp", "");
    let weapon = teamData[weaponSlot];
    let uncap = teamData[weaponSlot + "Uncap"];
    let trans = teamData[weaponSlot + "Trans"];
    let awk = teamData[weaponSlot + "Awk"];
    if (!weapon) return "";
    if (index != "mh") weapon = weapon.split("(")[0].trim();
    if (trans === "t5" || (uncap !== 6 && uncap === weapons[weaponIDs[weapon]].maxUncap) || (weapons[weaponIDs[weapon]].series == "dark opus" && uncap == 5)) {
        uncap = null;
    }
    return `${weapon}${uncap != null ? `|u${index}=${trans ? trans : uncap}` : ""}${awk && awk != "empty" ? `|awk${index}=${awk}` : ""}`;
}

function getCharacterInfo(characterSlot) {
    let character = teamData[characterSlot];
    let uncap = teamData[characterSlot + "Uncap"];
    let trans = teamData[characterSlot + "Trans"];
    if (!character) return "";
    let art = uncapToArt(uncap)
    return `${character}${art != "A" ? `|art${characterSlot.replace("char", "")}=${art}` : ""}${trans ? `|trans${characterSlot.replace("char", "")}=${trans.replace("t", "")}` : ""}`;
}

function getSummonInfo(summonSlot) {
    let summon = teamData[summonSlot];
    let uncap = teamData[summonSlot + "Uncap"];
    let trans = teamData[summonSlot + "Trans"];
    if (!summon) return "";
    if (trans === "t5" || (uncap !== 6 && uncap === summons[summonIDs[summon]].maxUncap)) {
        return `${summon}`;
    }
    return `${summon}|u${summonSlot.substring(1).replace("-", "")}=${trans ? trans : uncap}`;
}

function getTeamSummonInfo(summonSlot) {
    let summon = teamData[summonSlot];
    let uncap = teamData[summonSlot + "Uncap"];
    let trans = teamData[summonSlot + "Trans"];
    let slot = summonSlot.substring(2);
    if (!summon) return "";
    let art = uncap == 6 ? trans == "t5" ? "D" : "C" : uncap == 5 ? "B" : undefined;
    return `${summon}${trans ? `|trans${slot}=${trans.replace("t", "")}` : ""}${art ? `|art${slot}=${art}` : ""}`;
}


function importData(data) {
    document.querySelectorAll(".grid-input").forEach(button => {
        gridInputContextMenu(null, button);
    });
    teamData = {};
    let team = {}, weapons = {}, summons = {};
    data = data.replace("{{TeamSpread", "").replace(/(?:\r\n|\r|\n)/g, '');
    data = data.split("}}").slice(0, -2);
    let temp = data[0].replace("|team={{Team", "").split("|").slice(1);
    temp.forEach(item => {
        let [key, value] = item.split("=");
        team[key] = value;
    });
    temp = data[1].replace("|weapons={{WeaponGridSkills", "").split("|").slice(1);
    temp.forEach(item => {
        let [key, value] = item.split("=");
        weapons[key] = value;
    });
    temp = data[2].replace("|summons={{SummonGrid", "").split("|").slice(1);
    temp.forEach(item => {
        let [key, value] = item.split("=");
        summons[key] = value;
    });

    if (team.class) setGridData("mc", team.class);
    if (team.class == "Manadiver" && team.mino) setGridData("mino", team.mino);
    if ((team.class == "Paladin" || team.class == "Shieldsworn") && team.shield) setGridData("shield", team.shield);
    for (let i = 1; i <= 5; i++) {
        let key = `char${i}`;
        if (!team[key]) continue;
        let value = team[key];
        setGridData(key, value, { uncap: team[`trans${i}`] ? `t${team[`trans${i}`]}` : artToUncap(team[`art${i}`]) });
    }
    for (let i = 1; i <= 3; i++) {
        let key = `skill${i}`;
        if (!team[key]) continue;
        let value = team[key];
        setGridData(key, value);
    }
    //if (team.main) setGridData("s-main", team.main);
    if (team.support) setGridData("s-support", team.support);

    if (weapons.mh) setGridData("mh", weapons.mh, { uncap: weapons.umh, awk: weapons.awkmh });
    for (let i = 1; i <= 12; i++) {
        let key = `wp${i}`;
        if (!weapons[key]) continue;
        let value = weapons[key];
        setGridData(key, value, { uncap: weapons[`u${i}`], awk: weapons[`awk${i}`] });
    }
    if (weapons.opus) setGridData("opusSkill2", weapons.opus.split(",")[0]);
    if (weapons.opus) setGridData("opusSkill3", weapons.opus.split(",")[1]);
    if (weapons.ultima) setGridData("ultimaSkill1", weapons.ultima.split(",")[0]);
    if (weapons.ultima) setGridData("ultimaSkill2", weapons.ultima.split(",")[1]);
    if (weapons.ultima) setGridData("ultimaSkill3", weapons.ultima.split(",")[2]);
    if (weapons.draconic) setGridData("draconicSkill2", weapons.draconic.split(",")[0]);
    if (weapons.draconic) setGridData("draconicSkill3", weapons.draconic.split(",")[1]);
    if (weapons.ccw) setGridData("ccwSkill2", weapons.ccw, true);

    if (summons.main) setGridData("s-main", summons.main, { uncap: summons[`umain`] });
    for (let i = 1; i <= 4; i++) {
        let key = `s${i}`;
        if (!summons[key]) continue;
        let value = summons[key];
        setGridData(key, value, { uncap: summons[`u${i}`] });
    }
    for (let i = 1; i <= 2; i++) {
        let key = `sub${i}`;
        if (!summons[key]) continue;
        let value = summons[key];
        setGridData(`s-sub${i}`, value, { uncap: summons[`u${key}`] });
    }
    if (summons["quick"]) document.querySelector(`.summon-grid button[id*="${summons["quick"]}"] .quick-summon-toggle`).click()

    function setGridData(key, value, options = {}) {
        let button = document.querySelector(`#${key}`);
        let optionSet = button.dataset.options;
        let selectedOption;
        selectedOption = optionSets[optionSet].find(option => option.label == value);
        if (selectedOption == null) {
            selectedOption = optionSets[optionSet].find(option => option.metatags.includes(value.toLowerCase()));
        }
        setButtonToItem(button, optionSet, selectedOption, options.uncap ? options.uncap : null, options);
    }
}