const express = require('express');
const cors = require('cors');

const authRountes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/auth', authRountes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
