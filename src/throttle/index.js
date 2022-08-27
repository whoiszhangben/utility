const throttleTimestamp = function(fn, wait) {
  let timestamp = 0;
  return function(...args) {
    let currentTime = new Date().getTime();
    if(currentTime - timestamp > wait) {
      fn.apply(this, args);
      timestamp = currentTime;
    }
  }
}
const throttleTimeout = function(fn, wait) {
  let timeout = null;
  return function(...args) {
    let self = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        fn.apply(self, args)
      }, wait)
    }
  }
}
const throttle = function (fn, wait) {
  let timestamp = 0;
  let timeout = null;
  return function(...args) {
    let self = this;
    let currentTime = new Date().getTime();
    let remain = wait - (currentTime - timestamp);
    if (remain <= 0) {
      timestamp = currentTime;
      fn.apply(this, args);
      if (!timeout) {
        clearTimeout(timeout);
        timeout = null
      }
    } else {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = new Date().getTime();
          timeout = null;
          fn.apply(self, args);
        }, remain)
      }
    }
  }
};
export default {
  throttle,
  throttleTimestamp,
  throttleTimeout
};
 