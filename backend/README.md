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
