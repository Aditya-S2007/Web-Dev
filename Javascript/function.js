// function printpeom(){
//     console.log("Twinkle, twinkle, little star, how I wonder what you are. Up above the world so highlike a diamond in the sky. Twinkle, twinkle, little star, how I wonder what you are");
// }
// printpeom();  


// function rolldice(){
//     let dice= Math.floor(Math.random()*6)+1;
//     console.log(dice);
// }
// rolldice();
// rolldice();
// rolldice();
// rolldice();
// rolldice();
// rolldice();


//avg of 3
// function calavg(a,b,c){
//     let avg=(a+b+c)/3;
//     console.log(avg);
// }
// calavg(1,2,3);


// multi table
// function multi(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
// }
// multi(5);

// sum 1to n
// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans=ans+i;
        
//     }
//     return ans;
// }
// console.log(sum(4));

//concat
// function concat(str){
//     let result="";
//     for(let i=0;i<str.length;i++){
//         result+=str[i];
//     }
//     return result;
// }


// multi greeting function
// function multi(func,ctr){
//     for(let i=1;i<=ctr;i++){
//         func();
//     }
// }

// let greet =function(){
//     console.log("hello");
// }
// multi(greet,2);

// calculator
// const cal={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     }
// }

// time-out func

// console.log("aditya");
// setTimeout(()=>{
//     console.log("welcome back..!!!");
// },5000);
// console.log("sharma");


// squareroot
// let squ=(n) =>(n*n);



let id =setInterval(()=>{
    console.log("apna college");
},2000);

setInterval(()=>{
    clearInterval(id);
    console.log("run has ended");
},10000);