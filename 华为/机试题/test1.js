/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-11 21:14:08
 * @Description: 
 */
while(amount = parseInt(readline())){
    const arr = [];
    for (let i =0 ; i< amount; i++){
        let element = parseInt(readline());
        arr[element] = 1;
    }
    arr.forEach((e,index) => {
        print(index);
    })
}