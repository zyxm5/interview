/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-12 07:03:22
 * @Description: 
 */
let num = readline();
const words = [];
while(num --){
     words.push(readline());
}
words.sort().forEach(e => {
    console.log(e);
})