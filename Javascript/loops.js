//basic loop
// for(let i=1;i<=5;i++){
//     console.log(i);
// }


//revese loop
// for(let i=5;i>=1;i--){
//     console.log(i);
// }


// print odd no.
// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }

// print even no.
// for(let i=2;i<=10;i=i+2){
//     console.log(i);
// }


// number table
// let n= prompt("Bc number daaal");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// fav movie guess
// const favmovie = "anime";
// let guess=prompt("enter your guess");
// while((guess!=favmovie)&&(guess!="quit")){
//     guess=prompt("wrong guess..try again");
// }
// if(guess==favmovie){
//     console.log("congo.!!")
// }else{
//     console.log("you bitch..!!");
// }


// const favmovie = "anime";
// let guess=prompt("enter your guess");
// while(guess!=favmovie){
//     if(guess=="quit"){
//         console.log("you quit");
//         break;
//     }
//     guess=prompt("wrong guess..try again");
// }
// if(guess==favmovie){
//     console.log("congo.!!")
// }


//loop in array
// let arr=['a','b','c','d'];
// for(let i=0;i<arr.length;i++){
//     console.log(i,arr[i]);
// }


// nested array
// let  matrix = [
//   [1, 2, 3], // Row 0
//   [4, 5, 6], // Row 1
//   [7, 8, 9]  // Row 2
// ];
// for(let i=0;i<matrix.length;i++){
//     console.log(`list# ${i}`);
//     for(let j=0;j<matrix[i].length;j++){
//         console.log(matrix[i][j]);
//     }
// }


// for of loop
// let  matrix = [
//   [1, 2, 3], // Row 0
//   [4, 5, 6], // Row 1
//   [7, 8, 9]  // Row 2
// ];
// for(number of matrix){
//     for(num of number){
//         console.log(num);

//     }
   
// }


let num=[[1,2,3],[4,5,6]];
let lar=0;
let j=0;
for(let i=0;i<num.length;i++){
    
    for(j=i+1;j<num[i].length;j++){
        if(lar<num[i][j]){
            lar=num[i][j];

        }
    }

}
console.log(lar);