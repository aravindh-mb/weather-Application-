// if(false){
//     const { exec } = require('child_process');
//     exec('shutdown /s');
// }
// else{ 
//     alert('Sorry');
//     console.log('else printed');
// }

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: "",
//     database: 'login'
// });
// connection.connect(function (err){
//  if(err) throw err;
//  console.log("DB connected");
// con.query("CREATE DATABASE javatpoint", function (err, result) {  
//   if (err) throw err;  
//   console.log("Database created");  
//   });  
// });

var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",
database:'login'
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected! 💪");  
// con.query("CREATE DATABASE data2", function (err, result) {  
// if (err) throw err;  
// console.log("Database created ✔");  
// });  
// var newdata ="INSERT INTO userinfo( name,email, password, mobile) VALUES ('Ajeet','ajeetkumar890@gmail.com', '27323232', '0987654321')";  
// var newdata1= "UPDATE userinfo SET name = 'Aravindh' WHERE name = 'Ajeet'";  
// con.query(newdata,function(err){
// if(err) throw err; 
// console.log("table created successfully 😍😍");
// });
con.query("SELECT * FROM data", function (err, result) {  
  if (err) throw err;  
  console.log(result);  
  });  
});


// var http = require("http");  
// http.createServer(function (request, response) {  
//  // Send the HTTP header   
//    // HTTP Status: 200 : OK  
//    // Content Type: text/plain  
//    response.writeHead(200, {'Content-Type': 'text/plain'});  
//    // Send the response body as "Hello World"  
//    response.end('Hello World\n');  
// }).listen(8044);  
// // Console will print the message  
// console.log('Server running at http://127.0.0.1:8081/');  
