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
let teamData = {};
let characters, summons, weapons, abilities;
let characterIDs = {}, summonIDs = {}, weaponIDs = {};
let filters = {
    characters: [],
    weapons: [],
    summons: []
}
window.onload = async (e) => {
    const aliases = {
        "Catura": ["cow"],
        "Payila": ["dragon"],
        "Vikala": ["rat"]
    };

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

    for (id in characters) {
        let name = characters[id].name;
        characterIDs[name] = id;
        cOptions.push({
            label: name,
            metatags: [id]
        });
        if (aliases[name]) {
            cOptions[cOptions.length - 1].metatags.push(...aliases[name]);
        }
    }
    for (id in summons) {
        let name = summons[id].name;
        summonIDs[name] = id;
        sOptions.push({
            label: name,
            metatags: [id]
        });
        if (aliases[name]) {
            sOptions[sOptions.length - 1].metatags.push(...aliases[name]);
        }
    }
    for (id in weapons) {
        let name = weapons[id].name;
        weaponIDs[name] = id;
        wOptions.push({
            label: name,
            metatags: [id]
        });
        if (aliases[name]) {
            sOptions[wOptions.length - 1].metatags.push(...aliases[name]);
        }
    }
    for (ability in abilities) {
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

function setupButtonSearch() {
    const dropdown = document.getElementById('dropdown');
    const searchInput = document.getElementById('searchInput');
    const optionsList = document.getElementById('optionsList');

    const optionSets = {
        classes: clOptions,
        characters: cOptions,
        weapons: wOptions,
        summons: sOptions,
        skills: aOptoins
    };

    let currentOptions = [];
    let filteredOptions = [];
    let activeButton = null;
    let activeIndex = -1;

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
                setButtonBackground(activeButton, activeButton.dataset.options, option); // Update background image
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
                setButtonBackground(activeButton, activeButton.dataset.options, selectedOption); // Update background image
                hideDropdown();
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
        button.addEventListener('click', (event) => {
            const cat = button.dataset.options;
            const options = optionSets[cat].filter(option => {
                switch (cat) {
                    case 'skills':
                        return true;
                    case 'classes':
                        return true;
                    case 'weapons':
                        return filters.weapons.includes(weapons[option.metatags[0]].rarity.toLowerCase())
                            && filters.weapons.includes(weapons[option.metatags[0]].element.toLowerCase());
                    case 'characters':
                        return filters.characters.includes(characters[option.metatags[0]].rarity.toLowerCase())
                            && filters.characters.includes(characters[option.metatags[0]].element.toLowerCase());
                    case 'summons':
                        return filters.summons.includes(summons[option.metatags[0]].rarity.toLowerCase())
                            && filters.summons.includes(summons[option.metatags[0]].element.toLowerCase());
                }
            }).sort((a, b) => a.label.localeCompare(b.label));
            if (dropdown.style.display === 'block' && activeButton === button) {
                hideDropdown();
            } else {
                showDropdown(event, options);
            }
        });

        button.oncontextmenu = (e) => {
            e.preventDefault();
            button.style.backgroundImage = null;
            if (button.dataset.options =="skills") {
                button.querySelector("img").src = "assets/empty-skill.png";
                button.querySelector("span").textContent = "";
            }
            else if (button.querySelector("#uncap-dropdown")) {
                button.querySelector("#uncap-dropdown").remove();
            }
            if (button.id == "s-main") {
                Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].style.backgroundImage = null;
                Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].querySelector("#uncap-dropdown")?.remove();
            }
            delete teamData[button.id];
            delete teamData[button.id + "Uncap"];
            delete teamData[button.id + "Trans"];
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (document.querySelector("#uncap-dropdown") && !document.querySelector("#uncap-dropdown").contains(event.target)) {
            document.querySelector("#uncap-dropdown")?.remove();
        }
        if (!dropdown.contains(event.target) && event.target.nodeName !== 'BUTTON') {
            hideDropdown();
        }
    });

    document.querySelector("#export-button").onclick = () => {
        document.querySelector("#import-export-text").value = wikiTemplateText();
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

function setButtonBackground(button, optionSet, selectedOption, uncap = null) {
    let backgroundUrl = '';
    let id = selectedOption.metatags[0];
    if (["characters", "summons", "weapons"].includes(optionSet)) {
        if (uncap === null) {
            if (button.querySelector("#uncap-dropdown")) button.querySelector("#uncap-dropdown").remove();
            switch (optionSet) {
                case "characters": uncap = characters[id].maxUncap; break;
                case "summons": uncap = summons[id].maxUncap; break;
                case "weapons": uncap = weapons[id].maxUncap; break;
            }
            teamData[button.id + "Uncap"] = uncap;
            if ((optionSet != "characters" && uncap == 4) || uncap == 5) {
                let uncapButton = document.createElement("button");
                uncapButton.classList.add("uncap-toggle");
                uncapButton.dataset.toggled = true;
                uncapButton.title = "Toggle 5*";
                uncapButton.onclick = (e) => {
                    e.stopPropagation();
                    uncapButton.dataset.toggled = uncapButton.dataset.toggled === "true" ? "false" : "true";
                    teamData[button.id + "Uncap"] = uncapButton.dataset.toggled === "true" ? optionSet == "characters" ? 5 : optionSet == "weapons" ? weapons[weaponIDs[selectedOption]].maxUncap : summons[summonIDs[selectedOption]] : optionSet == "characters" ? 4 : 0;
                    setButtonBackground(button, optionSet, selectedOption, uncapButton.dataset.toggled === "true" ? 5 : 4);
                }
                button.appendChild(uncapButton);
            }
            else if (uncap === 6) {
                teamData[button.id + "Trans"] = "t5";
                let uncapButton = document.createElement("button");
                uncapButton.classList.add("uncap-select");
                uncapButton.title = "Select Uncap";
                uncapButton.onclick = (e) => {
                    e.stopPropagation();
                    let dropdown = document.createElement("div");
                    dropdown.classList.add("dropdown");
                    dropdown.id = "uncap-dropdown";
                    dropdown.style.position = "absolute";
                    dropdown.style.top = "30px";
                    dropdown.style.left = "0";
                    dropdown.style.display = "block";
                    dropdown.style.width = "30px";
                    dropdown.innerHTML = `<ul id='optionsList'>
                    <li data-trans="t5" style="background-image: url('assets/Icon_Transcend_Star_5.png');background-size:30px 30px;width:30px;height:30px;padding:0;"></li>
                    <li data-trans="t4" style="background-image: url('assets/Icon_Transcend_Star_4.png');background-size:30px 30px;width:30px;height:30px;padding:0;"></li>
                    <li data-trans="t3" style="background-image: url('assets/Icon_Transcend_Star_3.png');background-size:30px 30px;width:30px;height:30px;padding:0;"></li>
                    <li data-trans="t2" style="background-image: url('assets/Icon_Transcend_Star_2.png');background-size:30px 30px;width:30px;height:30px;padding:0;"></li>
                    <li data-trans="t1" style="background-image: url('assets/Icon_Transcend_Star_1.png');background-size:30px 30px;width:30px;height:30px;padding:0;"></li>
                    <li data-trans="5" style="background-image: url('assets/Icon_Blue_Star_Full.png');background-size:30px 30px;width:30px;height:30px;padding:0;"></li>
                    <li data-trans="4" style="background-image: url('assets/Icon_Blue_Star.png');background-size:30px 30px;width:30px;height:30px;padding:0;"></li>
                    </ul>`
                    dropdown.querySelectorAll("li").forEach(li => {
                        li.onclick = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (li.dataset.trans.includes("t")) {
                                teamData[button.id + "Uncap"] = 6;
                                teamData[button.id + "Trans"] = li.dataset.trans;
                            }
                            else {
                                teamData[button.id + "Uncap"] = li.dataset.trans;
                                delete teamData[button.id + "Trans"];
                            }
                            uncapButton.style.backgroundImage = li.style.backgroundImage;
                            if (button.id == "s-main") Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].querySelector("#uncap-dropdown").style.backgroundImage = li.style.backgroundImage;
                            setButtonBackground(button, optionSet, selectedOption, li.dataset.trans);
                            document.querySelector("#uncap-dropdown").remove();
                        }
                    });
                    uncapButton.appendChild(dropdown);
                }
                button.appendChild(uncapButton);
                if (button.id == "s-main") Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].appendChild(uncapButton.cloneNode(true));
            }
        }
    }
    let art;
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
            backgroundUrl = `url('https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/npc/f/${id}_0${art}.jpg')`;
            break;
        case 'weapons':
            art = uncap == 6 || uncap == "t5" ? "_03" : uncap.toString().includes("t") ? "_02" : "";
            backgroundUrl = `url('https://prd-game-a1-granbluefantasy.akamaized.net/assets_en/img/sp/assets/weapon/${button.parentElement.classList[0].includes("main") ? "ls" : "m"}/${id}${art}.jpg')`;

            let skills = button.parentElement.querySelector(".w-skills");
            while (skills.firstChild) skills.firstChild.remove();
            if (weapons[id]["s1 icon"]) {
                let img = document.createElement("img");
                img.src = `https://gbf.wiki/thumb.php?f=${weapons[id]["s1 icon"]}&w=33`;
                skills.appendChild(img);
            }
            if (weapons[id]["s2 icon"]) {
                let img = document.createElement("img");
                img.src = `https://gbf.wiki/thumb.php?f=${weapons[id]["s2 icon"]}&w=33`;
                skills.appendChild(img);
            }
            if (weapons[id]["s3 icon"]) {
                let img = document.createElement("img");
                img.src = `https://gbf.wiki/thumb.php?f=${weapons[id]["s3 icon"]}&w=33`;
                skills.appendChild(img);
            }
            break;
        case 'summons':
            art = uncap == 6 || uncap == "t5" ? "_04" : uncap.toString().includes("t") ? "_03" : uncap == 5 ? "_02" : "";
            backgroundUrl = `url('https://prd-game-a1-granbluefantasy.akamaized.net/assets_en/img/sp/assets/summon/${button.parentElement.classList[0].includes("team") ? "m" : `party_${button.parentElement.classList[0].includes("main") ? "main" : "sub"}`}/${id}${art}.jpg')`;
            break;
        default:
            console.error('Invalid option set');
            break;
    }
    button.style.backgroundImage = backgroundUrl;
    if (button.id == "s-main") Array(...document.querySelectorAll("#s-main")).filter(e => e !== button)[0].style.backgroundImage = backgroundUrl.replace(button.parentElement.classList[0].includes("team") ? "/m/" : "/party_main/", button.parentElement.classList[0].includes("team") ? "/party_main/" : "/m/");
    teamData[button.id] = selectedOption.label;
}

function wikiTemplateText() {
    return `{{TeamSpread
|team={{Team
|class=${getTeamData("mc")}
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
|wp9=${getWeaponInfo("wwp9")}${teamData.wp10 || teamData.wp11 || teamData.wp12 ? `
|wp10=${getWeaponInfo("wp10")}
|wp11=${getWeaponInfo("wp11")}
|wp12=${getWeaponInfo("wp12")}` : ""}
|ultima=${teamData.ultima ? teamData.ultima.join(",") : ""}
|opus=${teamData.opus ? teamData.opus.join(",") : ""}
}}
|summons={{SummonGrid
|main=${getSummonInfo("s-main")}
|s1=${getSummonInfo("s1")}
|s2=${getSummonInfo("s2")}
|s3=${getSummonInfo("s3")}
|s4=${getSummonInfo("s4")}
|sub1=${getSummonInfo("s-sub1")}
|sub2=${getSummonInfo("s-sub2")}
|quick=
}}
}}`
}
function getTeamData(item) {
    return teamData[item] ? teamData[item] : "";
}

function getWeaponInfo(weaponSlot) {
    let weapon = teamData[weaponSlot];
    let uncap = teamData[weaponSlot + "Uncap"];
    let trans = teamData[weaponSlot + "Trans"];
    if (!weapon) return "";
    if (trans === "t5" || (uncap !== 6 && uncap === weapons[weaponIDs[weapon]].maxUncap)) {
        return `${weapon}`;
    }
    return `${weapon}|u${weaponSlot.replace("wp", "")}=${trans ? trans : uncap}`;
}

function getCharacterInfo(characterSlot) {
    let character = teamData[characterSlot];
    let uncap = teamData[characterSlot + "Uncap"];
    let trans = teamData[characterSlot + "Trans"];
    if (!character) return "";
    if (uncap === 4) {
        return `${character}`;
    }
    let art;
    if (uncap == 6)
        art = "D";
    else if (uncap == 5)
        art = "C";
    else
        art = "A";
    return `${character}${`|art${characterSlot.replace("char", "")}=${art}`}${trans ? `|trans${characterSlot.replace("char", "")}=${trans}` : ""}`;
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
    return `${summon}${uncap > 4 ? `|art${slot}=${uncap == 6 ? trans == "t5" ? `D|trans${slot}=${trans}` : `C|trans${slot}=${trans}` : "B"}` : ""}`
}