import debounce from './lib/debounce'
import throttle from './lib/throttle'
import sayHello from './lib/sayHello'

function WhiteUtils() {}

WhiteUtils.prototype.debounce = debounce
WhiteUtils.prototype.throttle = throttle
WhiteUtils.prototype.sayHello = sayHello

export default WhiteUtils