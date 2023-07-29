import mongoose from "mongoose";

const uri = "mongodb+srv://admin:t10KlwH3VpzblctJ@mongo.stxtloj.mongodb.net/"
const options = {  
    useNewUrlParser: true,
    useUnifiedTopology:true
}

mongoose.connect(uri, options)

    .then(function(){
        console.log("CONNECTED WITH DATABASE");
    })

    .catch(function(error){
        console.log(error)
    })

export { uri, options }