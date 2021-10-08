# HOT TAKES

## Front-end

### Installation

Here are the dependancies you need to install:

- NodeJS 12.14 or 14.0.
- Angular CLI 7.0.2.
- node-sass : make sure to use the corresponding version to NodeJS. For Noe 14.0 for instance, you need node-sass in version 4.14+.

On Windows, these installations require to use PowerShell in administrator mode.

The, clone this repo and run `npm install`.

### Usage

Run `npm start`. This should both run the local server and launch your browser.

If your browser fails to launch, or shows a 404 error, navigate your browser to http://localhost:8080.

The app should reload automatically when you make a change to a file.

Use `Ctrl+C` in the terminal to stop the local server.

#

## Back-end

### Go to the backend folder :

    $ cd backend

### Install the missing packages :

    $ npm install -g nodemon

    $ npm install

- Installing nodemon will prevent us from having to restart the server each time the code changes. #

- Then, install with `$ npm install` the `package.json` file will be read and allow the installation of all the libraries that the project needs.

### Start the server :

    $ nodemon server.js

The server starts up and you can test the application locally

#### Note :

If necessary, at any time you can during the execution of `nodemon` enter `rs` that will have the effect of restarting the server in order to take into account the important modifications on this application.

### Package version :

- express: ^4.17.1
- bcrypt: ^5.0.1
- body-parser: ^1.19.0
- fs: ^0.0.1-security
- jsonwebtoken: ^8.5.1
- mongoose: ^6.0.4
- mongoose-unique-validator: ^2.0.3
- multer: ^1.4.3
