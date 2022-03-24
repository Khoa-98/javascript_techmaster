// // 1.Khai báo một object với key là tên và value là tuổi tương ứng
// // của các thành viên trong một gia đình,
// // viết hàm afterNYears(obj, n) nhận vào object và số năm n,
// // tính và trả về kết quả là một object mới thể hiện sau n năm
// // thì những người đó bao nhiêu tuổi

// const myFamily = {
//   Joel: 32,
//   Fred: 44,
//   Reginald: 65,
//   Susan: 33,
//   Julian: 13,
// };

// function afterNYears(obj, n) {
//   //tao 1 object mới chưa kết quả
//   let newFamily = {};
//   for (let key in obj) {
//     newFamily[key] = obj[key] + n;
//   }
//   return newFamily;
// }
// console.log(afterNYears(myFamily, 10));

// Tạo một hàm xác định xem đơn đặt hàng có đủ điều
//  kiện để được miễn phí giao hàng hay không.
// Đơn đặt hàng đủ điều kiện để được giao hàng miễn phí nếu
// tổng chi phí của các mặt hàng đã mua vượt quá $50, 00.

// const order = { Shampoo: 5.99, "Rubber Ducks": 15.99 };

// function freeShipping(order) {
//     for (let productName in order) {
//         const price = order[productName];
//         total += price;
//     }

//     return total >= 50;
// }
// console.log(freeShipping(order));

// 3.Tạo một hàm, nhận vào một chuỗi là tên của một người, kiểm tra xem tên của người đó có giá trị bao nhiêu theo theo từ điển được cung cấp bên dưới
// Từ điển tra cứu điểm của các chữ cái
// Cộng các chữ cái trong tên của bạn để nhận được tổng điểm

// const scores = { "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3, "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23 };

// // score <= 60: NOT TOO GOOD
// // 61 <= score <= 300: PRETTY GOOD
// // 301 <= score <= 599: VERY GOOD
// // score >= 600: THE BEST

// function nameScore(name) {
//     name = name.toUpperCase();
//     let total = 0;

//     for (let i = 0; i < name.length; i++) {
//         const char = nam[i];
//         const score = scores[char];
//         total += score;
//     }

//     if (total <= 60) console.log("not too good");

//     console.log(nameScore("AAAAA"));
// }

// 4.Viết một hàm đảo ngược các khóa và
//  giá trị của một đối tượng,
// kết quả trả về là một đối tượng mới

// const obj = { a: 1, b: 2, c: 3 };

// function reverse(inputObj) {
//     let copy = {};

//     for (let key in inputObj) {

//     }
// }

// 7.Cho một đối tượng chứa tên và tuổi của một nhóm người,
//  hãy trả về tên của người lớn tuổi nhất.
// // Ví dụ
// oldest({
// 	Emma: 71,
// 	Jack: 45,
// 	Amy: 15,
// 	Ben: 29
// }) //

// const persons = {
//   	Emma: 71,
//   	Jack: 45,
//   	Amy: 15,
//   	Ben: 29
// };

// function oldest(persons) {
//     let result = null;
//     let max = 0;

//     for (let name in persons) {
//         if (persons[name] > max) {
//             max = persons[name];
//             result = {
//                 [name]: max,
//             };
//         }
//     }
//     return result;
// }

// console.log(oldest(persons))

// Viết chương trình yêu cầu người dùng nhập một câu bất kỳ, đảo ngược thứ tự các từ trong câu, và đổi chữ hoa thành chữ thường, chữ thường thành chữ hoa.

// Ví dụ: Nhập vào: "tHE fOX iS cOMING fOR tHE cHICKEN" Kết quả: "Chicken The For Coming Is Fox The"

let str = "tHE fOX iS cOMING fOR tHE cHICKEN";

function isUpper(char) {
  return (char = char.toUpperCase());
}

function reverseCase(str) {
  let result = " ";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (isUpper(char)) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  const words = result.split(" ");
  const reversed = words.reverse();
  result = reversed.join(" ");

  return result;
}
console.log(reverseCase(str));
