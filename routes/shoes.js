const express = require('express');
const router = express.Router();
const shoes = require('../controllers/shoes');
const wrapAsync = require ('../helpers/wrapAsync');
const { isLoggedIn,isAuthor,validateShoe} = require('../middleware');
const multer  = require('multer')
const {storage} = require('../cloudinary')
const upload = multer({ storage });

const Shoe = require('../models/shoe');

router.route('/')
.get(wrapAsync(shoes.index))
.post (isLoggedIn,  upload.array('image'), validateShoe,  wrapAsync(shoes.addNewProduct))


router.get('/new', isLoggedIn, shoes.new)

router.route('/:id')
.get(isLoggedIn, wrapAsync(shoes.showProducts))
.put(isLoggedIn, isAuthor, upload.array('image'), validateShoe, wrapAsync(shoes.editForm))
.delete(isLoggedIn, isAuthor, wrapAsync(shoes.delete))

 
router.get('/:id/edit', isLoggedIn, isAuthor, wrapAsync(shoes.edit))
 
 module.exports= router;