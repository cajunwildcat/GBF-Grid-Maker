function importDataV1(data) {
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
        setGridData(key, value, { uncap: artToUncap(team[`art${i}`]), trans: team[`trans${i}`] ? `t${team[`trans${i}`]}` : null, awk: team[`awk${i}`] });
    }
    for (let i = 1; i <= 3; i++) {
        let key = `skill${i}`;
        if (!team[key]) continue;
        let value = team[key];
        setGridData(key, value);
    }
    //if (team.main) setGridData("s-main", team.main);
    if (team.support) setGridData("s-support", team.support);

    if (weapons.mh) setGridData("mh", weapons.mh, { uncap: weapons.umh, awk: weapons.awkmh, trans: weapons.umh });
    for (let i = 1; i <= 12; i++) {
        let key = `wp${i}`;
        if (!weapons[key]) continue;
        let value = weapons[key];
        setGridData(key, value, { uncap: weapons[`u${i}`], awk: weapons[`awk${i}`], trans: weapons[`u${i}`] });
    }
    if (weapons.opus) setGridData("opusSkill2", weapons.opus.split(",")[0]);
    if (weapons.opus) setGridData("opusSkill3", weapons.opus.split(",")[1]);
    if (weapons.ultima) setGridData("ultimaSkill1", weapons.ultima.split(",")[0]);
    if (weapons.ultima) setGridData("ultimaSkill2", weapons.ultima.split(",")[1]);
    if (weapons.ultima) setGridData("ultimaSkill3", weapons.ultima.split(",")[2]);
    if (weapons.draconic) setGridData("draconicSkill2", weapons.draconic.split(",")[0]);
    if (weapons.draconic) setGridData("draconicSkill3", weapons.draconic.split(",")[1]);
    if (weapons.destroyer) setGridData("destroyerSkill3", weapons.destroyer, true);
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
    if (summons["quick"]) document.querySelector(`.summon-grid div[id*="${summons["quick"]}"] .quick-summon-toggle`).click()

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