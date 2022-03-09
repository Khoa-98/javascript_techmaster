// bài tập:
let person = {
    name: "Khoa",
    age: 24,
    address: "Nam Dinh",
    favourite: ["eat", "sleep"],
    study() {
        console.log("very good")
    }
};

function display(obj, key) {
    console.log(obj[key]);
    if (typeof (obj[key]) == "function") {
        obj[key]();
    } else {
        console.log(obj[key]);
    }
}

display(person, study())

// let a = 1,
//     b = (a * 2) / 2,
//     c = a-- + b++,
//     d = "-0";

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// console.log(a - b - c - d);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(a + b - c + d);
// console.log(a++ - (b++ / c) * d);
// console.log(--a + -b / c - d);
// console.log(d - --a - ++b * c);

