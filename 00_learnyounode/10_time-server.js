var net = require('net');

function formatDate(date){
  return date.getFullYear() + '-' + addZero((date.getMonth() + 1)) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + '\n';
}
 function addZero(n) {
   return n < 10 ? '0' + n : n;
 }

 var server = net.createServer(function(socket){
   var date = new Date();
   socket.end(formatDate(date));
 })

 server.listen(Number(process.argv[2]));
