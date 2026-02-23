const sum = (a,b)=>a+b; // or module.exports.sum = (a, b) => a + b; or exports.sum = (a, b) => a + b;
const mul = (a,b)=>a*b;
const g= 9.8;
const PI=3.14;
let obj={  // or module.exports={obj}
    sum:sum,
    mul:mul,
    g: g,
    PI:PI,
}
module.exports=obj;