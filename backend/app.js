const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/service', serviceRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
