//q1
// let arr=[1,2,3,4,5,6,7,8];
// let arravg =(arr) =>{
//     let sum=0
//     let avg;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
        

//     }
//     return avg=sum/arr.length;

// } 
// console.log(arravg(arr));


//q2
// let iseven= (num)=>{
//     if(num%2==0){
//         console.log("its even");
//     }else{
//         console.log("it's not even");
//     }
//     // iseven();

// }
// console.log(iseven(5));

// let num=4;
// const isEven=(num)=> num%2==0;
// console.log(isEven(num));



// q3
// let country =["Australia","Germany","UnitedStatesofAmerica"];
// function longestName(country) {
//     let ansIdx=0;
//     for(let i=0;i<country.length;i++){
//         let ansLen=country[ansIdx].length;
//         let currLen=country[i].length;
//         if(currLen>ansLen) {
//             ansIdx=i;
//         }
        
//         return country [ansIdx];
//     }
// }
// longestName(country);


//q4
// let str="apnacollege";
// function countVowels(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
//             count++;
//         }
//     }
//     return count;
// }

//q5
// let start=100;
// let end=200;
// function generateRandom(start,end){
//     let diff=end-start;
//     return Math.floor(Math.random()*diff)+start;
// }


// let num=[1,2,3,4,5,6];
// let res=num.reduce((min,ele) =>{
//     if(min<ele){
//         return min;
//     }else{
//         return ele;
//     }
// });
// console.log(res);

let num=[1,2,3,4,5,6];
let res=num.every((ele)=>(ele%10==0));
console.log(res);



