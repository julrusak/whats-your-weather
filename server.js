const express 		= require('express');
const app 			= express();
const router 		= express.Router();
const mongoose 		= require('mongoose');
const bodyParser 	= require('body-parser');
const dbUrl       	= 'mongoDb URL here';


// const routes = require('./routes'), {  } = routes;

app.use(express.static('public'))

   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: true }))

   .get('/*', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
    // return res.sendFile(resolve(__dirname, 'public', 'index.html'))
});

const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

//db config
// mongoose.connect(dbUrl, (err) => { if (err) { throw err; } });
// var db = mongoose.connection;
// db.on('error', console.log.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('DB is now connected! Test deploy from 2nd user');
// })




