console.log(process.argv.slice(2).map(function(i){
  return parseInt(i);
}).reduce(function(m, n){
  return m + n;
},0));
