const mongoose = require(mongoose);

//declare a variable and initailize it to mongoose
const postSchema = new mongoose.Schema({
    //Properities inside the postSchema
    topic:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    postCategory:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Posts',postSchema)

