const mongoose = require('mongoose')

const recipeschema = new mongoose.Schema({
  name: String,
  description: String,
  difficulty: String,
  ingredients: [String],
  steps: [String]
})

module.exports = mongoose.model('recipe', recipeschema)
