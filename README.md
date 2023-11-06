# Test task courses

Test task project. Main goal is to create a web application for a mini-course consisting of 2-3 lessons. The course should include a feature for tracking the speed of attempts at completion, with results saved in LocalStorage.

## Technologies Used

- Vue.js 2
- Vuex
- Vue Router
- Webpack
- SCSS

## Features

- Data on course completion attempts are stored in the localStorage.
- Progress bar displays the number of completed lessons.
- Access to the course is granted after filling out the form.

## How to run

Project uses Webpack 5, to run, simply do this in the repository root: `npm install` and `npm run start`. This will run webpack-dev-server, json-server for fake API. 

## Other tasks

```bash

# Install dependencies
npm install

# Start json-server & webpack-dev-server.
npm run start

# build for production with minification
npm run build

# Lint js and vue files using ESLint
npm run lint

# Format with Prettier
npm run format
```

## How to configure?

You can set up the URL to run the local server for webpack and json-server. 
To do this, in the `webpack.config.js` file, find and change the values for the variables `LOCAL_API_URL` and `PROD_API_URL`. 
It's also very easy to add new courses. To do this, simply open the `db.json` file and edit its content.
