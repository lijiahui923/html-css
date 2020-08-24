// "use strict"; // 严格模式
const api = {
    api: 'http://lijiahui/api',
    host: 8080
}
// Object.freeze(api); // 冻结变量就修改不了
api.test = '1111';
api.host = '999';
console.log(api);


// function cube() {
//     return Array.from(arguments, value => value ** 3);  // 要有length才可以转换
//   }
// let arr = cube(1, 3, 5);
// console.log(arr);

// let arr = Array.of(3);
// console.log(arr);


// let [name, year] = ['asdd',20200];
// console.log(name);

const [...arr] = 'asdfe';
console.log(arr);
