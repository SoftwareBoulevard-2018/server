# Back-end

This back-end application was made using node.js with the express and mongoose frameworks. It's exposed on the ip(:port): http://35.196.111.251:3000

If you want to run it locally you must download and install the current LTS (long term support) version of node.js from here https://nodejs.org/es/ this version includes npm.

In the root folder of the project /web/ you must run the following commands:

npm install

npm start

Now the app is running on your localhost:3000 and you can open it from your browser and interact with it using http requests.

### Folder - Files structure:

/models/ -> Here are located the models/scemas used for the database creation.

/services/ -> Here are located all the http services which are exposed for the front-end to use.

### Folder structure:

All folders use their index.js files at first and then redirect the actions depending on the URL of the http request reaching.

### Module 2 - "Game Management" models:

#### User.

#### Company.

### Module 2 - "Game Management" services:

#### Login:

Method: POST, URL: /login, FUNCTION: receives a body with username and password and returns if it's a registered user.

#### Users:

Method: GET, URL: /users, FUNCTION: returns a JSON with all the users registered.

Method: POST, URL: /users, FUNCTION: receives a body with data of a user and creates it on the database.

Method: GET, URL: users/:userId, FUNCTION: returns a JSON with the user with that id.

Method: PUT, URL: users/:userId, FUNCTION: receives a body with data of a user and updates the data of the user with the id on the URL.

Method: GET, URL: users/username/:username, FUNCTION: returns a JSON with the user with that username.

Method: POST, URL: users/username, FUNCTION: receives a body with a companyId and a role and returns all users with that role and that companyId.

Method: POST, URL: users/usersByRole, FUNCTION: receives a body with a role and returns all users with that role.

Method: GET, URL:users/company/:companyId, FUNCTION: returns a list of the users affiliated to the company with that companyId.

#### Companies

router.get('/', getCompanies);
router.post('/', createCompany);
router.put('/:companyId', updateCompany);
router.get('/:companyId', getCompanyById);
router.use('/image', uploadImage);
