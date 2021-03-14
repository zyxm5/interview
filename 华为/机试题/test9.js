/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-12 06:39:53
 * @Description: 
 */
const inp = readline();
let res = "";
for(let i = inp.length - 1; i >= 0; i --){
    if(res.indexOf(inp[i]) === -1){
        res += inp[i];
    }
}
console.log(res)