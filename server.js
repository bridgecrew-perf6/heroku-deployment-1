//

require("dotenv").config();
const express = require('express')
const app = express()

const {
   trace,
} = require('./helper');

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('martin wuz hear')
})

app.listen(PORT, () => {
   trace('server listening')(PORT);
})
