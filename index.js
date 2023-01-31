const express= require("express");
const app= express();
const port = process.env.PORT || 4000;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open', function() {
    console.log("Connected to MongoDB");
})
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/monsters');
  
}
app.use(express.urlencoded({ extended: true }));

const Monster = require('./models/monster');

// const monsters=[
//     { id: 1, name:"Albert", level: 5, description: "La vipere"},
//     { id: 2, name:"Pilou", level: 3, description: "Le Loup garou"}, 
//     { id: 3, name:"Mounir", level:2, description: "La vampire"},
// ];

app.get('/', (req,res) => {
    Monster.find({}, (err, monsters) => {
        if (err) {
            console.log(err);
        } else {
            res.send(monsters)
    }
}) 
})

app.post("/add", (req, res) => {
  let newMonster = new Monster(req.body);
  console.log(req.body);
  newMonster.save((error, monster) => {
    if (error) {
      console.log(error);
    } else {
      res.send(monster);
    }
  });
});

app.get("/:id", (req,res) => {
//     const id = req.params.id;
// res.send(`${monsters[id-1].name} ${monsters[id-1].level} ${monsters[id-1].description}`); //puede ser esta o la de abajo.
res.send(`MON MONSTER ${monsters[req.params.id-1].name} ${monsters[req.params.id-1].level} ${monsters[req.params.id-1].description}`)

});
app.listen(port,()=> console.log("BatlleCruiser Operationnes Sir !!!"))
