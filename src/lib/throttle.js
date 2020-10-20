/**
 * 函数节流
 * @param {*} func 
 * @param {*} wait 
 */
const throttle = function (func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }
  }
}

export default throttle