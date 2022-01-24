const { response } = require('express');
const express = require('express');

const {uuid} = require('uuidv4');

const app = express();

app.use(express.json());


//minha baseurl = localhost:3333/projects

/**
 * Tipos de parametros;
 * 
 * query params: filtros e paginação
 * route params: identificr recursos ( atualizar e deletar )
 * request body: conteudo na hora de criar ou editar um recuso (JSON)
 */






//array com informações
/* const projects = {
  id,
  title,
  ownder,
} */

const projects =[];


app.get('/projects', (request,response) =>{
  //query params, no navegador seria ?title=react&owner=diego
/*   const {title, owner} = request.query; //coletando infos na desestruturacao do json
  console.log(title);
  console.log(owner); */

  const {title} = request.query;

  const results = title
  ? projects.filter(project=> project.title.includes(title)) // se tiver algum filtro query, busca no array com o nome title
  : projects//se tiver vazio return all

  return response.json(results);
});

app.post('/projects',(request,response) =>{
  const {title,owner} = request.body;
  
  const project = {id: uuid(), title,owner};

  projects.push(project); //adiciona no vetor


  return response.json(project);
});

app.put('/projects/:id',(request,response)=>{
  const { id } = request.params;
  const {title,owner} = request.body;
 
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0){
    return response.status(400).json({error: "project nou found"});
    
  }

  const project = {
    id,
    title,
    owner,
  }

  projects[projectIndex] = project;  

  return response.json(project);

});

app.delete('/projects/:id',(request,response)=>{
  
  const {id} = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0){
    return response.status(400).json({error: "project nou found"});
    
  }

  projects.splice(projectIndex,1);

  
  
  return response.status(204).json();
});




app.listen(3333,()=>{
  console.log("👌👌👌👌👌👌node startted👌👌👌👌👌👌👌");
});