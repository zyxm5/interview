/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-11 21:18:49
 * @Description: 
 */
const str = readline();
const char = readline();

let sum = 0;
for(let i = 0; i < str.length; i++){
    if(char.toLowerCase() === str[i].toLowerCase()){
        sum++;
    }
}
print(sum)