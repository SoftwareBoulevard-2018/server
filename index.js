const express = require('express');

const app = express();

const cors = require('cors');
const emailRoutes = require('./services/email');
const userRoutes = require('./services/user');
const companyRoutes = require('./services/company');
const authenticationRoutes = require('./services/authentication');

const expressValidator = require('express-validator');
const { validationResult } = require('express-validator/check');

app.use(express.json());
app.use(cors());
app.use(expressValidator());

//TODO correct the middleware, the validation only function inside each file.
// Middleware to emulate the user request object;v

app.use((req, res, next) => {
console.log('Validation middleware 1');

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(406)
      .json({
        errors: errors.mapped(),
      });
  }
  
  console.log('Before next');
  
  next();

  console.log('Validation middleaware 2');
});

app.use((req, res, next) => {
  req.user = { id: 'test_user' };
  next();
});

app.get('/', (req, res) => {
  res.json({
    code: 200,
    app: 'Software Boulevard',
  });
});

app.use('/emails', emailRoutes);
app.use('/users', userRoutes);
app.use('/companies', companyRoutes);
app.use('/authentication', authenticationRoutes);

app.listen(3000);

console.log('Running on port 3000');
