/*
 * @Author: zyxm5
 * @Date: 2021-04-07 21:54:22
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-04-07 21:56:37
 * @Description: 
 */
const path = require('path');

const _path = path.resolve('path', '../a', 'b')
const _path1 = path.join('path', '../a', 'b')
console.log(_path);
console.log(_path1);