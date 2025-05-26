function NewSortableSwapContainer(container, draggable, group, onMove, onEnd) {
    return new Sortable(container, {
        swap: true,
        animation: 150,
        ghostClass: "sortable-ghost",
        draggable: draggable,
        group: group,
        onMove: (e) => {
            return onMove(e);
        },
        onEnd: (e) => {
           return onEnd(e);
        }
    });
}

function InitTeamContainer() {
    const teamList = document.querySelector(".team-members")
    const subMemberList = document.querySelector(".sub-members")

    NewSortableSwapContainer(teamList, "button:not(.no-drag)", "", function(e){
        // Disable swapping for character grid-inputs that are not filled
        // This is necessary to avoid a bug where the Wikitext duplicates a character if moved to an empty grid slot
        const target = e.related;

        if (!teamData[target.id]) {
            return false;
        }

        return true
    }, function(e) {
        if (e.oldIndex != e.newIndex) {
            const draggedElement = e.item
            const swappedElement = document.querySelector(`#char${e.newIndex}`)

            const draggedID = draggedElement.id;
            const swappedID = swappedElement.id;

            // Swap IDs
            draggedElement.id = swappedID;
            swappedElement.id = draggedID;

            if (teamData[draggedID]) {
                const tempData = {...teamData}
                Object.keys(teamData).forEach(key => {
                    // Find all keys that start with dragged character's ID (ex: char1)
                    if (key.startsWith(draggedID)) {
                    // Swap the dragged character's data with the swapped character's data
                        teamData[swappedID + key.substring(draggedID.length)] = tempData[key]
                    }

                    // Find all keys that start with swapped character's ID (ex: char1)
                    if (key.startsWith(swappedID)) {
                        // Swap the swapped character's data with the dragged character's data
                        teamData[draggedID + key.substring(swappedID.length)] = tempData[key];
                    }
                })
            }
        }
    });

    NewSortableSwapContainer(subMemberList, "button", "", function(e){
        // Disable swapping for character grid-inputs that are not filled
        // This is necessary to avoid a bug where the Wikitext duplicates a character if moved to an empty grid slot
        const target = e.related;

        if (!teamData[target.id]) {
            return false;
        }

        return true
    }, function(e) {
        if (e.oldIndex != e.newIndex) {
            const draggedElement = e.item
            let swappedElement
            
            if (e.newIndex == 0) {
                swappedElement = document.querySelector("#char4")
            }

            if (e.newIndex == 1) {
                swappedElement = document.querySelector("#char5")
            }

            const draggedID = draggedElement.id;
            const swappedID = swappedElement.id;

            // Swap IDs
            draggedElement.id = swappedID;
            swappedElement.id = draggedID;

            if (teamData[draggedID]) {
                const tempData = {...teamData}
                Object.keys(teamData).forEach(key => {
                    // Find all keys that start with dragged character's ID (ex: char1)
                    if (key.startsWith(draggedID)) {
                    // Swap the dragged character's data with the swapped character's data
                        teamData[swappedID + key.substring(draggedID.length)] = tempData[key]
                    }

                    // Find all keys that start with swapped character's ID (ex: char1)
                    if (key.startsWith(swappedID)) {
                        // Swap the swapped character's data with the dragged character's data
                        teamData[draggedID + key.substring(swappedID.length)] = tempData[key];
                    }
                })
            }
        }
    });
}
