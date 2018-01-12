import React from 'react';
import './landing.scss';

class Landing extends React.Component {
  printReadme() {
    return readme;
  }

  render() {
    return (
      <div className='landing'>
        <p>
          {readme.match(/## Features([^#]+)/)[1]}
        </p>
      </div>
    );
  }
}

export default Landing;

let readme = `
# 28: Routing and Testing
Description: **Lab 28 of Code Fellows JavaScript 401d19** </br>
Author: **Matthew LeBlanc** </br>
Date: **01/10/18**

## Features
This lab features an app that allows a user to add and remove notes, by creating react components and manipulating state. Later adding an update feature to the notes by double clicking them. And Eventually Adding sass to style.

## Tech/Framework Used
- react
- node.js
- javascript
- Visual Studio Code

## Usage
1. \`cd\` into the lab-matt folder
2. \`npm install\` the required dependency packages
3. \`npm run build\` to run the babel/sass transpiler
4. \`npm run watch\` to run a local server that updates the changes from react

## Dependencies
1. babel-core
  - babel-loader
  - babel-plugin-transform-object-rest-spread
  - babel-preset-env
  - babel-preset-react
2. css-loader
3. faker
4. webpack
  - html-webpack-plugin
  - webpack-dev-server
5. node-sass
6. sass-loader
7. style-loader
7. resolve-url-loader
8. react
  - react-dom
  - react-router-dom
9. extract-text-webpack-plugin
10. uuid
**DEV**
1. enzyme
2. enzyme-adapter-react-16
3. eslint
  - "eslint-plugin-react": "^7.5.1",
4. jest
`;