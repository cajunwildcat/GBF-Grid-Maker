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
- Refactor to change `teamData` to store item IDs instead of EN names

- Pull mino, shield data from wiki
 - Skills should default to hardcoded icons and fallback to wiki icons
  - Need to parse wiki icons to just ID
 - Classes should be auto-filtered to row IV/V, EX II, and origin
 - Shorthand names for class equipment will have to be hard coded, but full name fallbacks should work automatically

- Add aliases to `aliases.js` and `weights.js`
    - aliases should only be names that are not already part of the name
        - e.g. "Colo" is not an acceptable alias for "Colossus Omega" since it is already part of the name

- Enforce single weapon series restriction

## Medium Priority
- Grid stat calc
 - Pull weapon skill data from wiki to match weapon uncap with proper skills (opus s1)
 - Add calc support for selectable weapon skills
 - Add UI for showing per character stats
 - Re-calc weapon skills and summon auras when changing uncap

## Low Priority
- Summon uncap selection under image like wiki
- Redesign filters
    - Save filter options to local storage