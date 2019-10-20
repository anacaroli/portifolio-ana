const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (request, response) => {
  response.render('home');
});

app.get('/contato', (request, response) => {
  response.render('contato')
});

app.get('/learn', (request, response) => {
  response.render('learn')
});

app.get('/jobs', (request, response) => {
  response.render('jobs')
});

app.get('/projetos', (request, response) => {
  response.render('projetos')
});

app.listen(3000, (error) => {
  if(error) {
      console.log('Não foi possivel conectar no servidor');
  } else {
      console.log('app rodando');
  }
});