/*
 * @Author: zyxm5
 * @Date: 2021-03-23 06:28:01
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-04-08 20:52:07
 * @Description: 
 */
// 给定一个没有字母重复的字符串，返回其所有可能的全排列。
// 示例:
// 输入: abc
// 输出:[abc、acb、bac、bca、cab、cba]

function test(str){
    const res = [];
    function _test(start, str) {
        if(str.length === 1){
            return start + str;
        }
        for(let i = 0; i < str.length; i ++){
            const rest = str.slice(0, i) + str.slice(i + 1);
            const _str = _test(str[i], rest);
            if(_str){
                res.push(start + _str);
            }
        }
    }
    _test('', str);
    return res;
}
console.log(test('abc'));