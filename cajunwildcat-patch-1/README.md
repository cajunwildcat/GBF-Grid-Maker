# Repo Structure
## main branch
the latest stable build of the app. no manual pushes of anything other the README should be made to this branch as of 07-05-2025. all changes to this branch should come from merges of other branches, predominantly `beta`

## beta branch
the predominant test build branch. all manual pushes should be made to this branch or another working branch before being pushed to main.

## gh-pages
the branch that hosts the github pages directory format for the app. no manual pushes should be made to this branch; all changes to the branch are done via a github action. the github action works as thus:
 1. fetches the content of every branch of the repo
 2. the contents of the main branch are stored at the root level and any other branch (except `gh-pages`) is stored in a sub-directory named the same as the branch.

once the action is done it updates the branch after which the automatic github action for building and deploying the pages run. after which, the main branch can be used at https://cajunwildcat.github.io/GBF-Grid-Maker/ while any other branch's current version can be used by appending the branch name to the URL (eg. https://cajunwildcat.github.io/GBF-Grid-Maker/beta will be the current version of the beta branch)

# TODO:
## High Priority:
- Add aliases in `aliases.json` that gets loaded instead of alias object
    - every farmable raid weapon
        - \<raid name or "series" name\> \<weapon type\>
            - Abu Simbel as Ra Fist
            - Tiamat Bolt Credo as M3 Gun
    - character nicknames that are not a part of their name already
        - Zodiacs as their animal
            - Vicky as Rat/Mouse, Khumbhir as Boar/Pig
        - Estariolla as Sleepy, Charlotta as Box

## Medium Priority
- Search Weights
    - similar to aliases used in metatags, an optional weight value for items to be used when sorting optionsets, higher values are placed higher when *searching* (should not affect anything when there is no search input), default to 0 for items with no specific weight
        - high weights: primal, magna, providence summons; dark opuses
        - negative weights: demi-primal summons

- Redesign filters
    - save filter options to local storage
    - move to pull out drawer absolutely positioned at the bottom of the screen
        - could be moved somewhere else



- Grid stat calc
