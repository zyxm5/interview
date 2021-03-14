/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-13 08:14:59
 * @Description: 
 */
let inp;
function exchange(n){
    if(n <= 1){
        return 0;
    }
    if(n === 2){
        return 1;
    }
    return exchange(n - 2) + 1;
}
while(inp = +readline()){
    console.log(exchange(inp));
}

const res = 'a_b_c'.replace(/_([A-z])/g, ($, $1) => $1.toUpperCase())
console.log(res);