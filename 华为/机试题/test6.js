/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-11 22:13:13
 * @Description: 
 */
let num = +readline();
const sq = Math.sqrt(num);
let result = "";
for(let i = 2; i <= sq; i++){
    while(num % i === 0){
        result += i + " ";
        num /= i;
    }
}
if(num >1){
    result += num + " ";
}
console.log(result);
