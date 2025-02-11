const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', userRoutes);

db.sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
