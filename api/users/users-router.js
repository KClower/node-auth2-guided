const router = require("express").Router()

const User = require("./users-model.js")





router.get("/", (req, res, next) => {
  User.find()
    .then(users => {
      res.status(200).json({ data: users, jwt: req.jwt })
    })
    .catch(next) // our custom err handling middleware in server.js will trap this
})

module.exports = router
