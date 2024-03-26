const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

require("./routes/index")(app);

app.listen(3000, ()=> {
    console.log("Servidor rodando em: http://localhost:3000")
})