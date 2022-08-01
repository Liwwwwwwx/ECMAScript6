//reducer 逐个遍历数组元素，每一步都将当前元素的值与上一步的计算结果相加（上一步的计算结果是当前元素之前所有元素的总和）——直到没有更多的元素被相加。

[1, 2, 3].reduce((a, b) => {
    console.log(a, b)
});

//设置初始值0
[1, 2, 3].reduce((a, b) => {
    console.log(a, b)
    return a+b
}, 0)