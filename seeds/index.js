const mongoose = require('mongoose');
const Epignosis = require('../models/shoe');

mongoose.connect('mongodb://localhost:27017/epignosis', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

    // const products =
    // [
    
    
    // new Epignosis({
    //     author:'61af5e130486e01080c8e721',
    //     imagePath:'https://static.wixstatic.com/media/90e2b0_32e9119e835945ca88fe833471859293~mv2.jpg/v1/fill/w_807,h_454,al_c,q_85/90e2b0_32e9119e835945ca88fe833471859293~mv2.webp',
    //     title:'Beach sandals',
    //     description:'Rubber sandals, ',
    //     price:'200.00',
        // }),
        // new Epignosis({
        //     imagePath:'https://static.wixstatic.com/media/90e2b0_bb9f467b6b1f415488aa77066803526d~mv2.jpg/v1/fill/w_807,h_454,al_c,q_85/90e2b0_bb9f467b6b1f415488aa77066803526d~mv2.webp',
        //         title:'Kids sandals',
        //     description:'Rubber sandals, ',
        //     price:'250.00',
        //     }),
        //     new Epignosis({
        //         imagePath:'https://static.wixstatic.com/media/90e2b0_a178990468cd417b9ec7a7fca8f6c908~mv2.jpg/v1/fill/w_813,h_457,al_c,q_85/90e2b0_a178990468cd417b9ec7a7fca8f6c908~mv2.webp',
        //             title:'Sport Shoes',
        //         description:'Rubber soul,Unlaced,Light shoes.Small feet',
        //         price:'850.00',
        //         }), 
        //         new Epignosis({

        //             imagePath:'https://static.wixstatic.com/media/90e2b0_c3c778fffd5742cba65417ab4febdb1e~mv2.jpg/v1/fill/w_807,h_454,al_c,q_85/90e2b0_c3c778fffd5742cba65417ab4febdb1e~mv2.webp',
        //                 title:'Girl Sneakers',
        //             description:'Rubber soul, unlaced,comfortable,light shoes',
        //             price:'850.00',
        //             }),
        //             new Epignosis({
        //                 imagePath:'https://static.wixstatic.com/media/90e2b0_25e3460e54c0416fb79bbce5aaeed9c6~mv2.jpg/v1/fill/w_813,h_457,al_c,q_85/90e2b0_25e3460e54c0416fb79bbce5aaeed9c6~mv2.webp',
        //                     title:'Girl Boots',
        //                 description:'Black in color,Rubber sole',
        //                 price:'807.00',
                        // })
                    // ]; 

    // for (let i = 0; i < products.length; i++) {

//  products[i].save();
    // }

// const seedDB = async () => {
//     await Epignosis.deleteMany({});
//     for (let i = 0; i < 10; i++) {
//                 // const random4 = Math.floor(Math.random() *4);
//                 // const price = Math.floor(Math.random() *10)+10;

//                 const product = new Epignosis({
//                     author:'61af5e130486e01080c8e721',
                    
//                     // title: '',
//                 // image:'https://source.unsplash.com/collection/483251/ ',
//                 description:'It is  working!',
// //   price,

//   images:[
//       {url:'https://static.wixstatic.com/media/90e2b0_32e9119e835945ca88fe833471859293~mv2.jpg/v1/fill/w_807,h_454,al_c,q_85/90e2b0_32e9119e835945ca88fe833471859293~mv2.webp',
//       },

//     //   {

//     //                 url:'https://static.wixstatic.com/media/90e2b0_c3c778fffd5742cba65417ab4febdb1e~mv2.jpg/v1/fill/w_807,h_454,al_c,q_85/90e2b0_c3c778fffd5742cba65417ab4febdb1e~mv2.webp',
//     //                 title:'Girl Sneakers',
//     //                 description:'Rubber soul, unlaced,comfortable,light shoes',
//     //                 price:'850.00',
//     //                 }
//   ]
  
//             })
//                 await product.save();
//             }
//         }


// seedDB().then(() => {

// mongoose.connection.close();
// })


