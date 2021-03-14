const inp = readline().split(" ");
const money = Number(inp[0]) / 10;
const count = inp[1];
const objectsArr = [];
for (let i = 0; i < count; i++) {
    const inp = readline().split(" ");
    // 如果是附件就必须要先购买主件
    const price = Number(inp[0]) / 10;
    const im = Number(inp[1]);
    const number = Number(inp[2]);
    if (number === 0) {
        objectsArr[i + 1] = [
            {
                price,
                degree: price * im,
            },
        ];
    } else {
        const len = objectsArr[number].length;
        for (let j = 0; j < len; j++) {
            objectsArr[number].push({
                price: price + objectsArr[number][j].price,
                degree: price * im + objectsArr[number][j].degree,
            });
        }
    }
}
function test(total) {
    // 使用动态规划缓存重复项
    const cache = [];

    function _test(total, index) {
        // 如果钱用完了，或者没东西了，return 0
        if (total === 0 || index === objectsArr.length) {
            return 0;
        }
        // 如果剩下的钱小于0，说明无解
        if (total < 0 || index > objectsArr.length) {
            return -1;
        }
        // console.log(total, objectsArr, already);
        const cur = objectsArr[index];
        for (let i = 0; i < cache.length; i++) {
            if (cache[i].total === total && cache[i].index === index) {
                return cache[i].result;
            }
        }
        let result = 0;
        // 如果当前项不存在或者剩下的钱不够买第一项了，买后续项
        if (!cur || total < cur[0].price) {
            result = _test(total, index + 1);
        } else {
            // 买第一项
            let result1 = -2;
            let max = 0;
            // 如果该物品包含附件，则返回包含附件的最大值
            for (let i = 0; i < cur.length; i++) {
                let result = _test(total - cur[i].price, index + 1);
                // 返回两者中的较大值
                if (result !== -1) {
                    // 买了第一项，导致钱变成了负数，就不能买了
                    result += cur[i].degree;
                }
                if (result > result1) {
                    result1 = result;
                    max = i;
                }
            }
            // 不买第一项
            const result2 = _test(total, index + 1);
            if (result1 > result2) {
                result = result1;
            } else {
                result = result2;
            }
        }
        cache.push({
            total,
            index,
            result,
        });
        return result;
    }
    const res = _test(total, 0);
    return res * 10;
}
console.log(test(money));
