/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-12 20:27:34
 * @Description: 
 */
const arr = [];
let inp;
while(inp = readline()){
    const str = inp.split(' ');
    const file = str[0].split('\\').pop().slice(-16);
    const line = str[1];
    const index = arr.findIndex(e => e[0] === file && e[1] === line);
    if(index !== -1){
       arr[index][2]++;
    }else{
       arr.push([file, line, 1])
    }
}
arr.slice(-8).forEach(e => console.log(e.join(' ')))