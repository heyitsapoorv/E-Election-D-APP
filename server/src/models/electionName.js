const mongoose = require('mongoose')

const electionName = mongoose.model('electionlists',{
    election_id:{
        type: Number
    },
    election_name: {
        type: String
    },
    election_organizer: {
        type: String
    },
    election_password: {
        type: String
    },

    Total_Candidates:{
        type:Number
    }
});

module.exports = electionName