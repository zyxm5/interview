/*
 * @Author: zyxm5
 * @Date: 2021-03-23 06:28:01
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-23 06:28:21
 * @Description: 
 */
//请写出输出内容
async function async1() {
    console.log('1');
    await async2();
    console.log('2');
}
async function async2() {
    console.log('3');
}

console.log('4');

setTimeout(function() {
    console.log('5');
}, 0)

async1();

new Promise(function(resolve) {
    console.log('6');
    resolve();
}).then(function() {
    console.log('7');
});
console.log('8'); 