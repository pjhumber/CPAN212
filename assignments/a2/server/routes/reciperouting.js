const express = require('express')
const router = express.Router()
const recipe = require('../models/recipe')

router.get('/', async (req, res) => {
  const data = await recipe.find()
  res.json(data)
})

router.post('/', async (req, res) => {
  const new_recipe = new recipe(req.body)
  const saved = await new_recipe.save()
  res.json(saved)
})

router.get('/:id', async (req, res) => {
  const data = await recipe.findById(req.params.id)
  res.json(data)
})

router.put('/:id', async (req, res) => {
  const updated = await recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updated)
})

router.delete('/:id', async (req, res) => {
  await recipe.findByIdAndDelete(req.params.id)
  res.json({ deleted: true })
})

module.exports = router
