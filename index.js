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

// const Monster = require('./models/monster');


app.use("/monsters", require("./routes/monsterRoute"));


app.listen(port,()=> console.log("BatlleCruiser Operationnes Sir !!!"))
