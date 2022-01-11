const item = require('../model/item')

const addItem = ((req, res) => {
  const newItem = new item(req.body)
  newItem.save()
  .then(d => res.send(d))
  .catch(e => res.send(e))
})

const getAll = ((req, res) => {
  item.find({})
  .then(d => { res.status(200).send(d) })
  .catch(e => console.log(e))

})

const getByCategoryId = ((req, res) => {
  item.find({ categoryId: req.params.id })
    .then(d => res.send(d))
    .catch(e => res.send(e))
})
module.exports = { addItem, getAll, getByCategoryId }