let mongodb = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017';
let express = require('express');
let app = express();
//数据初始化渲染列表页
app.get('/goods', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  let data = req.query.data;
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    let dbo = db.db('life');
    dbo.collection(data).find({}).toArray(function(error, requests) {
      if (error) {
        console.log(error)
      }
      res.send(requests)
      db.close();
    })
  })
})
//模糊搜索
app.get('/search', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  let str = req.query.searchName;
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    let dbo = db.db('life');
    if (str.length !== 0) {
      // let reg = new RegExp(req.query.searchName, 'i');
      dbo.collection('goods').find({
        // name: {
        //   $regex: reg
        // }
        name:str
      }).toArray(function(err, request) {
        if (err) {
          console.log(err)
        }
        res.send(request)
        db.close();
      })
    } else {
      res.send('no')
    }
  })
})
app.listen(9997);