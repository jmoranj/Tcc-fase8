import mongoose from "mongoose";

const adress = "mongodb+srv://admin:Qp5Aa1qLNwatoGXx@mongo.stxtloj.mongodb.net/"
const config = {
    useNewUrlParser: true,
    useUnifiedTopology:true
}

mongoose.connect(adress, config)

    .then(function(){
        console.log("CONNECTION MADE");
    })

    .catch(function(error){
        console.log(error);
    })

