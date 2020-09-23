

// for (let i=0; i<arr.length; i++){
    // console.log(arr[i]);}

//arr.forEach(function(item,i,arr) {
//console.log(`${i}: ${item} in ${arr}`);})

//const str = prompt("","")
//const products = str.split (", ");
//products.sort();
//console.log(products.join("; "));





function copyIn (mainObj) {
let objCopy = {};
let key;
for (key in mainObj) {
    objCopy[key] = mainObj[key];
}
return objCopy;
}

const number = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y: 4
    }
};

const newNumbers = copyIn(number);

newNumbers.a =10;

console.log(newNumbers);

const add = {
    d: 17,
    d:20
};

console.log(Object.assign(number, add));

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b','c'];
const newArray = oldArray.slice();
console.log()

newArray[1] = 'asasdas';
console

const video = ['yutv', 'vimeo', 'rutube'],
blogs = ['wp', 'jj'],

internet = [...video, ...blogs, 'vk', 'fb'] 


let str = 'some';
let strObj = new String (str);

const soldier = {
  
    health:300,
    armor:100
};

const john = Object.create(soldier);

Object.setPrototypeOf(john, soldier);
