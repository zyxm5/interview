/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-12 21:14:46
 * @Description: 
 */
let inp;
const NG = () => console.log('NG');
const OK = () => console.log('OK');
while(inp = readline()){
    if(inp.length <= 8){
        NG();
        continue;
    }
    const upperCase = /[A-Z]/.test(inp);
    const lowerCase = /[a-z]/.test(inp);
    const number = /[0-9]/.test(inp);
    const other = /[^A-z0-9]/.test(inp);
    const match = [upperCase, lowerCase, number, other].filter(e => e);
    if(match.length < 3){
        NG();
        continue;
    }
    const repeat = /(.{3}).+\1/.test(inp);
    if(repeat){
        NG();
        continue;
    }
    OK();
}