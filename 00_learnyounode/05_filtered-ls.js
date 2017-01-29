var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, data){
  if(err) throw error;
  data.forEach(function(d){
    if (path.extname(d) == "." + process.argv[3]) {
      console.log(d);
    };
  });
})
