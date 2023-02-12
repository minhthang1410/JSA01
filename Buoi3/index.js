var studentList = ['nguyen van a', 'nguyen van b', 'le thi c', 'tran minh d', 'nguyen thi e']

// console.log(studentList.length)
// console.log(studentList);
// studentList[2] = "thắng";
// console.log(studentList)
// // studenList.splice(0,1);
// // studenList[4] = "Minh Thắng";
// // console.log(studenList)

// for(var i = 0; i < studentList.length; i++) {
//     console.log(studentList[i]);
// }

var computer = {
    brand: "lenovo",
    cpu: "amd ryzen 7",
    ram: 16,
    ssd: 512,
    weight: 1.5,
    color: "silver",
    os: "window"
}

// for (let x in computer) {
//     console.log(computer[x]);
// }

// for (let x of computer) {
//     console.log(x);
// } 

// for (let x in studenList) {
//     // console.log(x); đọc số index (chỉ mục) của mảng
//     // console.log(studenList[x]); đọc giá trị
// }
var name = "luuminhthang";
for (let x of name) {
    console.log(x);
}

// for in đọc thuộc tính obj
// for of đọc giá trị của những thứ lặp lại đc

// computer.owner = "Thắng";
// console.log(computer.ram);
// delete computer.os;
// computer.ssd = 1024;
// console.log(computer)