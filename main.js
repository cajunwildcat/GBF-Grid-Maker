let cOptions = [];
let wOptions = [];
let sOptions = [];
window.onload = async (e) => {
    const aliases = {
        "Catura": ["cow"],
        "Payila": ["dragon"],
        "Vikala": ["rat"]
    };

    let characters, summons;
    await fetch("https://raw.githubusercontent.com/cajunwildcat/GBF-Party-Parser/main/characters.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => characters = response);
    await fetch("https://raw.githubusercontent.com/cajunwildcat/GBF-Party-Parser/main/summons.json", { next: 43200 })
        .then(function (response) { return response.json(); })
        .then((response) => summons = response);

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
    setupButtonSearch();
};

function setupButtonSearch() {
    const dropdown = document.getElementById('dropdown');
    const searchInput = document.getElementById('searchInput');
    const optionsList = document.getElementById('optionsList');

    const optionSets = {
        character: cOptions,
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
        if (items.length === 0) return;

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
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => {
            const options = optionSets[button.dataset.options];
            if (dropdown.style.display === 'block' && activeButton === button) {
                hideDropdown();
            } else {
                showDropdown(event, options);
            }
        });
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && event.target.nodeName !== 'BUTTON') {
            hideDropdown();
        }
    });
}

function setButtonBackground(button, optionSet, selectedOption) {
    let backgroundUrl = '';
    switch (optionSet) {
        case 'character':
            backgroundUrl = `url('https://prd-game-a-granbluefantasy.akamaized.net/assets_en/img/sp/assets/npc/f/${selectedOption.metatags[0]}_01.jpg')`;
            break;
        case 'weapons':
            backgroundUrl = `url('/images/weapons/${selectedOption.metatags[0]}.png')`;
            break;
        case 'summons':
            backgroundUrl = `url('https://prd-game-a1-granbluefantasy.akamaized.net/assets_en/img/sp/assets/summon/m/${selectedOption.metatags[0]}.jpg')`;
            break;
        default:
            break;
    }
    button.style.backgroundImage = backgroundUrl;
}