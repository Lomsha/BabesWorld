const Shoe = require('../models/shoe');
const Review = require('../models/review');


module.exports.addReview=async (req, res)=> {
    const product= await Shoe.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    product.reviews.push(review)
    await review.save();
    await product.save();
    req.flash('success', 'Review submitted successfully!');

    res.redirect(`/products/${product._id}`)
    }

    module.exports.deleteReview= async (req, res)=>{
        
        
        const {id, reviewId} = req.params;
    
        await Shoe.findByIdAndUpdate(id,{$pull: {reviews: reviewId} } );
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Review  successfully deleted!');

        res.redirect(`/products/${id}`);
    }