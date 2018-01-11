![cf](http://i.imgur.com/7v5ASc8.png) Lab 28 To do list 
====

* Simple TODO react page where you can add `*title*` and `*content*` of you TODO list as well as feature to `*remove*` note. Purpose of this lab is building more react components as well as adding front end routing and REACT testing. App component as parent and children (Dashboard, NoteForm, NoteList and NoteItem)

## Code Style
* Javascript ES6, JSX


## Tech / framework used

* [npm package uuid](https://www.npmjs.com/package/uuid) - used to add unique ID
* [npm package enzyme](https://www.npmjs.com/package/enzyme) - used for testing React app
* Webpack
* React
* Babel
* sass

## Installation and How To Use

  * Fork || clone this repo to you computer

  * Run `npm install`

  * To run webpack watch command type `npm run watch`. After build has been completed - webpack-dev-server will show provide URL where your project is hosted. Copy that address to your browser to view app features. Navigate to dashboard page and add title and content of your to do tasks. Once you click on create note, new task note will appear on the screen. If you wish to remove note, click on remove note. If you navigate off /dashboard your notes will not be saved
  
  * To run tests type `npm test` in your terminal 

## Features

### App Component
* contains `home` and `dashboard` routes that are connected to landing/dashboard components

### Landing Component
* contains brief description of our app

### Dashboard Component
* contains all notes that are created listed in an array. Every note has unique `id` as well as following props: `editing`, `completed`, `content`, `title`

### NodeForm Component
* contains form with input and textarea field for our TODO notes as well as `create note` button

### NodeList Component
* contains list of Note items

### NodeItem Component
* contains note's `title` and `content` as well as `remove note` button

### Test
* Test Dashboard
  * Test the initial state
* Test NoteForm
  * Test the initial state

### Licence
MIT © Pedja Josifovic401 JS 