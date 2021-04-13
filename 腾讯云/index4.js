/*
 * @Author: zyxm5
 * @Date: 2021-03-23 06:29:41
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-04-12 21:28:39
 * @Description: 
 */
/**
 * @description: 防抖-触发多长时间后执行1次
 * @param { Function } func
 * @param { Number } wait
 * @param { Boolean } immediate 是否立即执行
 * @return { Function }
 */
function debounce(func, wait, immediate = false){
    let timeout;
    return function (){
        timeout && clearTimeout(timeout);
        if(immediate){
            func.apply(this, arguments);
        }else{
            timeout = setTimeout(() => {
                func.apply(this, arguments)
            }, wait);
        }
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