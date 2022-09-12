const express = require('express')
const router = express.Router()

const {
  requireSignin,
  isAdmin,
  isAuth,
} = require('../controllers/auth-controllers')
const { userById } = require('../controllers/user-controllers')

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  })
})

router.param('userId', userById)

module.exports = router
