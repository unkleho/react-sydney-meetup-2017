# React and GraphQL at the Powerhouse Museum

Slides for *React and GraphQL at the Powerhouse Museum* presentation at [React Sydney](https://www.meetup.com/React-Sydney/) meetup in July 2017.

As a Senior Digital Developer at the Powerhouse Museum ([Museum of Applied Arts and Sciences](https://maas.museum)), I was on the team that delivered a new collection website. We embraced loads of new tech and thought it would be cool to present it to the React Sydney meetup.

Check out the slides: [https://unkleho.github.io/react-sydney-meetup-2017/](https://unkleho.github.io/react-sydney-meetup-2017/)

## Tech
### API
The list below shows most of the tech that went into building the API. You can check it out at [https://api.maas.museum](https://api.maas.museum).

* [GraphQL](http://graphql.org)
* [Elasticsearch](https://www.elastic.co/products/elasticsearch)
* [NodeJS](https://nodejs.org/en/)
* [AWS](https://aws.amazon.com)
* [Docker](https://www.docker.com/)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [Express GraphQL](https://github.com/graphql/express-graphql)
* [Mongoose](http://mongoosejs.com/)
* [Keystone JS](http://keystonejs.com/)
* [GraphQL Compose](https://github.com/nodkz/graphql-compose)
* [PM2](https://github.com/Unitech/pm2)

### Collection Website
This is a Universal (isomorphic) React application that runs off [https://api.maas.museum](https://api.maas.museum).

* [React](https://facebook.github.io/react/)
* [NodeJS](https://nodejs.org/en/)
* [AWS](https://aws.amazon.com)
* [Docker](https://www.docker.com/)
* [Express](https://expressjs.com/)
* [Apollo](http://dev.apollodata.com/react/)
* [Redux](http://redux.js.org/)
* [Searchkit](http://www.searchkit.co/)
* [React Router V3](https://github.com/ReactTraining/react-router/tree/v3)
* [Photoswipe](https://github.com/minhtranite/react-photoswipe)
* [React Google Analytics Module](https://github.com/react-ga/react-ga)
* [React Helmet](https://github.com/nfl/react-helmet)
* [Webpack](https://webpack.js.org/)
* [PostCSS](https://github.com/postcss/postcss)
* [Lost Grid](https://github.com/peterramsing/lost)
* [PM2](https://github.com/Unitech/pm2)

## Getting Started

If you are interested in using this presentation for something else, just clone and run `npm install`.

Next, run `rm -R .git` to remove the existing version control.

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`

## This Presentation

Made with React using [Spectacle](https://github.com/FormidableLabs/spectacle).
