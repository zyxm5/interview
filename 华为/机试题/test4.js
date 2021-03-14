/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-11 21:31:35
 * @Description: 
 */
let inp;
const arr = [];
while(inp = readline()){
    for(let i = 0,len = inp.length; i < len; i += 8){
        arr.push((inp.slice(i, i + 8) + '0000000').slice(0, 8));
    }
}
arr.forEach(e => console.log(e));