const monsterRouter = require("express").Router();

const Monster = require("../models/monster");

monsterRouter.get("/", (req, res) => {
  Monster.find({}, (err, monsters) => {
    if (err) {
      console.log(err);
    } else {
      res.send(monsters);
    }
  });
});

monsterRouter.post("/add", (req, res) => {
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

module.exports = monsterRouter;
