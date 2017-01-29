var http = require('http');

var urls = process.argv.slice(2);
var results = [];
var tally = 0;

urls.forEach(function(url, i){
  http.get(url, function(response){
    var data = '';
    response.setEncoding('utf8');
    response.on('data', function(buffer){
      data += buffer;
    })
    response.on('end', function(){
      tally++;
      results[i] = data;
      if (tally === urls.length) {
        results.forEach(function(result){
          console.log(result);
        })
      }
    })
  })
})
