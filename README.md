# Boxen

A simple inventory application for keeping track of what's in boxes.

## Requirements/Dependencies/Tech Used

* [Rails 5](http://rubyonrails.org/)
* [Puma web server](http://puma.io/)
* [PostgreSQL database](https://www.postgresql.org/download/macosx/)
* [WebPack](https://webpack.js.org/) via [Webpacker](https://github.com/rails/webpacker)
* [React](https://reactjs.org/), [React Redux](https://github.com/reactjs/react-redux), and [React Router](https://reacttraining.com/react-router/)

## Installation

Be sure that you have Ruby 2.4.2 and PostgreSQL installed on your machine before beginning. I recommend using [`rbenv`](https://github.com/rbenv/rbenv) or [RVM](https://rvm.io/) for Ruby version management.

### Install Ruby dependencies

Gems are managed by Bundler; to install the gems used by this application simply run:

```sh
bundle install
```

### Install JavaScript dependencies

Additional JavaScript dependencies will need to be manually installed using [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/):

```sh
yarn
```

OR

```sh
npm install
```

### Create your databases

Create your local development and testing databases:

```sh
rake db:setup
```

### Running the Web Server

Boxen uses the [Puma](https://github.com/puma/puma) Rails server. To start a local server run:

```sh
rails s
```

You will now be able to access Boxen at `localhost:3000`
