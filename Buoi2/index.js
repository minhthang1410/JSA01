// for (var i = 0;i <= 3;i++) {
//     console.log("Lặp được " + i + " lần nè");
// }

//biểu thức 1: var i = 0 là câu lệnh khai báo biến
//biểu thức 2: là điều kiện dừng vòng lặp
//biểu thức 3: là hành động xử lý biến được khai báo ở biểu thức 1

//Viết vòng lặp hiển thị từ 1 đến 10
// var sum = 0;
// for (var i = 0; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("Tổng từ 0 tới 10 là: " + sum)


//Viết chương trình tính tổng từ 0 đến 10

// var i = 6;
// // while (i < 5) {
// //     console.log("i = " + i);
// //     i++;
// // }
// do {
//     console.log("i = " + i);
//     i++;
// } while (true);

// var danhsachhocsinh = ["TNhư", "BNhu", "Khang", "Phong", "Văn", "Ngọc", "Thắng"];

// danhsachhocsinh.push("THắng 2"); // push() là phương thức thêm phần tử vào mảng

// danhsachhocsinh[1] = "BNhư"

// // danhsachhocsinh.splice(5)//index = 5

// for (var i = 0; i < danhsachhocsinh.length; i++) {
//     console.log(danhsachhocsinh[i]);
// }


// var animals = ["Dog", "Cat", "Chicken"];

// // Create
// animals.push("Frog");

// // Read
// console.log(animals[1]);

// // Update
// animals[2] = "Cows";

// // Delete
// animals.splice(0, 1)
// console.log(animals);

// animals.shift();

// console.log(animals);

// var thang = {
//     age: 18,
//     height: 173,
//     location: "TPHCM"
// }

// // Create
// thang.work = "mindx";

// // Read
// console.log(thang.location);

// // Update
// thang.location = "HaNoi";

// // Delete
// console.log(thang)

// delete thang.location

// console.log(thang)

var computer = new Object();
computer = {
    os: "macOS",
    brand: "Apple",
    cpu: "m1"
}

console.log(computer)