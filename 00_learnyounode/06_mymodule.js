var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
  fs.readdir(dir, function(err, data){
    if (err) return callback(err);
    data = data.filter(function(d){
      return path.extname(d) === "." + ext;
    });
    return callback(err, data);
  })
}
