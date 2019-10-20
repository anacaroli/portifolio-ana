const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
// adicionando o sqlite na minha aplicação
const sqlite = require('sqlite');

// conectando na base de dados
const dbConnection = sqlite.open('banco.sqlite', {Promise});


app.get('/', async (request, response) => {
     const db = await dbConnection;
     //const categoriasDB = await db.all('select * from categorias');
     //const vagas = await db.all('select * from vagas');
     //const categorias = categoriasDB.map(cat => {
       //  return {
         //    ...cat,
           //  vagas: vagas.filter(vaga=> vaga.categoria === cat.id)
         //}
     });
     //console.log(categorias);
     //response.render('home', {
       //  categorias
     //});

/*app.get('/vaga/:id', async (request, response) => {
    console.log(request.params);
    const db = await dbConnection;
    //selecionando as vagas de acordo com id
    const vaga = await db.get('select * from vagas where id=' + request.params.id);
    console.log(vaga)
    response.render('vaga', {
        vaga
    })
});*/

app.get('/contato', (request, response) => {
    response.render('contato')
});
app.get('/learn', (request, response) => {
    response.render('learn')
});
app.get('/jobs', (request, response) => {
    response.render('jobs')
});
app.get('/admin', (request, response) => {
    response.render('admin')
});
app.get('/projetos', (request, response) => {
    response.render('projetos')
});

app.get('/admin', (req, res) =>{

    res.render('/admin/home');
})

app.listen(3000, (error) => {
    if(error) {
        console.log('Não foi possivel conectar no servidor');
    } else {
        console.log('app rodando');
    }
});

const init = async() => {
    const db = await dbConnection;
    await db.run('create table if not exists categorias (id INTEGER PRIMARY KEY, categoria TEXT);');
    // const categoria = 'Recursos Humanos';
    // await db.run(`insert into categorias(categoria) values ('${categoria}')`);
    await db.run('create table if not exists vagas (id INTEGER PRIMARY KEY, categoria INTEGER, titulo TEXT, descricao TEXT);');
    //const vaga = 'Analista de Qualidade \ QA ';
    //const descricao = 'Cucumber, TDD, BDD, CAPYBARA, ';
     //await db.run(`insert into vagas(categoria, titulo, descricao) values (1,'${vaga}', '${descricao}')`);
}

init();
