import express from 'express'; //Tem que adicionar o json no express
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.use(express.json());

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email:   req.body.email,
            name:    req.body.name,
            sex:    req.body.sex,
            age:    req.body.age  
        }
    });

    res.status(201).json(req.body);

});

app.get('/usuarios', async (request, response) => {

    console.log(request)
    let users = [];

    if (request.query) {
        users = await prisma.user.findMany({
            where: {
                name: request.query.name,
                email: request.query.email,
                age: request.query.age,
                sex: request.query.sex
            }
        })
    } else {
        users = await prisma.user.findMany();
    }

    response.status(200).json(users);
    
});

app.put('/usuarios/:id', async (req, res) => { //O ":id" é uma variavel que recebera o id do usuario para atualizar

    console.log(req);

    await prisma.user.update({
         where: {
             id: req.params.id
         },
         data: {
             email:   req.body.email,
             name:    req.body.name,
             sex:    req.body.sex,
             age:    req.body.age  
         }
     });

     res.status(201).json(req.body);

});

 app.delete('/usuarios/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        },
    })

    res.status(200).json({message: "Usuario deletado com sucesso!"});

 });

/*  Precisa do tipo de rota / metodo HTTP 
    Endereço
    */
   app.listen(3000);

/*Criar nossa API  de usuarios
-Criar um usuario    
-listar todos os usuarios
-Editar um usuario
-Deletar um usuario*/

/*Tipo de rota / metodo HTTP 
  Endereço
  
  alefranio07
  Alef2001
  */
