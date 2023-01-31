const { mongoose, Schema } = require("mongoose");

const monsterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Monster = mongoose.model("Monster", monsterSchema);
module.exports = Monster;
