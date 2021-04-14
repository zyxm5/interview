/*
 * @Author: zyxm5
 * @Date: 2021-04-15 06:28:57
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-04-15 06:29:09
 * @Description: 
 */
// 长方体：边长：a,b,c都是质数，给定一个参数n >= 6，n为边长之和，求长方体的最大体积

// v = a * b * c;
// n = a + b + c;

// n = 20
// a = 3, 
// b = 3,2,3
// c = 3,2

function isPrimary(num){
    for(let i = 2, len = parseInt(Math.sqrt(num)); i <= len; i ++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function test(n){
    function _test(num, n){
        if(num <= 1){
            if(!isPrimary(n)){
                return 0;
            }
            return n;
        }
        let max = 0;
        for(let i = 2, len = n - (num - 1) * 2; i <= len; i ++){
            const a = i;
            if(!isPrimary(a)){
                continue;
            }
            max = Math.max(max, a * _test(num - 1, n - a));
        }
        return max;
    }
    return _test(3, n)
}

console.log(test(20))