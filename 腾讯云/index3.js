/*
 * @Author: zyxm5
 * @Date: 2021-03-23 06:28:50
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-23 06:29:19
 * @Description: 
 */
// 根据id合并数组中的对象
// [{id:1,age:18},{id:1,name:'test'}] => [{id:1,age:18,name:'test'}] 

function test2(arr) {
    // 遍历，找到相等id的项，合并
    const isFind = [];
    const res = [];
    for(let i = 0, len = arr.length; i < len; i ++){
        const id = arr[i].id;
        if(isFind.includes(id)){
            continue;
        }
        isFind.push(id);
        const same = arr.filter(e => e.id === id);
        let obj = {};
        while(same.length){
            const item = same.pop();
            obj = {
                ...obj,
                ...item
            }
        }
        res.push(obj);
    }
    return res;
}
console.log(test2([{id:1,age:18},{id:1,name:'test'}]));