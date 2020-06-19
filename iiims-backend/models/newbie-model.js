const mongoose = require('mongoose');

//const connection= mongoose.connect('mongodb://localhost:27017/iiims', {useNewUrlParser: true}, (err) =>{
mongoose.connect('mongodb+srv://pd4184:pd41849630@pandu-m7ddl.mongodb.net/pmdb',{useNewUrlParser: true, 
useCreateIndex: true},err =>{

    if(err)
        console.log('mongodb connection error :' ,+ err);
    else
        console.log('mongodb connection succeeded')
})

var newbieSchema = new mongoose.Schema({
    empID: {
        type: Number
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    managerName: {
        type: String
    },
    email: {
        type: String
    },
    state: {
        type: String
    }
});



module.exports= mongoose.model('Newbies', newbieSchema);