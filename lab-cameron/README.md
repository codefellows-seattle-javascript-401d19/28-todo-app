# Todo App

A simple todo application written in React

# Tech Used

- React
- ReactDOM
- React Router
- SASS
- webpack
- babel
- jest
- enzyme

# Features

`main.js` serves as the mounting point for the entire application. It creates
a `div` on the webpage `document.body` and renders `App`,  which is the
top level component.

`App` is where all routing for the app occurs. There are two routes. The
`/` route leads to the `LandingPage` component which simply renders informational
text about what the app is, while `/dashboard` holds application state.

The app makes use of container / presentation pattern in React development.
The `Dashboard` component holds application state, which in this case is an
array of notes to be rendered onscreen. It has two presentational components,
`NoteForm` and `NoteList`.

`NoteForm` holds localized state for currently edited notes. `NoteList` simply
redners the notes held in `Dashboard`'s state.

# Installation

- clone the repo
- run `npm install`
- open app on `localhost:PORTNAME`

# Tests

All tests done with jest and enzyme

# Credits

Cameron Moorehead

# License

GPL-3.0
