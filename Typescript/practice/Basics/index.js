"use strict";
// type Person = {
//     name: string;
// }
// const person : Person = {
//     name: "John",
// };
// console.log(person.name)
// const person : {name: string, age: number, dob?: number} = {
//     name: "Abhi",
//     age: 20
// }
// console.log(person)
// type computer = {
//     name: string
//     age: number
//     (name: string) : void
//     walk: (name:string) => void
// }
// interface Human {
//     name: string
//     age: string | number
//     walk: (name:string) => void
//     sleep: (name:string) => void
// }
// const person: Human = {
//     age: 20,
//     name: "Abhi",
//     walk: (name) => {
//         console.log("Abhi is walking")
//     },
//     sleep : (name) => {
//         console.log("sleeping");
//     }
// }
// console.log(person)
// function printNumber(item: number, defaultValue: number): [number, number ]{
//     return [item, defaultValue]
// }
// const num = printNumber(3,4)
// console.log(num)
// //Generic function -
// function uniqueDataTypesFunc<Type>(item: Type, defaultValue: Type): [Type,Type] {
//     return [item, defaultValue];
// }
// const res = uniqueDataTypesFunc<number>(10,20);
// console.log(res)
function filterArray(arr, condition) {
    let temp = arr.filter((item) => condition(item));
    return temp;
}
const filterArrayArrow = (arr, condition) => {
    let temp = arr.filter((item) => condition(item));
    return temp;
};
let temp = filterArray([3, 4, 6, 8, 5, 3], (item) => item % 2 === 0);
console.log(temp); //[ 4, 6, 8 ]
let stringArr = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray(stringArr, (word) => word.length < 6);
console.log(shortWords); //[ 'apple', 'date' ]
const fruitArr = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
];
const redFruits = filterArray(fruitArr, (fruit) => fruit.color == "Red");
console.log(redFruits); //[ { name: 'Apple', color: 'Red' }, { name: 'Cherry', color: 'Red' } ]
