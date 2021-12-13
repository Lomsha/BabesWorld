const Shoe = require('../models/shoe');
const { cloudinary } = require('../cloudinary');

module.exports.index = async(req, res) => {
    const products =  await Shoe.find({});
    res.render('products/index', {products})
}

module.exports.new= (req, res) => {
     
    res.render('products/new');
}

module.exports.addNewProduct=async (req, res, next) => { 
    const product = new Shoe(req.body.product);
    product.images = req.files.map(f =>({url: f.path, filename:f.filename}) )

    product.author = req.user._id;
    await product.save();
    console.log(product);
    req.flash('success', 'Successfully added a new product!')
    res.redirect(`/products/${product._id}`)

}

module.exports.showProducts = async(req, res) => {
    const products = await Shoe.findById(req.params.id).populate({
      path:'reviews',
      populate:{
        path:'author'
      }
     }).populate('author'); 

    console.log(products);
    if(!products){
   req.flash('error', 'The item  is no longer available');
 return  res.redirect('/products');
}
    res.render('products/show',{ products });
    
 }


module.exports.edit=async (req, res) => {
    const {id} = req.params;
    const products = await Shoe.findById(id)
    if (!products) {
        req.flash('error', 'We cannot find that Product!')
        return res.redirect('/products/')
     }
    

     res.render('products/edit', { products });
 }


 module.exports.editForm= async(req, res) => {
    const {id} = req.params;
    console.log (req.body);
   const product=await Shoe.findByIdAndUpdate (id,{...req.body.product});
   const imgs = req.files.map(f =>({url: f.path, filename:f.filename}))
   product.images.push (...imgs);
await product.save()
  if (req.body.deleteImages) {
      for (let filename of req.body.deleteImages){
         await  cloudinary.uploader.destroy(filename)
      }
    await product.updateOne({$pull: {images: {filename: {$in: req.body.deleteImages } } } } )
console.log(product)
  }

req.flash('success', 'Successfully updated product!')
   res.redirect (`/products/${product._id}`) 
 }


 module.exports.delete=async (req, res) => {
    const { id } = req.params;
    await Shoe.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted product!')
   
    res.redirect('/products');
    
    }