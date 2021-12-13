const express = require('express');
const router = express.Router();
const passport =require('passport');
const wrapAsync =require('../helpers/wrapAsync');
const User = require('../models/user');

const auth = require ('../controllers/auth')

router.route('/register')
.get(auth.renderRegister)
.post(wrapAsync(auth.newRegister))

router.route('/login')
.get(auth.renderlogin)
.post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'}),auth.loggingIn)


router.get('/logout', auth.logout)



module.exports = router;

