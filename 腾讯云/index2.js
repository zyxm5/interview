/*
 * @Author: zyxm5
 * @Date: 2021-03-23 06:28:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-23 06:29:33
 * @Description: 
 */
// 将数组拍扁
// [1,[2,3,[4,5,6,[7]]],8,9]

function test(arr){
    const res = [];
    if(!Array.isArray(arr)){
        return res[arr];
    }
    for(let i = 0, len = arr.length; i < len; i ++){
        if(Array.isArray(arr[i])){
            res.push(...test(arr[i]))
        }else{
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(test([1,[2,3,[4,5,6,[7]]],8,9]));