var promise = Promise.resolve('hello');

promise.then(console.log).catch(err => console.log('this is an error'));
