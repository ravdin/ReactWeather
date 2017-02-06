function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    else {
      reject('Invalid numbers');
    }
  });
}

function success(num) {
  console.log('success', num);
}

function errMsg(err) {
  console.log('error', err);
}

addPromise(71, 29).then(success, errMsg);
addPromise(66, 'foo').then(success, errMsg);
