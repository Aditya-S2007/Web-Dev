//q1

// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=5

// function getelement(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(num<arr[i]){
//             console.log(arr[i]);
//         }
//     }
// }
// getelement(arr,num);


//q2

let str="abcdabcdefgggh";

function getunique(str){
    let ans="";
    for(let i=0;i<str.length;++i){
        let curr=str[i];
        if(ans.indexOf(curr)==-1){
            ans+=curr;
        }
    }
    return ans;
}
getunique(str);