/*
 * @Author: zyxm5
 * @Date: 2021-03-23 06:29:41
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-23 06:58:41
 * @Description: 
 */
/**
 * @description: 防抖-触发多长时间后执行1次
 * @param { Function } func
 * @param { Number } wait
 * @return { Function }
 */
function debounce(func, wait){
    let timeout;
    return function (){
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, arguments)
        }, wait);
    }
}
/**
 * @description: 节流-触发多长时间内执行一次
 * @param { Function } func
 * @param { Number } wait
 * @return { Function }
 */
function throttle(func, wait){
    let lastTime = 0;
    return function(){
        const now = Date.now();
        if(now - lastTime < wait){
            return;
        }
        func.apply(this, arguments);
        lastTime = now;
    }
}