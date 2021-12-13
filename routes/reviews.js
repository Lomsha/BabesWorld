const express = require('express');
const router = express.Router({mergeParams:true});
const {validateReview,isLoggedIn,isReviewAuthor } = require ('../middleware')
const Shoe = require('../models/shoe');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');



const expressError = require('../helpers/expressError');

const wrapAsync = require ('../helpers/wrapAsync');






router.post('/',validateReview, isLoggedIn,  wrapAsync(reviews.addReview))
    
    
    router.delete('/:reviewId', isReviewAuthor, wrapAsync(reviews.deleteReview))

    module.exports = router;