/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-15 06:24:30
 * @Description: 
 */
while(inp = readline()){
    const arr = new Array(inp.length);
    // 将inp中每个字符出现的次数和arr的下标关联起来
    for(let i = 0; i < inp.length; i++){
        let exist = false;
        for(let j = 0; j < arr.length; j ++){
            if(arr[j] === undefined){
                arr[j] = [];
            }
            // 如果arr[j]中包含该元素,则将arr[j]中的该元素删除，放入arr[j+1]中
            const index = arr[j].indexOf(inp[i]);
            if(index != -1){
                arr[j].splice(index, 1);
                arr[j + 1].push(inp[i]);
                exist = true;
                break;
            }
        }
        // 如果没有，则放入arr[0];
        if(!exist){
            arr[0].push(inp[i]);
        }
    }
//     最终形成 arr = [
//         [],
//         [a,b,c],
//         [d]
//     ]
    // 将出现次数最少的元素依次取出并从inp中删除
    // 为了方便删除字符操作，将字符串转为数组
    const inpArr = inp.split('');
    for(let i = 0; i < arr.length; i ++){
        // 这个就是出现次数最少的字符数组
        if(arr[i].length > 0){
            arr[i].forEach(e => {
                const index = inpArr.indexOf(e);
                inpArr.splice(index, 1);
            })
            break;
        }
    }
    console.log(inpArr.join(''));
}