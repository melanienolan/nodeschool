var mymodule = require('./06-mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, data){
  if (err) return console.error(err);
  data.forEach(function(d){
    console.log(d);
  })
})
