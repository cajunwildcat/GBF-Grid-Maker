function NewSortableSwapContainer(container, draggable, group, extraOptions = {}) {
    return new Sortable(container, {
        swap: true,
        animation: 150,
        ghostClass: "sortable-ghost",
        draggable: draggable,
        group: group,
        ...extraOptions,
        onMove: (e) => {
            // Disable swapping for weapon grid-inputs that are not filled
            // This is necessary to avoid a bug where the Wikitext duplicates a weapon if moved to an empty grid slot
            // Summons and Characters have their data attached to the swapped element but weapons have their data attached to a child element because skill icons are siblings instead of children
            const target = e.related.classList.contains("w") ? e.related.firstElementChild : e.related;
            if (!target.dataset.itemId) return false;
            return true
        },
        onEnd: swapItems
    });
}

function swapItems(e) {
    const draggedElement = e.item.classList.contains("w") ? e.item.firstElementChild : e.item;
    const swappedElement = e.swapItem.classList.contains("w") ? e.swapItem.firstElementChild : e.swapItem;
    const draggedID = draggedElement.id;
    const swappedID = swappedElement.id;

    if (draggedID == swappedID) return;

    // Handle quick summon button when swapping summons
    if (draggedElement.dataset.options === "summons") {
        const draggedQuickSummon = draggedElement.querySelector(".quick-summon-toggle");
        if (draggedQuickSummon.dataset.toggled == "true") draggedQuickSummon.click();
    }

    // Swap IDs
    draggedElement.id = swappedID;
    swappedElement.id = draggedID;

    if (teamData[draggedID]) {
        const oldData = { ...teamData }
        Object.keys(oldData).filter(key => key.match(new RegExp(`${draggedID}(\\D|\$)`))).forEach(key => {
            let newKey = key.replace(draggedID, swappedID);
            // Swap the dragged character's data with the swapped character's data
            if (!oldData[newKey]) delete teamData[key];
            teamData[newKey] = oldData[key];
        });
        Object.keys(oldData).filter(key => key.match(new RegExp(`${swappedID}(\\D|\$)`))).forEach(key => {
            let newKey = key.replace(swappedID, draggedID);
            // Swap the dragged character's data with the swapped character's data
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
