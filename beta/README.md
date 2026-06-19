# Feature Requests & Bug Reports
You can either submit a feature request/bug report on [github](https://github.com/cajunwildcat/GBF-Grid-Maker/issues/new) or [tweet @ me](https://x.com/enshroudedfish). While feature requests are more than welcome, please understand that I'm under no obligation to implement them. In particular there are few design requirements the site is beholden to:
 1. All UI/visual features should fit in a 1340 x 925 space (or be minimally used popups/drawers). This is the width my browser window takes up when GBF is on the side of my monitor; nothing should require scrolling to access.
 2. Information displayed should be language agnostic when viewed from the result of "Generate Image". Whether you personally use English or Japanese, anyone should be able to understand every part of the information given regardless if they use the same language. MC skill names that share icons are largely distinguishable by "I", "II", "III" or MC class.
 3. The design should reflect in-game design or otherwise mirror it in a reasonable way.

There is also support for custom search input for any of the input fields ("rat" will search "Vikala"), requests to add new "aliases" will be accomodated as long as they are reasonable and do not conflict with existing official names. Aliases should also not be an existing part of the target name, e.g. "Colo" is not acceptable for "Colossus".

# Repo Structure
## main branch
the latest stable build of the app. no manual pushes of anything other the README should be made to this branch as of 07-05-2025. All changes to this branch should come from merges of other branches, predominantly `beta`

## beta branch
the predominant test build branch. all manual pushes should be made to this branch or another working branch before being pushed to main.

## gh-pages
the branch that hosts the github pages directory format for the app. no manual pushes should be made to this branch; all changes to the branch are done via a github action. the github action works as thus:
 1. fetches the content of every branch of the repo
 2. the contents of the main branch are stored at the root level and any other branch (except `gh-pages`) is stored in a sub-directory named the same as the branch.

once the action is done it updates the branch after which the automatic github action for building and deploying the pages run. after which, the main branch can be used at https://cajunwildcat.github.io/GBF-Grid-Maker/ while any other branch's current version can be used by appending the branch name to the URL (eg. https://cajunwildcat.github.io/GBF-Grid-Maker/beta will be the current version of the beta branch)

# TODO:
## High Priority:
- Add settings button
   - Dropdown to swap language
   - Checkbox to show wiki import/export controls
   - Links to bookmarklets, source repo, and twitter

- Add aliases to `aliases.js` and `weights.js`

- Enforce single weapon series restriction
  - Is it really necessarily? Kinda funny to make impossible grids

## Medium Priority
- Grid stat calc
  - Pull weapon skill data from wiki to match weapon uncap with proper skills (opus s1)
  - Add calc support for selectable weapon skills
  - Add UI for showing per character stats
  - Re-calc weapon skills and summon auras when changing uncap

## Low Priority
- Refactor to change `teamData` to store item IDs instead of EN names
  - Seemingly not needed? Maybe still a good idea regardless

- Redesign filters
  - Save filter options to local storage
