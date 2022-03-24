/**
 * Viết hàm minmax(arr) nhận vào một mảng các
 * số bất kỳ, tìm và trả về một mảng mới chứa cả
 * số nhỏ nhất và số lớn nhất, theo đúng thứ tự đó.
 */

// let arr = [1, 2, 3, 4, 5, 6, 7]; // result [1, 7]
// let min = arr(0);
// let max = arr(0);
// function minmax(arr) {
//   for (let i of arr) {
//     if (i < min) {
//       min = i;
//     }
//     if (i > max) {
//       max = i;
//     }
//   }
//   return [min, max];
// }
// console.log(minmax(arr));

/**
 * 2.Một nhóm bạn đã quyết định thành lập một
 * nhóm kín và tên của nhóm sẽ là chữ cái đầu tiên
 *  trong tên mỗi thành viên, được sắp xếp theo
 *  thứ tự bảng chữ cái. Viết hàm societyName(names)
 *  nhận một mảng chứa tên các thành viên và trả về
 *  tên của hội kín.
 */

// let arr = ["khoa", "Adam", "Huong"];

// function societyName(arr) {
//     let sortArr = Object.assign([], arr);
//     console.log(sortArr);

//   let names = "";

//   for (let i of sortArr) {
//     names += i.charAt(0);
//   }
//   return names;
// }
// console.log(societyName(arr));

/**
 * 3.Viết hàm chatroomStatus(users) nhận một mảng 
 * chứa tên users trả về text cho biết số lượng 
 * users trong phòng trò chuyện dựa trên các 
 * quy tắc sau:
Nếu không có ai thì kết quả là No one online
Nếu có 1 người thì kết quả là user1 online
Nếu có 2 người thì kết quả là user1 and user2 online
Nếu có nhiều hơn 2 người thì kết quả là hai tên
đầu tiên và thêm vào and n-2 more online.
 */
// let arr = [];

// function chatroomStatus(arr) {
//   length = arr.length;

//   if (length == 0) return "no more online";
//   else if (length < 2) return arr.join(" and ") + " online ";
//   else arr.slice(0, 2).join(", ") + " and " + (length - 2) + " more online";
// }
// console.log(chatroomStatus([])); // result "No one online"
// console.log(chatroomStatus(["paRIE"])); // result "paRIE online"
// console.log(chatroomStatus(["s234f", "mailbox2"])); // result "s234f and mailbox2 online"
// console.log(
//   chatroomStatus([
//     "pap_ier44",
//     "townieBOY",
//     "panda321",
//     "motor_bike5",
//     "sandwichmaker833",
//     "violinist91",
//   ])
// ); // result "pap_ier44, townieBOY and 4 more online"

/***
 * 4.Viết hàm secondLargest(numbers)
 * nhận một mảng các số bất kỳ, tìm và trả về
 *  số lớn thứ hai trong mảng (lưu ý trường hợp
 *  có nhiều giá trị trùng nhau)
 */

// let arr = [5, 4, 3, 2, 5, 1];

// function secondLargest(arr) {
//   let max = arr[0];
//   let second = arr[0];

//   for (let i of arr) {
//     if (i > max) {
//       second = max;
//       max = i;
//     } else if (second && i != max && i > second) second = i;
//     else if (isNaN(second) && i != max) second = i;
//   }
//   return second;
// }
// console.log(secondLargest(arr));

/**
 * 5.Cho một danh sách 2D gồm mảng các chữ cái
 * và một danh sách chỉ mục, hãy tìm các chữ cái
 * trên các chỉ mục đã cho và trả về dưới dạng một
 * chuỗi
 */

// const arr = [
//   ["m", "u", "b"],
//   ["a", "s", "h"],
//   ["i", "r", "1"],
// ];

// const index = [1, 3, , 5, 8];

// function findByIndex(arr, index) {
//     for
// }

/**
 * 6.Viết hàm spelling(word) nhận vào một từ và
 * đánh vần nó, bằng cách nối liên tiếp các chữ cái
 *  cho đến khi hoàn thành từ đầy đủ, kết quả trả
 * về là một mảng
 */

// let word = "techmaster";

// function spelling(word) {
//   let result = [];

//   for (let i = 0; i <= word.length; i++) {
//     result.push(word.slice(0, i));
//   }
//   return result;
// }
// console.log(spelling(word));

/**
 * 7.Món salad trái cây ngon nhất khi trái cây
 *  được thái thành hạt lựu nhỏ và trộn đều!
 *  Viết hàm fruitSalad(fruits) nhận vào một mảng
 * các loại trái cây (tên), cắt mỗi quả làm đôi
 * (cắt chuỗi), sau đó sắp xếp các phần theo thứ tự
 *  abc và nối vào thành một chuỗi duy nhất.
 */

// function fruitSalad(arr) {
//   let result = [];
//   for (let i of arr) {
//     let half = Math.floor(i.length / 2);
//     result.push(i.slice(0, half), i.slice(half));
//   }
//   return result.sort().join("");
// }
// console.log(fruitSalad("apple", "pear", "grapes"));


/**
 * 8.Viết hàm perimeter(coordinates) nhận tọa độ
 *  ba điểm dưới dạng mảng 2 chiều [x, y] và 
 * trả về chu vi hình tam giác.
 */

// function distance(p1, p2) {
//     return Math.sqrt(p1[0]- p2[0]) ** 2 + (p1[1]- p2[1])
// }


