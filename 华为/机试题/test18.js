/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-13 08:02:14
 * @Description: 
 */
const arr = [];
let inp;
while(inp = readline()){
    inp = inp.replace(/[abc]/g, 2);
    inp = inp.replace(/[def]/g, 3);
    inp = inp.replace(/[ghi]/g, 4);
    inp = inp.replace(/[jkl]/g, 5);
    inp = inp.replace(/[mno]/g, 6);
    inp = inp.replace(/[pqrs]/g, 7);
    inp = inp.replace(/[tuv]/g, 8);
    inp = inp.replace(/[wxyz]/g, 9);
    inp = inp.replace(/[A-Z]/g, ($) => {
        if($ === 'Z'){
            return 'a'
        }
        $ = $.toLowerCase();
        const char = $.charCodeAt(0);
        return String.fromCharCode(char+1);
    })
    console.log(inp)
}
