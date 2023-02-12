var myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456];
var newArr = [];
for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 === 0 || myArr[i] === 0) {
        newArr.push(myArr[i]);
    }
}
console.log(newArr);
