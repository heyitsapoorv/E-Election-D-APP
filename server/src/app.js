const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressValidator = require('express-validator');
const electionName = require('./models/electionName');
const admin = require('./models/admin')
const md5 = require('md5');
require('./db/mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', function(req, res) {
    res.json('Works!');
});

app.get('/api/electionName', function(req, res) {
    var electionNames = []
    var electionOrganizers = []
    var electionIds = []
    var final = []
    electionName.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            electionNames[i] = eachOne[i].election_name ;
            electionOrganizers[i] = eachOne[i].election_organizer;
            electionIds[i] = eachOne[i].election_id;
            final.push({
                'election_id': eachOne[i].election_id,
                'election_organizer': eachOne[i].election_organizer,
                'election_name': eachOne[i].election_name
            })
        }
        res.send(final);
    })
})

app.post('/api/electionName', async function(req, res) {
    electionName.create({
        election_id: Math.floor(Math.random() * 100),
        election_name: req.body.election_name,
        election_organizer: req.body.election_organizer,
        election_password:  req.body.election_password,
    }).then(election => {
        console.log(election);
        res.json(election);
    });
});

app.post('/api/adminLogin', async function(req, res) {
    admin.findOne({
        username: "Lakshit",
        password: "Lakshit",
    }).then(election => {
        if(election === null){
            console.log(election);
            console.log(req.body.username);
            console.log(req.body.password);
            res.send(false);
        }else{
            res.send(true);
        }
    });

});


if ( process.env.NODE_ENV == "production"){

    app.use(express.static("blockchain/build"));


}
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server is up on port " + port)
});
