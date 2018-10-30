var User = require("./user.js");
var connect = require('connect'),
  serveStatic = require('serve-static'),
  PORT = 3000;
var http = require("http");

var flag;

connect().use(serveStatic(__dirname)).listen(PORT, function () {


  // response.setHeader("Access-Control-Allow-Origin", "*");

  function onRequest(req, resp) {

flag = false;

     var c="";
     req.on('data',function(data){

      console.log('is there any data');

      c+=data;
      console.log(c);

      var a = c.split("&");

      var  a0 = a[0].toString();
      var a1 = a[1].toString();



      resp.writeHead(200,{'ContentType':'text/html;charset=utf-8'});

      resp.end();

      console.log(a0.slice(9)+ a1.slice(9));

      var wherestr = {'userName' : a0.slice(9), 'password': a1.slice(9)};

      User.find(wherestr, function(err, res){
          if (err) {
          console.log("Error:" + err);
        }
        else {
          console.log("Res:" + res);

          if(res.toString() !== ""){
          console.log("i find the data");
          flag = true;

          }else{
            flag = false;
          }

        }
      })

    });

  }

  http.createServer(onRequest).listen(9999);
  console.log('Server running on ' + PORT + '...');
});

var server=http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin": 'http://localhost:4200'});
    if(flag === true){
      res.write("find");
    }else{
      res.write("notfind");
    }


  res.end();
});

server.listen(1337,"localhost",function(){
  console.log("start listening...");
});
