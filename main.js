let cOptions = [];
let wOptions = [];
let sOptions = [];
let aOptoins = [];
let elements = { "fire": 1, "water": 2, "earth": 3, "wind": 4, "light": 5, "dark": 6 };
let weaponTypes = { "sabre": 1, "dagger": 2, "spear": 3, "axe": 4, "staff": 5, "gun": 6, "melee": 7, "bow": 8, "harp": 9, "katana": 10 };
let worldHarps = [1040815000, 1040815100, 1040815200, 1040815300, 1040815400];
let beastSummons = [2040376000, 2040377000, 2040378000, 2040379000]
let teamData = {};
let calcData = { wSkills: [], chars: {}, auraBoosts: {} };
let characters, summons, weapons, abilities;
let characterIDs = {}, summonIDs = {}, weaponIDs = {};
let filters = {
    characters: ["any"],
    weapons: ["any"],
    summons: ["any"]
}
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

useTestData = false;
enableCalcs = false;

window.onload = async (e) => {
    setupStaticButtons();

    await fetch(useTestData ? "./test data/characters.json" : "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/characters.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => characters = response);
    await fetch(useTestData ? "./test data/summons.json" : "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/summons.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => summons = response);
    await fetch(useTestData ? "./test data/weapons.json" : "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/weapons.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => weapons = response);
    await fetch(useTestData ? "./test data/abilities.json" : "https://raw.githubusercontent.com/cajunwildcat/The-GrandCypher/main/abilities.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => abilities = response);

    for (let id in characters) {
        let c = characters[id];
        let name = c.pageName;
        characterIDs[name] = id;

        let metas = [id.toString()];
        c.jpname ? metas.push(c.jpname) : null;
        if (c.series && c.series.toLowerCase().includes("grand")) {
            metas.push(`G.${name.split(" (")[0]}`)
        }
        if (c.series && c.series.toLowerCase().includes("summer")) {
            metas.push(`S.${name.split(" (")[0]}`)
        }
        if (c.series && c.series.toLowerCase().includes("halloween")) {
            metas.push(`H.${name.split(" (")[0]}`)
        }
        if (c.series && c.series.toLowerCase().includes("holiday")) {
            metas.push(`C.${name.split(" (")[0]}`)
        }
        if (c.series && c.series.toLowerCase().includes("yukata")) {
            metas.push(`Y.${name.split(" (")[0]}`)
        }
        if (c.series && c.series.toLowerCase().includes("valentine")) {
            metas.push(`V.${name.split(" (")[0]}`)
        }
        if (alias = (aliases[name] || aliases[name.split(' (')[0]] || aliases[id])) {
            metas.push(...alias);
        }

        let weight = 0;
        if (weights[name]) weight = weights[name];

        cOptions.push({
            label: name,
            metatags: metas,
            weight: weight
        });
    }
    for (let id in summons) {
        let s = summons[id];
        let name = s.pageName;
        summonIDs[name] = id;

        let weight = 0;
        if (weights[name]) weight = weights[name];
        else if (s.series == "omega") weight = 1;
        else if (s == "optimus") weight = 1;
        else if (s== "collab") weight = -1;

        let metas = [id.toString()];
        s.jpname ? metas.push(s.jpname) : null;
        if (alias = (aliases[name] || aliases[name.split(' (')[0]] || aliases[id] || aliases[name.split(' Omega')[0]])) {
            metas.push(...alias);
        }

        sOptions.push({
            label: name,
            metatags: metas,
            weight: weight
        });
    }
    for (let id in weapons) {
        let w = weapons[id];
        let name = w.pageName;
        weaponIDs[name] = id;

        let weight = 0;
        if (weights[name]) weight = weights[name];
        else if (w.series == "dark opus") weight = 10;
        else if (w.series == "collab") weight = -1;

        let metas = [id.toString()];
        w.jpname ? metas.push(w.jpname) : null;
        if (w.character) metas.push(`${w.character.split(" (")[0]} ${w.type}`);
        if (alias = (aliases[name] || aliases[name.split(' (')[0]] || aliases[id])) {
            metas.push(...alias);
        }

        wOptions.push({
            label: name,
            metatags: metas,
            weight: weight
        });
    }
    //Abilities that sub options from a selectable ability or otherwise not settable
    let abilityExclusions = ["Affliction Arrow", "Sweeping Arrow", "Deepshot Arrow", "Ensemble of Heroes", "Ensemble of Warriors", "Sky Splitter", "Salt of Cleansing Spirits", "Combat Spirit Infusion", "Spirit Suppression"]
    for (let ability in abilities) {
        if (abilities[ability].ix == "s1" || abilityExclusions.includes(ability)) continue;

        let metas = [ability];
        if (alias = (aliases[ability])) {
            metas.push(...alias);
        }

        aOptoins.push({
            label: ability,
            metatags: metas,
            weight: weights[ability] ? weights[ability] : 0
        });
    }
    setupButtonSearch();

    // Make character grid elements draggable
    InitTeamContainer()

    // Make summon grid elements draggable
    InitSummonsContainer();

    // Make weapon grid elements draggable
    InitWeaponsContainer()
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
    destroyerSkill3: destroyerSkillOptions.skill3,
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

    // Attach event listeners to grid input buttons
    document.querySelectorAll('.grid-input').forEach(button => {
        button.addEventListener('click', (event) => gridInputClick(event));

        // middle clicks - opens wiki page
        button.addEventListener("auxclick", (event) => {
            event.preventDefault();

            const itemId = button.dataset.itemId;
            if (!itemId) return;
            const option = button.dataset.options;
            let url = "https://gbf.wiki/";

            // 1 represents the middle mouse button
            if (event.button === 1) {
                switch (option) {
                    case "classes":
                        url += teamData.mc;
                        break;

                    case "characters":
                        url += characters[itemId].pageName;
                        break;

                    case "weapons":
                        url += weapons[itemId].pageName;
                        break;

                    case "summons":
                        url += summons[itemId].pageName;
                        break;

                    default:
                        break;
                }
                if (!url) return;
                window.open(url, "_blank");
            }
        });

        //right click - clears content
        button.oncontextmenu = (e) => gridInputContextMenu(e);
        if (button.classList.contains("skill")) [...button.children].forEach(e => e.oncontextmenu = (e) => gridInputContextMenu(e, button));

        //janky workaround for searching on any key press
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

function setupStaticButtons() {
    document.querySelector("#export-button").onclick = () => {
        document.querySelector("#import-export-text").value = generateWikiTemplate();
    }

    document.querySelector("#import-button").onclick = () => {
        importWikiTextV2(document.querySelector("#import-export-text").value);
    }

    document.querySelector("#import-export-text").onkeydown = (e) => {
        if (e.key == "Escape") {
            document.querySelector("#import-export-text").value = "";
        }
    }

    document.querySelector("#show-filters-button").onclick = e => {
        let collapsed = document.querySelector("#filters").classList.toggle("filter-transition");
        e.target.textContent = collapsed ? "↓ Hide Filters ↓" : "↑ Show Filters ↑";
    }

    document.querySelector("#collapse-extra-grid-button").onclick = e => {
        let collapsed = e.target.parentElement.classList.toggle("collapsed");
        e.target.textContent = collapsed ? "↓ Show Extra Grid ↓" : "↑ Hide Extra Grid ↑";
        getSetLocalStorage("extra-collapsed", collapsed);
    }
    if (!getSetLocalStorage("extra-collapsed")) {
        document.querySelector("#collapse-extra-grid-button").click();
    }
}

function getSetLocalStorage(key, value = null) {
    if (value === null) return JSON.parse(localStorage.getItem(key));
    localStorage.setItem(key, JSON.stringify(value));
}

///
/// Input Handling
///

function gridInputClick(event, sort = true, button = null) {
    if (!button) button = event.target;
    event.preventDefault();
    event.stopPropagation();
    let cat = button.dataset.options;
    if (!cat) cat = button.parentElement.dataset.options;
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
        options = options.sort((a, b) => b.weight - a.weight || a.label.localeCompare(b.label));
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

    calcData.wSkills = calcData.wSkills.filter(s => s.addedBy != button.id);
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
    dropdown.style.display = 'flex';

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
    Object.keys(teamData)?.filter(key => key.includes(button.id)).forEach(key => delete teamData[key]);
    calcData.wSkills = calcData.wSkills.filter(s => s.addedBy != button.id);

    let itemName = selectedOption.label;
    let id = selectedOption.metatags[0];
    if (id == button.dataset.itemId && !button.id == "s-main") {
        setButtonBackground(button, selectedOption, optionSet, uncap, id);
        return;
    }
    button.dataset.itemId = id;
    if (["characters", "summons", "weapons"].includes(optionSet)) {
        uncap = addUncapButton(button, optionSet, selectedOption, uncap, id, options.trans);
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
        case 'characters':
            let char = characters[selectedOption.metatags[0]];
            calcData.chars[button.id] = {
                tags: [`element:${char.element}`, ...char.weapon.map(w => `weapon:${w}`), ...char.race.map(r => `race:${r}`)].map(e=>e.toLowerCase())
            }

            if (button.querySelector(".c-awakening")) {
                delete teamData[button.querySelector(".c-awakening").id];
                button.querySelector(".c-awakening").remove();
            }
            addAwakeningButton(button, id, options.awk);
            break;
        case 'weapons':
            if (parseInt(button.id.replace("wp", "")) >= 11) {
                if (getSetLocalStorage("extra-collapsed")) {
                    document.querySelector("#collapse-extra-grid-button").click();
                }
            }
            if (button.querySelector(".w-awakening")) {
                delete teamData[button.querySelector(".w-awakening").id];
                button.querySelector(".w-awakening").remove();
            }
            if (weapons[id].awakening) addAwakeningButton(button, id, options.awk);
            addWeaponSkills(button, id, uncap);
            break;
        case 'summons':
            if (!button.parentElement.classList.contains("team-summon")) addQuickSummonButton(button);
            addSummonAuraCalc(button.id, id, uncap);
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
        case 'destroyerSkill3':
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
            backgroundUrl = `https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/ui/icon/ability/m/${abilityIcons[selectedOption.label]}.png`;
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
            art = uncap == 6 || uncap == "t5" ? "_04" : uncap.toString().includes("t") ? "_03" : uncap == 5 && !summons[id].pageName.includes("SSR") && !beastSummons.includes(parseInt(id)) ? "_02" : "";
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
        case 'destroyerSkill3':
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

function addWeaponSkills(button, weaponID, uncap) {
    let skills = button.parentElement.querySelector(".w-skills");
    let weapon = weapons[weaponID];
    while (skills.firstChild) skills.firstChild.remove();
    calcData.wSkills = calcData.wSkills.filter(s => s.addedBy != button.id);
    if (weapon.skill1.name) {
        let skill;
        if (weapon.series === "ultima") {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "ultimaSkill1");
            skill.dataset.weaponType = weapon.type;
        }
        else {
            skill = document.createElement("img");
            skill.title = weapon.skill1.name;
            skill.src = `https://gbf.wiki/thumb.php?f=${weapon.skill1.icon}&w=33`;
        }
        skills.appendChild(skill);
        addWeaponSkillCalcData(weapon.skill1, button.id);
    }
    if (weapon.skill2.name) {
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
        else if (weapon.series === "ccw" && weapon.skill2.icon.includes("blank")) {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "ccwSkill2");
        }
        else {
            skill = document.createElement("img");
            skill.title = weapon.skill2.name;
            skill.src = `https://gbf.wiki/thumb.php?f=${weapon.skill2.icon}&w=33`;
        }
        skills.appendChild(skill);
        addWeaponSkillCalcData(weapon.skill2, button.id);
    }
    if (weapon.skill3.name) {
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
        else if (weapon.series === "destroyer") {
            skill = document.createElement("button");
            skill = addSelectableWeaponSkill(skill, "destroyerSkill3");
        }
        else {
            skill = document.createElement("img");
            skill.title = weapon.skill3.name;
            skill.src = `https://gbf.wiki/thumb.php?f=${weapon.skill3.icon}&w=33`;
        }
        skills.appendChild(skill);
        addWeaponSkillCalcData(weapon.skill3, button.id);
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

function addUncapButton(button, optionSet, selectedOption, uncap, id, trans) {
    let maxUncap;
    if (button.querySelector(".uncap")) button.querySelector(".uncap").remove();
    switch (optionSet) {
        case "characters": maxUncap = characters[id].maxUncap; break;
        case "summons": maxUncap = summons[id].maxUncap; break;
        case "weapons":
            maxUncap = weapons[id].maxUncap;
            break;
    }
    if (uncap == null) {
        uncap = maxUncap;
    }
    teamData[button.id + "Uncap"] = uncap;
    let uncapButton;
    if ((optionSet != "characters" && maxUncap == 4) || maxUncap == 5 || (optionSet == "summons" && summons[id].series == "robur")) {
        uncapButton = document.createElement("button");
        uncapButton.classList.add("uncap-toggle");
        uncapButton.classList.add("uncap");
        uncapButton.dataset.toggled = uncap == maxUncap;
        uncapButton.dataset.maxUncap = maxUncap;
        uncapButton.title = `Toggle ${maxUncap}*`;
        uncapButton.onclick = (e) => {
            e.stopPropagation();
            uncapButton.dataset.toggled = uncapButton.dataset.toggled === "true" ? "false" : "true";
            switch (optionSet) {
                case "characters": uncap = uncapButton.dataset.toggled === "true" ? 5 : 4; break;
                case "weapons": uncap = uncapButton.dataset.toggled === "true" ? weapons[weaponIDs[selectedOption.label]].maxUncap : 0; break;
                case "summons": uncap = uncapButton.dataset.toggled === "true" ? summons[summonIDs[selectedOption.label]].maxUncap : 0; break;
            }
            if (button.id == "s-main") Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].querySelector(".uncap").dataset.toggled = uncapButton.dataset.toggled;
            setButtonBackground(button, selectedOption, optionSet, uncap, button.dataset.itemId);
            teamData[button.id + "Uncap"] = uncap;
        }
        button.appendChild(uncapButton);
    }
    else if (maxUncap === 6) {
        teamData[button.id + "Trans"] = trans? trans : uncap == 6 ? "t5" : null;
        teamData[button.id + "Uncap"] = uncap;
        uncapButton = document.createElement("button");
        uncapButton.classList.add("uncap-select");
        uncapButton.classList.add("uncap");
        uncapButton.dataset.trans = trans? trans : uncap == 6 ? "t5" : null;
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
                    setButtonBackground(button, selectedOption, optionSet, li.dataset.trans, button.dataset.itemId);
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
    if (iAwk) {
        iAwk = iAwk.toLowerCase().replaceAll(".","");
        switch (iAwk) {
            case "skill dmg": iAwk = "skill"; break;
            case "ma": iAwk = "multiattack"; break;
            case "def": iAwk = "defense"; break;
            case "atk": iAwk = "attack"; break;
        }
    }
    id = parseInt(id);
    if (worldHarps.includes(id)) {
        let awkType;
        switch (id) {
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
        awkButton.click();
        button.appendChild(awkButton);
        return;
    }
    let awks = ["empty"];
    let awkType;
    if (button.id.includes("char")) {
        awks=["balanced", "attack", "defense", "multiattack"];
        if (!iAwk) iAwk = "balanced";
        awkType = "c";
    }
    else {
        awkType = "w";
        switch (weapons[id].awakening) {
            //differnt per weapon
            case "grand": awks.push(weapons[id].awakeningType1.replaceAll(".", ""), weapons[id].awakeningType2.replaceAll(".", "")); break;
            //no special
            case "rowv": awks.push("attack", "defense"); break;
            //atk skill ca
            case "celestial": awks.push("attack", "skill", "ca"); break;
            //atk def special
            default: awks.push("attack", "defense", "special"); break;
        }
    }
    let awkButton = document.createElement("button");
    awkButton.classList.add(`${awkType}-awakening`);
    awkButton.classList.add(`${awkType}-awakening-select`);
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
                awkButton.dataset.awk = li.dataset.awk;
                closeAwakeningDropdown(e);
                addAwakeningStats(button, weapons[id], li.dataset.awk);
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
        awkButton.dataset.awk = iAwk;
        addAwakeningStats(button, weapons[id], iAwk)
    }
    button.appendChild(awkButton);
}

///
/// Export / Import
///
function generateWikiTemplate() {
return `{{TeamSpread
|class=${getTeamData("mc")}${teamData.mino ? `|mino=${teamData.mino}` : ""}${teamData.shield ? `|shield=${teamData.shield}` : ""}
|char1=${getCharacterInfo("char1")}
|char2=${getCharacterInfo("char2")}
|char3=${getCharacterInfo("char3")}
|char4=${getCharacterInfo("char4")}
|char5=${getCharacterInfo("char5")}
|skill1=${getTeamData("skill1")}
|skill2=${getTeamData("skill2")}
|skill3=${getTeamData("skill3")}

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
        }${getDestroyerSkillInfo()
        }${getCCWSkillInfo()}

|main=${getSummonInfo("s-main")}
|support=${getSummonInfo("s-support")}
|s1=${getSummonInfo("s1")}
|s2=${getSummonInfo("s2")}
|s3=${getSummonInfo("s3")}
|s4=${getSummonInfo("s4")}
|sub1=${getSummonInfo("s-sub1")}
|sub2=${getSummonInfo("s-sub2")}
|quick=${teamData.quickSummon ? teamData.quickSummon : ""}

|source=
|comments=
|rotation=
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

function getDestroyerSkillInfo() {
    if (teamData.destroyerSkill3) {
        return `
|destroyer=${teamData.destroyerSkill3}`;
    }
    else return "";
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
    if ((uncap !== 6 && uncap === weapons[weaponIDs[weapon]].maxUncap) || (weapons[weaponIDs[weapon]].series == "dark opus" && uncap == 5)) {
        uncap = null;
    }
    return `${weapon}${uncap != null ? `|u${index}=${trans ? trans : uncap}` : ""}${awk && awk != "empty" ? `|awk${index}=${awk}` : ""}`;
}

function getCharacterInfo(characterSlot) {
    let character = teamData[characterSlot];
    if (!character) return "";
    let uncap = teamData[characterSlot + "Uncap"];
    let trans = teamData[characterSlot + "Trans"];
    let awk = teamData[characterSlot + "Awk"];
    let slot = characterSlot.replace("char", "");
    return `${character}${uncap > 4 || trans ? `|uchar${slot}=${trans? trans : uncap}` : ""}${awk != "balanced"? `|awkchar${slot}=${awk}` : ""}`;
}

function getSummonInfo(summonSlot) {
    let slot = summonSlot.split("-").slice(-1)[0];
    let summon = teamData[summonSlot];
    let uncap = teamData[summonSlot + "Uncap"];
    let trans = teamData[summonSlot + "Trans"];
    if (!summon) return "";
    if (trans === "t5" || (uncap !== 6 && uncap === summons[summonIDs[summon]].maxUncap)) {
        return `${summon}`;
    }
    return `${summon}|u${slot}=${trans ? trans : uncap}`;
}

function importWikiTextV2(inputData) {
    //use old importer for old format compatibility
    if (inputData.includes("|team=")) {
        importDataV1(inputData);
        return;
    }
    //clear existing data
    document.querySelectorAll(".grid-input").forEach(button => {
        gridInputContextMenu(null, button);
    });
    teamData = {};
    //strip input data into param
    let data = {};
    let temp = inputData.replace("{{TeamSpread", "").replace("}}","").replaceAll("\n","").replace("}}","").split("|").filter(r=>r!="");
    for (let i = 0; i < temp.length; i++) {
        let [key,value] = temp[i].split("=");
        data[key] = value;
    }

    if (data.class) setGridData("mc", data.class);
    if (data.class == "Manadiver" && data.mino) setGridData("mino", data.mino);
    if ((data.class == "Paladin" || data.class == "Shieldsworn") && data.shield) setGridData("shield", data.shield);
    //characters
    for (let i = 1; i <= 8; i++) {
        let key = `char${i}`;
        if (!data[key]) continue;
        let value = data[key];
        setGridData(key, value, { uncap: data[`uchar${i}`], awk: data[`awkchar${i}`], trans: data[`uchar${i}`] });
    }
    //skills
    for (let i = 1; i <= 3; i++) {
        let key = `skill${i}`;
        if (!data[key]) continue;
        let value = data[key];
        setGridData(key, value);
    }
    //weapons
    if (data.mh) setGridData("mh", data.mh, { uncap: data.umh, awk: data.awkmh, trans: data.umh });
    for (let i = 1; i <= 12; i++) {
        let key = `wp${i}`;
        if (!data[key]) continue;
        let value = data[key];
        setGridData(key, value, { uncap: data[`u${i}`], awk: data[`awk${i}`], trans: data[`u${i}`] });
    }
    //selectable weapon skills
    if (data.opus) setGridData("opusSkill2", data.opus.split(",")[0]);
    if (data.opus) setGridData("opusSkill3", data.opus.split(",")[1]);
    if (data.ultima) setGridData("ultimaSkill1", data.ultima.split(",")[0]);
    if (data.ultima) setGridData("ultimaSkill2", data.ultima.split(",")[1]);
    if (data.ultima) setGridData("ultimaSkill3", data.ultima.split(",")[2]);
    if (data.draconic) setGridData("draconicSkill2", data.draconic.split(",")[0]);
    if (data.draconic) setGridData("draconicSkill3", data.draconic.split(",")[1]);
    if (data.destroyer) setGridData("destroyerSkill3", data.destroyer, true);
    if (data.ccw) setGridData("ccwSkill2", data.ccw, true);
    //summons
    if (data.main) setGridData("s-main", data.main, { uncap: summons[`umain`] });
    if (data.main) setGridData("s-support", data.support, { uncap: summons[`usupport`] });
    for (let i = 1; i <= 4; i++) {
        let key = `s${i}`;
        if (!data[key]) continue;
        let value = data[key];
        setGridData(key, value, { uncap: data[`u${key}`] });
    }
    //subsummons
    for (let i = 1; i <= 2; i++) {
        let key = `sub${i}`;
        if (!data[key]) continue;
        let value = data[key];
        setGridData(`s-sub${i}`, value, { uncap: data[`u${key}`] });
    }
    if (data["quick"]) document.querySelector(`.summon-grid div[id*="${data["quick"]}"] .quick-summon-toggle`).click()

    //helper function to get correct item from optionSet
    function setGridData(key, value, options = {}) {
        let button = document.querySelector(`#${key}`);
        let optionSet = button.dataset.options;
        let selectedOption;
        selectedOption = optionSets[optionSet].find(option => option.label == value);
        if (selectedOption == null) {
            selectedOption = optionSets[optionSet].find(option => option.metatags.includes(value.toLowerCase()));
        }
        if (!selectedOption) alert(`There was an issue reading the value for ${key}. Please double check it is spelled and capitalized correctly.`)
        setButtonToItem(button, optionSet, selectedOption, options.uncap ? options.uncap : null, options);
    }
}
///
/// Stat Calcs
///

function calcCharStats(charSlot) {
    if (!enableCalcs) return;
    let char = calcData.chars[charSlot];
    let stats = calcData.wSkills.filter(s => char.tags.includes(s.affects) || s.affects == "all");
    stats = stats.map(s => { return { ...s } });
    stats.forEach(s => {
        if (!s.boostedBy) return;
        s.value = s.value * (1 + calcData.wSkills.filter(m => m.aura == s.boostedBy).reduce((sum, cur) => sum += cur.value, 0));
    });
    stats = Object.values(stats.reduce((acc, obj) => {
        const key = `${obj.frame || "noframe"}-${obj.statName}`;
        if (!acc[key]) acc[key] = { value: obj.value, statName: obj.statName, frame: obj.frame };
        else acc[key].value += obj.value;
        return acc;
    }, {}));
    stats.forEach(s => {
        if (s.frame !== "grid") return;
        let overcap = s.value;
        if (s.statName == "hp") console.log(s.value);
        s.value = truncToDigit(Math.min(s.value, gridSkillCaps[s.statName].cap), 5);
        overcap -= s.value;
        //TODO: handle overcap
    });
    console.log(stats);
}

function addSummonAuraCalc(summonSlot, summonID, uncap) {
    if (!enableCalcs) return;
    calcData.wSkills = calcData.wSkills.filter(s => s.addedBy != summonSlot);
    let summonAura = summonAuraData[summonID];
    if (!summonAura) return;
    if (summonSlot == "s-main" || summonSlot == "s-support") {
        summonAura = summonAura["main"];
        if (!summonAura) { console.log(`There is no main/support aura data for ${summons[summonID].pageName}`); }
        if (uncap == 6) uncap = teamData[`${summonSlot}Trans`];
        let boosts = summonAura[uncap];
        boosts = boosts.map(b => {
            return { ...b, addedBy: summonSlot, frame: "summon" };
        });
        calcData.wSkills.push(...boosts);
    }
}

function addWeaponSkillCalcData(wSkillInfo, weaponSlot) {   
    if (!enableCalcs) return;
    const missingSkill = () => {
        let weap = document.querySelector(`#${weaponSlot}`);
        let warn = document.createElement("img");
        warn.src = "assets/warning.png";
        warn.style = `width: 20px; height: 20px; position: absolute; top: 0px; right: 0px;`;
        warn.title = "Skill data for one or more skill on this weapon is missing."
        weap.appendChild(warn);
        console.log(`${skill} does not have skill data.`);
    }
    let skillLevel = teamData[weaponSlot + "Trans"]? teamData[weaponSlot + "Trans"] : teamData[weaponSlot + "Uncap"];
    switch (skillLevel) {
        default: skillLevel = 10; break;
        case 4: skillLevel = 15; break;
        case "t1":
        case "t2":
        case "t3":
        case "t4":
        case 5: skillLevel = 20; break;
        case "t5": skillLevel = 25; break;
    }
    let skillName = wSkillInfo.name;
    let size, boost, element, skill;
    //unboostable unique mods e.g. celestial weapons, exalto
    if (Object.keys(weaponSkillData).includes(wSkillInfo.name)) {
        let skill = weaponSkillData[wSkillInfo.name];
        if (Array.isArray(skill)) {
            skill = skill.map(stat => { return { ...stat, addedBy: weaponSlot, frame: "grid" }; })
        }
        else {
            skill = skill[skillLevel].map(stat => { return { ...stat, addedBy: weaponSlot, frame: "grid" }; })
        }
        calcData.wSkills.push(...skill);
    }
    //magna boostable mods
    else if (omegaMods[skillName.split(" ")[0]]) {
        boost = skillName.split(" ")[0];
        element = omegaMods[boost].toLowerCase();
        size = !skillName.split(" ")[2] ? "small" : skillName.split(" ")[2] == "II" ? "medium" : "big";
        skill = skillName.split(" ")[1].toLowerCase();
        if (!weaponSkillData[skill]) { missingSkill(); return; }
        skill = weaponSkillData[skill];
        try {
            skill = [...skill[`${size} omega`][skillLevel]];
        } catch (e) { try { skill = [...skill[size][skillLevel]] } catch (e) { missingSkill(); return; } }
        skill = skill.map(stat => {
            let statName = stat.statName;
            if (statName == "might" || statName == "stamina" || statName == "emnity") statName = "omega " + statName;
            let affects;
            switch (stat.affects) {
                case "<element>": affects = `element:${element}`; break;
            }
            return { ...stat, statName: statName, affects, addedBy: weaponSlot, boostedBy: boost, frame: "grid" };
        });
        calcData.wSkills.push(...skill);
    }
    //primal boostable mods
    else if (primalMods[skillName.split(" ")[0]]) {
        boost = skillName.split(" ")[0];
        element = primalMods[boost].element.toLowerCase();
        size = primalMods[boost].size;
        skill = skillName.split(" ")[1].toLowerCase();
        if (!weaponSkillData[skill]) { missingSkill(); return; }
        skill = weaponSkillData[skill];
        skill = [...skill[size][skillLevel]];
        skill = skill.map(stat => {
            let affects;
            switch (stat.affects) {
                case "<element>": affects = `element:${element}`; break;
            }
            return { ...stat, affects, addedBy: weaponSlot, boostedBy: boost, frame: "grid" };
        });
        calcData.wSkills.push(...skill);
    }
    //unboosted non-unique mod e.g. ancestral weapons, Crux
    else {
        console.log("unboosted mod");
    }
    console.log(calcData)
}

function addAwakeningStats(button, weapon, awk) {
    if (!enableCalcs) return;
    //TODO: handle character awakening
    calcData.wSkills = calcData.wSkills.filter(s=>s.addedBy != `${button.id}Awk`);
    let stats;
    awk = awk.replaceAll(".","");
    switch (awk) {
        case "attack":
            switch (weapon.awakening) {
                case "revansmkII": stats = [{ value: 35, statName: "might", affects: "<element>" }, { value: 15, statName: "ele atk", affects: "<element>" }, { value: 10, statName: "ex might", affects: "<element>" }]
                    break;
                default: break;
            }
            break;
        case "defense": break;
        case "special": break;
        case "skill dmg":
        case "skill": break;
        case "ca": break;
        case "healing": break;
        case "multiattack": break;
    }
    if (!stats) return;
    stats.forEach(s => {
        s.addedBy = `${button.id}Awk`;
        s.frame = "grid";
        switch (s.affects) {
            case "<element>": s.affects = `element:${weapon.element}`; break;
        }
    });
    calcData.wSkills.push(...stats);
}