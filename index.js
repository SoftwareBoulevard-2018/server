const express = require('express');

const app = express();

const emailRoutes = require('./services/email');

app.use(express.json());

// Middleware to emulate the user request object;
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

app.listen(3000);

console.log('Running on port 3000');
