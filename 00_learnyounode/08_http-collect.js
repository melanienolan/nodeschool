var http = require('http');
// var bl = require('bl');

// without bl package
http.get(process.argv[2], function(response){
  var data = '';
  response.setEncoding('utf8');
  response.on('data', function(buffer){
    data += buffer;
  })
  response.on('end', function(){
    console.log(data.length);
    console.log(data);
  })
})

// // with bl package
// http.get(process.argv[2], function(response){
//   response.pipe(bl(function(err, data){
//     if (err) {
//       return console.error(err);
//     }
//     data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }))
// })
