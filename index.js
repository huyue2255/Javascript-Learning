const obj = {name: 'hello'}
function clone(obj) {
  return {...obj};
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Nana'
  return obj2;
}

const updatedObj = updateName(obj);
console.log(obj,updatedObj)


// HOF
const hof = (fn) => fn(5);
hof(function a(x) {return x});

// Closure
const closure = function() {
  let count = 55;
  return function getCounter() {
    count++
    return count;
  }
}

const test = closure();

test();
test();
test();

// currying
const mutiply = (a,b) => a*b;
const curriedMutiply = (a) => (b) => a*b;
const curriedMutiplyBy5 = curriedMutiply(7)

curriedMutiplyBy5(4);

// Partial Appplication
const mutiply1 = (a,b,c) => a*b*c;
const particalMutiplyBy5 = mutiply1.bind(null,5);
particalMutiplyBy5(3,10);

// caching
function memorizedAddTo80(n) {
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memorized = memorizedAddTo80();
console.log('1',memorized(5));
console.log('2',memorized(5));

// Compose （right to left） & Pipe (left to right)
fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(50) 
pipe(fn3, fn2, fn1)(50)
const compose = (f, g) => (data) => f(g(data));
const pipe = (f,g) => (data) => g(f(data));
const mutiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const mutiplyBy3AndAbsolute = compose(mutiplyBy3, makePositive);

mutiplyBy3AndAbsolute(-50)


