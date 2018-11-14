let mongodb = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017';
let express = require('express');
let app = express();
app.get('/goods', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  let data = req.query.data;
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    let dbo = db.db('life');
    dbo.collection(data).find({}).toArray(function (error, requests) {
      if (error) {
        console.log(error)
      }
      res.send(requests)
      db.close();
    })
  })
})
app.listen(9997);


