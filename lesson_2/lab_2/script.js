// <!-- Tính chỉ số BMI
// Viết hàm findBMI(w, h), hàm nhận 2 tham số:

// w là số cân nặng (kg)
// h là chiều cao (m)
// Tính chỉ số BMI (Body Mass Index) và trả về kết quả, quy định như sau:

// BMI = w / (h**2)
// BMI <= 16: Gầy độ III
// 16 < BMI <= 17.5: Gầy độ II
// 17.5 < BMI <= 18.5: Gầy độ I
// 18.5 < BMI <= 25: Bình thường
// 25 < BMI <= 30: Hơi béo
// 30 < BMI <= 35: Béo phì độ I
// 35 < BMI <= 40: Béo phì độ II
// 40 < BMI: Béo phì độ III -->

// function findBMI(w, h) {
//     return BMI = w / h ** 2;
// }
// let BMI = findBMI(70, 1.72);
// if (BMI <= 16) {
//   console.log("gầy độ III");
// } else if (16 < BMI && BMI <= 17.5) {
//   console.log("gầy độ II");
// } else if (17.5 < BMI && BMI <= 18.5) {
//   console.log("gầy độ I");
// } else if (18.5 < BMI && BMI <= 25) {
//   console.log("bình thường");
// } else if (25 < BMI && BMI <= 30) {
//   console.log("hơi béo");
// } else if (30 < BMI && BMI <= 35) {
//   console.log("béo phì độ I");
// } else if (35 < BMI && BMI <= 40) {
//   console.log("béo phì độ II");
// } else {
//     console.log("béo phì độ III");
// }

// Kiểm tra số lớn nhất
// Viết hàm findMax(a, b, c),
// hàm nhận 3 tham số a, b, c là 3 số bất kỳ.
// Kiểm tra và trả về kết quả số lớn nhất trong 3 số
// function findMax(a, b, c) {
//     let max = a;
//     if (b > max) max = b;
//     if (c > max) max = c;

//     return max;
// }

// findMax(1, 2, 3);
// console.log(findMax(1, 2, 3));

// Kiểm tra năm nhuận
// Viết hàm isLeafYear(y) kiểm tra một năm (y) có phải năm nhuận hay không và trả về kết quả là true hoặc false

// 💡 Năm nhuận là năm có số năm chia hết cho 400, hoặc chia hết cho 4 nhưng không chia hết cho 100

// function isLeafYear(y) {
//     return y % 400 == 0 || (y % 4 == 0 && y % 100 != 0);
// }
// console.log(isLeafYear(2010));
// console.log(isLeafYear(2200));
// console.log(isLeafYear(2100));
// console.log(isLeafYear(2008));

//Viết chương trình lặp giá trị i từ 1 đến 10, với mỗi giá trị i,
//  kiểm tra xem nó là chẵn hay lẻ và in ra console

// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0) {
//         console.log(i + " So chan");
//     } else {
//         console.log(i + " so le");
//     }
// }


// Viết chương trình lặp giá trị i từ 1 đến 10, với mỗi giá trị i, kiểm tra xem:
// Nếu i chia hết cho 3 thì in ra console “Fizz”
// Nếu i chia hết cho 5 thì in ra console “Buzz”
// Nếu i chia hết cho cả 3 và 5 thì in ra “FizzBuzz”

// for (let i = 0; i <= 10; i++){
//     if (i % 3 == 0) {
//         if (i % 5 == 0) {
//             console.log("fizzbuzz");
//         } else {
//             console.log("fizz");
//         }
//     } else {
//         console.log("buzz")
//     }

// }

// Viết chương trình kiểm tra xem một số nguyên dương n có phải số nguyên tố hay không
// số nguyên tố là số nguyên dương lớn hơn bằng 2 và  chỉ chia hết cho 1 và chính nó

// let n = 101;
// if (n < 2) console.log(n, "khong phai so nguyen to");
// else {
//     let isPrime = true;

//     for (let i = 2; i <= n / 2; i++){
//         if (n % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) console.log(n, "la so nguyen to");
//     else console.log(n, "khong la so nguyen to");
// }

// Tính số lần gấp giấy
// Viết chương trình tính và in ra số lần tối thiểu để gấp một tờ giấy có độ dày 0.1mm để được độ dày 1m


// let paperThickness = 0.1;
// let count = 0;
// while (paperThickness < 1000) {
//     paperThickness *= 2;
//     count++;
// }
// console.log(count, paperThickness);


// Tính tuổi cha con
// Viết chương trình nhập vào tuổi của cha và con hiện tại,
// tính và in ra xem bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con

// let tuoiCon = 3;
// let tuoiCha = 29;
// let count = 0;
// while (tuoiCon * 2 != tuoiCha) {
//     tuoiCon++;
//     tuoiCha++;
//     count++;
// }
// console.log(count);

// Bài toán gà và chó
// Vừa gà vừa chó
// Bó lại cho tròn
// Ba mươi sáu con
// Một trăm chân chẵn
// Tính và in ra số chân gà và chó
// for (let i = 12; i < 24; i++){
//     if (2*i+ (36-i)*4 == 100) {
//         console.log(i + " con ga");
//         console.log(36-i + " con cho")
//     }
// }


// Số Fibonacci
// Viết chương trình nhập vào một số n. Tính và in ra số fibonacci thứ n

// (*) Dãy Fibonacci là dãy số bắt đầu bằng 0 và 1, các số sau bằng tổng 2 số trước đó cộng lại (0 1 1 2 3 5 ...)

// (*) n = 3 => Số thứ 3 trong dãy fibonacci là số 1

function fibonacci(n) {
    let a = 0, b = 1, c;

    if (n <= 0) return "N phai lon hon 0"
    if (n)
 
}