/**
 *  函数防抖(普通版), tip: 处理频率高的点击问题, 适用于普通函数
 */

export const handleDebounce = (func, delay = 300) => {
  let timerId = 0;
  return (...args) => {
    timerId && clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = 0;
      func.apply(this, args);
    }, delay);
  }
}

/**
 *  函数防抖(装饰器版), tip: 处理频率高的点击问题, 不能用在普通函数上，需用在属性上
 */

export const handleDebounceDecorator = (delay = 300) => {
  return (target, name, descriptor) => {
    console.log(target, name, descriptor);
    console.log(target.constructor.prototype);
    const method = descriptor.value;
    let timerId = 0;
    descriptor.value = (...args) => {
      timerId && clearTimeout(timerId);
      timerId = setTimeout(() => {
        timerId = 0;
        return method.apply(target, args);
      }, delay);
    };
    return descriptor;
  }
}