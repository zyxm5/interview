/*
 * @Author: zyxm5
 * @Date: 2021-03-11 21:00:36
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-12 15:32:56
 * @Description:
 */
const lines = [
    "500 1 0",
    "400 4 0",
    "300 5 1",
    "400 5 1",
    "200 5 0",
    "500 4 0",
    "400 4 0",
];

const total = 1500;
let count = 7;
let i = 0;
const arr = [];
while (i < count) {
    const inp = lines[i].split(" ");
    if (inp[2] === "0") {
        arr.push({
            value: +inp[0],
            pro: inp[0] * inp[1],
        });
    } else {
        // 主件
        const main = arr[inp[2] - 1];
        if (!main.attach) {
            main.attach = [];
        }
        main.attach.push({
            value: +inp[0],
            pro: inp[0] * inp[1],
        });
    }
    i++;
}
function test(total, arr) {
    const dp = {};
    function _test(total, i) {
        if (total <= 0 || i >= arr.length) {
            return 0;
        }
        const key = total + "-" + i;
        if (dp[key]) {
            return dp[key];
        }
        const { value, pro, attach } = arr[i];
        let res;
        // 判断该物品是否可以能买下
        // 1. 能买下
        // 2. 是主件或者主件已买
        if (total >= value) {
            let value1, value2;
            // 买
            // 判断是否有附件
            // 没有附件
            if(attach){
                let noAtta, atta1, atta2, attaAll;
                // 不买附件
                res = _test(
                    total - value,
                    i + 1
                );
                noAtta = res + pro;
                // 买一个附件
                res = _test(total - value - attach[0].value, i + 1);
                atta1 = res + pro + attach[0].pro;
                // 判断是否有两个附件
                if(attach.length > 1){
                    // 买第二个附件
                    res = _test(total - value - attach[1].value, i + 1);
                    atta2 = res + pro + attach[1].pro;
                    // 买两个附件
                    res = _test(total - value - attach[0].value - attach[1].value, i + 1);
                    attaAll = res + pro + attach[0].pro + attach[1].pro;
                }
                value1 = Math.max(noAtta, atta1, atta2, attaAll);
            }else{
                value1 = _test(
                    total - value,
                    i + 1
                );
                value1 += pro;
            }
            // 不买
            value2 = _test(total, i + 1);
            res = Math.max(value1, value2);
        } else {
            res = _test(total, i + 1);
        }
        dp[key] = res;
        return res;
    }
    return _test(total, 0);
}
const res = test(total, arr);
console.log(res);
