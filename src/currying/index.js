const curryingES5 = function(fn) {
  let rest1 = Array.prototype.slice.call(arguments)
  rest1.shift()
  return function() {
    let rest2 = Array.prototype.slice.call(arguments);
    return fn.call(null, rest1.concat(rest2));
  }
}

const curryingES6 = function(fn, ...rest1) {
  return function(...rest2) {
    return fn.call(null, rest1.concat(rest2));
  }
}

const unCurryingES5 = function(fn) {
  return function(tar) {
    var rest = Array.prototype.slice.call(arguments);
    rest.shift();
    return fn.apply(tar, rest) 
  }
}

const unCurryingES6 = function(fn) {
  return function(tar, ...rest) {
    return fn.apply(tar, rest);
  }
}