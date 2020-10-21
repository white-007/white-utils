/**
 * 函数节流
 * @param {*} func 
 * @param {*} wait 
 */
function throttle(func, wait) {
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