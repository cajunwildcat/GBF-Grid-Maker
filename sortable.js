function NewSortableSwapContainer(container, draggable, onMove, onEnd, extraOptions={}) {
    return new Sortable(container, {
        swap: true,
        animation: 150,
        ghostClass: "sortable-ghost",
        draggable: draggable,
        ...extraOptions,
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

    NewSortableSwapContainer(teamList, "button:not(.no-drag)", function(e){
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

    NewSortableSwapContainer(subMemberList, "button", function(e){
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

function InitSummonsContainer() {
    const summonsList = document.querySelector(".callable-summons");
    const subSummonsList = document.querySelector(".sub-summons");

    NewSortableSwapContainer(summonsList, "button", function(e) {
        // Disable swapping for summon grid-inputs that are not filled
        // This is necessary to avoid a bug where the Wikitext duplicates a summon if moved to an empty grid slot
        const target = e.related;

        if (!teamData[target.id]) {
            return false;
        }

        return true
    }, function(e) {
         if (e.oldIndex != e.newIndex) {
            const draggedElement = e.item
            const swappedElement = document.querySelector(`#s${e.newIndex + 1}`)

            const draggedID = draggedElement.id;
            const swappedID = swappedElement.id;

            // Swap IDs
            draggedElement.id = swappedID;
            swappedElement.id = draggedID;

            if (teamData[draggedID]) {
                const tempData = {...teamData}
                Object.keys(teamData).forEach(key => {
                    // Find all keys that start with dragged summon's ID (ex: s1)
                    if (key.startsWith(draggedID)) {
                    // Swap the dragged summon's data with the swapped summon's data
                        teamData[swappedID + key.substring(draggedID.length)] = tempData[key]
                    }

                    // Find all keys that start with swapped summon's ID (ex: s1)
                    if (key.startsWith(swappedID)) {
                        // Swap the swapped summon's data with the dragged summon's data
                        teamData[draggedID + key.substring(swappedID.length)] = tempData[key];
                    }
                })
            }
        }
    });

    NewSortableSwapContainer(subSummonsList, "button", function(e) {
        // Disable swapping for summon grid-inputs that are not filled
        // This is necessary to avoid a bug where the Wikitext duplicates a summon if moved to an empty grid slot
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
                swappedElement = document.querySelector("#s-sub1")
            }

            if (e.newIndex == 1) {
                swappedElement = document.querySelector("#s-sub2")
            }

            const draggedID = draggedElement.id;
            const swappedID = swappedElement.id;

            // Swap IDs
            draggedElement.id = swappedID;
            swappedElement.id = draggedID;

            if (teamData[draggedID]) {
                const tempData = {...teamData}
                Object.keys(teamData).forEach(key => {
                    // Find all keys that start with dragged summon's ID (ex: s1)
                    if (key.startsWith(draggedID)) {
                    // Swap the dragged summon's data with the swapped summon's data
                        teamData[swappedID + key.substring(draggedID.length)] = tempData[key]
                    }

                    // Find all keys that start with swapped summon's ID (ex: s1)
                    if (key.startsWith(swappedID)) {
                        // Swap the swapped summon's data with the dragged summon's data
                        teamData[draggedID + key.substring(swappedID.length)] = tempData[key];
                    }
                })
            }
        }
    });
}

function InitWeaponsContainer() {
    const weaponsList = document.querySelector("#weapon-grid .w-grid-sub");
    const extraWeaponsList = document.querySelector("#weapon-grid-extra .w-grid-sub");

    NewSortableSwapContainer(weaponsList, "div", function(e) {
        // Disable swapping for weapon grid-inputs that are not filled
        // This is necessary to avoid a bug where the Wikitext duplicates a weapon if moved to an empty grid slot
        const target = e.related;
        const trimmedID = target.id[target.id.length - 1]

        if (!teamData[`wp${trimmedID}`]) {
            return false;
        }

        return true
    }, function(e) {
        if (e.oldIndex != e.newIndex) {
            const draggedElement = e.item
            const swappedElement = document.querySelector(`#slot${e.newIndex + 1}`)

            const draggedID = draggedElement.id;
            const swappedID = swappedElement.id;
            const draggedButton = document.querySelector(`#${draggedID} button`);
            const swappedButton = document.querySelector(`#${swappedID} button`);

            // Swap container IDs
            draggedElement.id = swappedID;
            swappedElement.id = draggedID;

            // Swap button IDs
            draggedButton.id = `wp${swappedID[swappedID.length - 1]}`
            swappedButton.id = `wp${draggedID[draggedID.length - 1]}`

            if (teamData[draggedButton.id]) {
                const tempData = {...teamData}
                Object.keys(teamData).forEach(key => {
                    // Find all keys that start with dragged weapon's ID (ex: wp1)
                    if (key.startsWith(draggedButton.id)) {
                    // Swap the dragged weapon's data with the swapped weapon's data
                        teamData[swappedButton.id + key.substring(draggedButton.id.length)] = tempData[key]
                    }

                    // Find all keys that start with swapped weapon's ID (ex: wp1)
                    if (key.startsWith(swappedButton.id)) {
                        // Swap the swapped weapon's data with the dragged weapon's data
                        teamData[draggedButton.id + key.substring(swappedButton.id.length)] = tempData[key];
                    }
                })
            }
        }
    }, { handle: ".grid-input", });
    
    NewSortableSwapContainer(extraWeaponsList, "div", function(e) {
        // Disable swapping for weapon grid-inputs that are not filled
        // This is necessary to avoid a bug where the Wikitext duplicates a weapon if moved to an empty grid slot
        const target = e.related;
        const trimmedID = target.id.slice(-2) // Last two characters (10, 11, 12)

        if (!teamData[`wp${trimmedID}`]) {
            return false;
        }

        return true
    }, function(e) {
        if (e.oldIndex != e.newIndex) {
            const draggedElement = e.item
            let swappedElement

             if (e.newIndex == 0) {
                swappedElement = document.querySelector("#slot10")
            }

            if (e.newIndex == 1) {
                swappedElement = document.querySelector("#slot11")
            }

             if (e.newIndex == 2) {
                swappedElement = document.querySelector("#slot12")
            }

            const draggedID = draggedElement.id;
            const swappedID = swappedElement.id;
            const draggedButton = document.querySelector(`#${draggedID} button`);
            const swappedButton = document.querySelector(`#${swappedID} button`);

            // Swap container IDs
            draggedElement.id = swappedID;
            swappedElement.id = draggedID;

            // Swap button IDs
            draggedButton.id = `wp${swappedID.slice(-2)}`
            swappedButton.id = `wp${draggedID.slice(-2)}`

            if (teamData[draggedButton.id]) {
                const tempData = {...teamData}
                Object.keys(teamData).forEach(key => {
                    // Find all keys that start with dragged weapon's ID (ex: wp1)
                    if (key.startsWith(draggedButton.id)) {
                    // Swap the dragged weapon's data with the swapped weapon's data
                        teamData[swappedButton.id + key.substring(draggedButton.id.length)] = tempData[key]
                    }

                    // Find all keys that start with swapped weapon's ID (ex: wp1)
                    if (key.startsWith(swappedButton.id)) {
                        // Swap the swapped weapon's data with the dragged weapon's data
                        teamData[draggedButton.id + key.substring(swappedButton.id.length)] = tempData[key];
                    }
                })
            }
        }
    }, { handle: ".grid-input", });
}
