/**
 * 函数防抖
 * 
 * @param {*} func 执行函数
 * @param {*} wait 延迟时间
 * @param {*} immediate 是否立即执行
 */
const debounce = function (func, wait, immediate) {
  let timer = null
  return function () {
    let self = this,
      args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate) {
      let runNow = !timer
      timer = setTimeout(() => {
        timer = null // 只有执行timer = null后才会运行func函数，否则重新计时
      }, wait);
      if (runNow) {
        func.apply(self, args)
      }
    } else {
      timer = setTimeout(() => {
        func.apply(self, args)
      }, wait);
    }
  }
}

export default debounce