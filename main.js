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
let teamData = {};
let characters, summons, weapons;
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

    for (id in characters) {
        let name = characters[id].name;
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
        wOptions.push({
            label: name,
            metatags: [id]
        });
        if (aliases[name]) {
            sOptions[wOptions.length - 1].metatags.push(...aliases[name]);
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
        summons: sOptions
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
            delete teamData[button.id];
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
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
            console.log(e)
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

function setButtonBackground(button, optionSet, selectedOption) {
    let backgroundUrl = '';
    let id = selectedOption.metatags[0];
    switch (optionSet) {
        case 'classes':
            backgroundUrl = `url('https://prd-game-a1-granbluefantasy.akamaized.net/assets_en/img/sp/assets/leader/quest/${id}_1_01.jpg')`;
            break;
        case 'characters':
            backgroundUrl = `url('https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/npc/f/${id}_0${characters[id].maxUncap == 5 ? "3" : characters[id].maxUncap == 6 ? "4" : "1"}.jpg')`;
            break;
        case 'weapons':
            backgroundUrl = `url('https://prd-game-a1-granbluefantasy.akamaized.net/assets_en/img/sp/assets/weapon/${button.parentElement.classList[0].includes("main") ? "ls" : "m"}/${id}.jpg')`;
            break;
        case 'summons':
            backgroundUrl = `url('https://prd-game-a1-granbluefantasy.akamaized.net/assets_en/img/sp/assets/summon/${button.parentElement.classList[0].includes("team") ? "m" : `party_${button.parentElement.classList[0].includes("main") ? "main" : "sub"}`}/${id}${summons[id].maxUncap == 6 ? "_04" : ""}.jpg')`;
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
|char1=${getTeamData("char1")}
|char2=${getTeamData("char2")}
|char3=${getTeamData("char3")}
|char4=${getTeamData("char4")}
|char5=${getTeamData("char5")}
|skill1=
|skill2=
|skill3=
|main=${getTeamData("s-main")}
|support=
}}
|weapons={{WeaponGridSkills
|mh=${getTeamData("mh")}
|wp1=${getTeamData("wp1")}
|wp2=${getTeamData("wp2")}
|wp3=${getTeamData("wp3")}
|wp4=${getTeamData("wp4")}
|wp5=${getTeamData("wp5")}
|wp6=${getTeamData("wp6")}
|wp7=${getTeamData("wp7")}
|wp8=${getTeamData("wp8")}
|wp9=${getTeamData("wp9")}${teamData.wp10 || teamData.wp11 || teamData.wp12 ? `
|wp10=${getTeamData("wp10")}
|wp11=${getTeamData("wp11")}
|wp12=${getTeamData("wp12")}` : ""}
|ultima=${teamData.ultima ? teamData.ultima.join(",") : ""}
|opus=${teamData.opus ? teamData.opus.join(",") : ""}
}}
|summons={{SummonGrid
|main=
|s1=${teamData.s1 ? teamData.s1 : ""}
|s2=${teamData.s2 ? teamData.s2 : ""}
|s3=${teamData.s3 ? teamData.s3 : ""}
|s4=${teamData.s4 ? teamData.s4 : ""}
|sub1=${teamData.sub1 ? teamData.sub1 : ""}
|sub2=${teamData.sub2 ? teamData.sub2 : ""}
|quick=
}}
}}`
}
function getTeamData(item) {
    return teamData[item] ? teamData[item] : "";
}