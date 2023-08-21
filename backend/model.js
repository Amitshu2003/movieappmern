import mongoose from "mongoose";

const favSchema = mongoose.Schema({
    title:String,
    year:String,
    type:String,
    image:String
})

const Favs = mongoose.model('favourites', favSchema);
export default Favs