const express = require('express')
const {PrismaClient} = require('@prisma/client')
const { application, json } = require('express')
const { restart } = require('nodemon')
const prisma = new PrismaClient()
const app = express() 

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('Esto es una prueba...')
})

//CREAR UN REGISTRO
//personaje
app.post('/personajes', async(req, res)=>{
    const {id, img, nombre, edad, peso, historia , pelicula_ser} = req.body
    const result = await prisma.personaje.create({
        data: {
            id,img,nombre,edad,peso,historia,pelicula_ser   
        }
    })
    res.json(result)
})

//pelicula
app.post('/peliculas', async(req, res)=>{
    const {id, titulo, fecha_creac, calificacion, persona_asoc} = req.body
    const result = await prisma.pelicula.create({
        data: {
            id,titulo,fecha_creac,calificacion,persona_asoc
        }
    })
    res.json(result)
})

//genero
app.post('/generos', async(req, res)=>{
    const {id, nombre, img, peli_asoc} = req.body
    const result = await prisma.genero.create({
        data: {
            id,nombre,img,peli_asoc
        }
    })
    res.json(result)
})

//MOSTRAR LOS REGISTROS
//personaje
app.get('/personajes', async(req, res)=>{
    const personaje = await prisma.personaje.findMany()
    res.json(personaje)
})

//pelicula
app.get('/peliculas', async(req, res)=>{
    const pelicula = await prisma.pelicula.findMany()
    res.json(pelicula)
})

//genero
app.get('/generos', async(req, res)=>{
    const genero = await prisma.genero.findMany()
    res.json(genero)
})

//ACTUALIZAR UN REGISTRO

//personajes
app.put('/personaje/:id', async(req, res)=>{
    const {id} = req.params
    const {img, nombre, edad, peso, historia , pelicula_ser} = req.body
    const personaje = await prisma.personaje.update({
        where:  {id: Number(id)},
        data:{ img, nombre, edad, peso, historia , pelicula_ser}
    })
    res.json(personaje)
})

//peliculas
app.put('/pelicula/:id', async(req, res)=>{
    const {id} = req.params
    const {titulo, fecha_creac, calificacion, persona_asoc} = req.body
    const pelicula = await prisma.pelicula.update({
        where: {id: Number(id)},
        data: {titulo,fecha_creac,calificacion,persona_asoc}
    })
    
    res.json(pelicula)
})

//generos
app.put('/genero/:id', async(req, res)=>{
    const {id} = req.params
    const {nombre, img, peli_asoc} = req.body
    const genero = await prisma.genero.update({
       where:  {id: Number(id)},
       data: {nombre, img, peli_asoc} 
    })
    res.json(genero)
})


//ELIMINAR UN REGISTRO

//personajes
app.delete('personajes/:id', async(req, res)=>{
    const {id} = req.params
    const personaje = await prisma.personaje.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

//peliculas
app.delete('peliculas/:id', async(req, res)=>{
    const {id} = req.params
    const pelicula = await prisma.pelicula.delete({
        where: {id: Number(id)}
    })
    res.json("Eliminado")
})

//genero
app.delete('generos/:id', async(req, res)=>{
    const {id} = req.params
    const genero = await prisma.genero.delete({
        where: {id: Number(id)}
    })
    res.json("Eliminado")
})


app.listen(3000, ()=>
    console.log(`Servidor corriendo en: http://localhost:3000`)
)