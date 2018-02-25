const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    attributes: ['id', 'email', 'admin']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(users => res.json(users))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  User.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(next)
})
