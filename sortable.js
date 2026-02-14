function NewSortableSwapContainer(container, draggable, group, extraOptions = {}) {
    return new Sortable(container, {
        swap: true,
        animation: 150,
        ghostClass: "sortable-ghost",
        draggable: draggable,
        group: group,
        ...extraOptions,
        onMove: (e) => true,
        onEnd: swapItems
    });
}

function swapItems(e) {
    const draggedElement = e.item.classList.contains("w") ? e.item.firstElementChild : e.item;
    const swappedElement = e.swapItem.classList.contains("w") ? e.swapItem.firstElementChild : e.swapItem;
    const draggedID = draggedElement.id;
    const swappedID = swappedElement.id;

    if (draggedID == swappedID) return;

    if (draggedElement.dataset.options === "summons") {
        // Handle swaps with quick summon
        if ((teamData.quickSummon == draggedElement.id.slice(-1) || teamData.quickSummon == swappedElement.id.slice(-1)) && (draggedElement.parentElement.classList[0] == "sub-summons" || swappedElement.parentElement.classList[0] == "sub-summons")) document.querySelector(".quick-summon-toggle[data-toggled='true']")?.click();
        //TODO: will need to be updated if swapping main summon is added
        else if (teamData.quickSummon == draggedElement.id.slice(-1)) teamData.quickSummon = swappedID.slice(-1);
        else if (teamData.quickSummon == swappedElement.id.slice(-1)) teamData.quickSummon = draggedID.slice(-1);

        // Swap callable and sub summon image type
        if (draggedElement.parentElement.classList[0] == "sub-summons" && swappedElement.parentElement.classList[0] == "callable-summons") {
            swappedElement.style.backgroundImage = swappedElement.style.backgroundImage.replace("/m/", "/party_sub/");
            draggedElement.style.backgroundImage = draggedElement.style.backgroundImage.replace("/party_sub/", "/m/");
        }
        else if (draggedElement.parentElement.classList[0] == "callable-summons" && swappedElement.parentElement.classList[0] == "sub-summons") {
            swappedElement.style.backgroundImage = swappedElement.style.backgroundImage.replace("/party_sub/", "/m/");
            draggedElement.style.backgroundImage = draggedElement.style.backgroundImage.replace("/m/", "/party_sub/");
        }
    }

    // Handle swapping character image type for unlimited backline
    if (unlimited && draggedElement.dataset.options === "characters") {
        // Dragged is sub, swapped is main
        if (draggedElement.parentElement.classList[1] == "sub-members" && swappedElement.parentElement.classList[1] == "main-members") {
            swappedElement.style.backgroundImage = swappedElement.style.backgroundImage.replace("/s/", "/quest/");
            draggedElement.style.backgroundImage = draggedElement.style.backgroundImage.replace("/quest/", "/s/");
        }
        // Dragged is main, swapped is sub
        else if (draggedElement.parentElement.classList[1] == "main-members" && swappedElement.parentElement.classList[1] == "sub-members") {
            draggedElement.style.backgroundImage = draggedElement.style.backgroundImage.replace("/s/", "/quest/");
            swappedElement.style.backgroundImage = swappedElement.style.backgroundImage.replace("/quest/", "/s/");
        }
    }

    // Swap IDs
    draggedElement.id = swappedID;
    swappedElement.id = draggedID;
    // Swap tabindex
    let tempIndex = draggedElement.tabIndex;
    draggedElement.tabIndex = swappedElement.tabIndex;
    swappedElement.tabIndex = tempIndex;

    const oldData = { ...teamData }
    if (oldData[draggedID]) {
        Object.keys(oldData).filter(key => key.match(new RegExp(`${draggedID}(\\D|\$)`))).forEach(key => {
            let newKey = key.replace(draggedID, swappedID);
            if (!oldData[newKey]) delete teamData[key];
            teamData[newKey] = oldData[key];
        });
    }
    if (oldData[swappedID]) {
        Object.keys(oldData).filter(key => key.match(new RegExp(`${swappedID}(\\D|\$)`))).forEach(key => {
            let newKey = key.replace(swappedID, draggedID);
            if (!oldData[newKey]) delete teamData[key];
            teamData[newKey] = oldData[key];
        });
    }
}

function InitTeamContainer() {
    const teamList = document.querySelector(".team-members")
    const subMemberList = document.querySelector(".sub-members")

    NewSortableSwapContainer(teamList, ".grid-input:not(#mc)", "char");
    NewSortableSwapContainer(subMemberList, ".grid-input", "char");
}

function InitSummonsContainer() {
    const summonsList = document.querySelector(".callable-summons");
    const subSummonsList = document.querySelector(".sub-summons");

    NewSortableSwapContainer(summonsList, ".grid-input", "summons");
    NewSortableSwapContainer(subSummonsList, ".grid-input", "summons");
}

function InitWeaponsContainer() {
    const weaponsList = document.querySelector("#weapon-grid .w-grid-sub");
    const extraWeaponsList = document.querySelector("#weapon-grid-extra .w-grid-sub");

    NewSortableSwapContainer(weaponsList, ".w", "weapon", { handle: ".grid-input", });
    NewSortableSwapContainer(extraWeaponsList, ".w", "weapon", { handle: ".grid-input", });
}
