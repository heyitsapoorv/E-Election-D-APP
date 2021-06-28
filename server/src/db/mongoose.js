const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb://localhost/elections',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})