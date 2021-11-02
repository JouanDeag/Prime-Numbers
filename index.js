console.time('Time taken')
// var array = [43, 13, 1, 2, 3, 134, 52365, 542352, 625235, 235235, 1289037190238, 18723917289371892, 821739712893618273, 712893618725378126387, 831297348912638712673156236189276389127371298378912738912378651276461274698162489127841892748127489172, 731298367981273891273891728]

var array = generateArray()
isArrayPrime(array)

console.timeEnd('Time taken')

function generateArray() {
  var array = []
  for (var i = 0; i < 100; i++) {
    num = Math.round(Math.random()*100000000)
    array.push(num)
  }
  return array
} 

function isArrayPrime(array) {
  var primearray = []
  var notprimearray = []
  var result = false
  array.forEach(n => {
    result = isPrime(n)
    if(result == true) {
      primearray.push(n)
    }
    else
    {
      notprimearray.push(n)
    }
  });
  console.log(`Primes: ${primearray.sort((a, b) => a - b)} : Not primes: ${notprimearray.sort((a, b) => a - b)}`)
}


function isPrime(num) {
    if (num == 1) return true // ones
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    let s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i++) { // start from 3, stop at the square, increment
        if(num % i === 0) return false; // modulue shows a divisor was found
    }
    return true;
  }
  
