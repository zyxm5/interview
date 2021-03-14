/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-12 06:32:35
 * @Description: 
 */
let count = +readline();
const arr = [];
while(count--){
    const inp = readline().split(' ');
    const index = +inp[0];
    const value = +inp[1];
    if(arr[index]){
        arr[index] += value;
    }else{
        arr[index] = value;
    }
}
arr.forEach((e, i) => console.log(i + ' ' + e));