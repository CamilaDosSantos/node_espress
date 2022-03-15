const express = require ('express')
const app = express()
const port = 3000 

app.use(express.json());

const projects = [];

app.get('/', ( request, reponse)=>{
    return reponse.jason({massage: "Tenha cuidado com as informações a seguir "})
});
app.listen(3333, ()=> {
    console.log("sai curioso");
});
app.post('/projet', (req, res) => {
    res.send()
  })
  app.listen(3333, ()=>  {

