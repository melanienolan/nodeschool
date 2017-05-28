function parsePromised(data) {
  return new Promise(function(fulfill, reject) {
    try {
      fulfill(JSON.parse(data));
    } catch (e) {
      reject(e);
    }
  });
}
var info = process.argv[2];
parsePromised(info).then(null, console.log);
