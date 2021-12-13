const User = require('../models/user');


module.exports.renderRegister=(req, res)=>{
    res.render('auth/register');
}

module.exports.newRegister= async(req, res,next)=>{
    try {
const {email, username, password} = req.body;
   const user =  new User ({email, username});
   const registeredUser = await User.register(user, password);
req.login(registeredUser,err=>{
    if(err) return next(err);
    req.flash ('success', ` Welcome, ${username} `);
    res.redirect('/products')

})
    
} catch (e) {
    req.flash('error', 'User already exists!');
    res.redirect('/register')
}
   
}


module.exports.renderlogin=(req, res)=>{
    res.render('auth/login');
    }

    module.exports.loggingIn=(req, res) => {
        const {username, password} = req.body;
    
    req.flash('success', 'Welcome Back',`${username}!`);
    res.redirect('/products');
     
    }

  module.exports.logout =  (req, res)=>{
        req.logout();
    
        req.flash ('success', 'Goodbye');
    
        res.redirect('/products')
    }