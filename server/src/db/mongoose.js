const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb+srv://E-Election-DApp:apoorv123@votedata.lhkoc.mongodb.net/elections?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",()=>{
    console.log("Mongoose is COnnected!!");
})