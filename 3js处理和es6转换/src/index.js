const a = require('./a');

console.log(a);
require('./index.css');

let fn = () => {
    console.log('es6')
};
fn();

@log
class A {
    a = 1;
}
let aa = new A();
console.log(aa.a);

function log(target) {
    console.log(target);
}