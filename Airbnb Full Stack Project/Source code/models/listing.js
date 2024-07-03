const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        // required: true,
    },

    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/silhouette-of-trees-during-sunset-PAnGAiaSPh0",
        set: (v) => 
            v === "" 
                ? "https://unsplash.com/photos/silhouette-of-trees-during-sunset-PAnGAiaSPh0" 
                : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports =Listing;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type:String,
//         required: true,
//     },
//     description: String,
//     image: {
//         type: String,
//         set: (v) => 
//             v === "" 
//                 ? "https://images.unsplash.com/photo-1476860184138-af609b4e8a3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 : v,
//     },
//     price: Number,
//     location: String,
//     country: String
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;    
