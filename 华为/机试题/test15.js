/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-12 19:42:59
 * @Description: 
 */
const arr = [];
let inp;
while(inp = readline()){
    const steps = inp.split(';');
    arr.push(steps);
}
function test(steps){
    const start = [0,0];
    const reg = /^([ADWS])([0-9]{1,2})$/
    for(let i = 0, len = steps.length; i < len; i ++){
        const match = steps[i].match(reg);
        if(match && match.length === 3){
            const dir = match[1];
            const dis = +match[2];
            switch (dir) {
                case 'A':
                    start[0] -= dis;
                    break;
                case 'D':
                    start[0] += dis;
                    break;
                case 'W':
                    start[1] += dis;
                    break;
                case 'S':
                    start[1] -= dis;
                    break;
            }
        }
    }
    return start;
}
for(let i = 0, len = arr.length; i < len; i ++){
    console.log(test(arr[i]));
}