const express= require("express");
const app= express();
const port = process.env.PORT || 4000;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
})
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/monsters');
  
}
const monsters=[
    { id: 1, name:"Albert", level: 5, description: "La vipere"},
    { id: 2, name:"Pilou", level: 3, description: "Le Loup garou"}, 
    { id: 3, name:"Mounir", level:2, description: "La vampire"},
];

app.get('/', (req,res) => {
    res.send(monsters)
})

app.post('/add', (req,res) => {
monsters.push({
    id:monsters[monster.length-1].id+1,
    name: req.query.name,
    level: parseInt(req.query.level),
    description: req.query.description,
});
console.log(req.body);
res.send("OK");
});

app.get("/:id", (req,res) => {
//     const id = req.params.id;
// res.send(`${monsters[id-1].name} ${monsters[id-1].level} ${monsters[id-1].description}`); //puede ser esta o la de abajo.
res.send(`MON MONSTER ${monsters[req.params.id-1].name} ${monsters[req.params.id-1].level} ${monsters[req.params.id-1].description}`)

});
app.listen(port,()=> console.log("BatlleCruiser Operationnes Sir !!!"))
