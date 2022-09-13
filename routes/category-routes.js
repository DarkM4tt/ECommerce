const express = require('express')
const router = express.Router()

const { userById } = require('../controllers/user-controllers')
const {
  requireSignin,
  isAdmin,
  isAuth,
} = require('../controllers/auth-controllers')
const { create } = require('../controllers/category-controllers')

router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create)

router.param('userId', userById)

module.exports = router
