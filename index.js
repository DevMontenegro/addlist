const express = require('express');
const path = require('path');
const Lista = require('./src/models/Lista');
const sequelize = require('./src/config/database');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

sequelize.sync({ force: false }).then(() => {

});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const listagem = await Lista.findAll();
  res.render('index', { listagem });
});

app.post('/add', async (req, res) => {
  const { descricao } = req.body;
  console.log(descricao);

  const tarefa = await Lista.create({ descricao });
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
