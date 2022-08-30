import express, { response } from "express"

const app =express()

app.use(express.json())
//esto hace que express entienda el formato de nuestra información en .json

const people = []

//metodo get
app.get("/", (request, response) => {
    response.json({
        ok: true,
        data: people,
    })
})

//metodo post
app.post("/create", function(req, res) {
    const data = req.body
    data.id = people.length + 1
    people.push(data)

    return res.status(201).json({
        ok: true,
        data: "Persona creada"
    })
})

//metodo put
app.put("/:id", function(req, res) {
    const data = req.body
    people.push(data)

    return res.status(201).json({
        ok: true,
        data: "Persona actualizada"
    })
})

//metodo delete 
app.delete("delete/:id", (req,res)=>{
    const data = req.params.id;
    const index = people.findIndex((perDelete => perDelete.id==data));
    people.splice(index,1);

    return res.json({
        ok:true,
        data: "Persona eliminada"
    })
})


app.listen(6004, () => 
console.log(`El servidor inicio en http://localhost:6004`)
)




