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

monsterRouter.route("/:id")
.get((req,res) => {
  Monster.findById(req.params.id, (err, monster) => {
    if (err) {
      console.log(err);
    } else {
      res.send(monster);
    }
  })
})
.put((req,res) => {
  Monster.findByIdAndUpdate(req.params.id, req.body, (err, monster) => {
    if (err) {
      console.log(err);
    } else {
      res.send(monster);
    }
  })
})

.delete((req,res) => {
  Monster.findByIdAndRemove(req.params.id, (err, monster) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Done :)');
    }
  })
})

module.exports = monsterRouter;
