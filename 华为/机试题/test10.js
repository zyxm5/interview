/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-12 06:42:28
 * @Description: 
 */
const inp = readline();
const obj = {};
for(let i = 0, len = inp.length; i < len; i++){
    obj[inp[i]] = 1;
}
console.log(Object.keys(obj).length);