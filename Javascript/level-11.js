// call stack
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// callback hell or nesting

// let h1= document.querySelector("h1");

// function changecolor(color,delay,nextcolorchange){
//     setTimeout(() =>{
//         h1.style.color=color;
//         if(nextcolorchange) nextcolorchange();
//     },delay);
// }

// changecolor("red",1000,() =>{
//     changecolor("orange",1000,() =>{
//         changecolor("green",1000, () =>{
//             changecolor("yellow",1000,() =>{
//                 changecolor("blue",1000);
//             });
//         });
//     });
// });

// promises
// function savetodb(data,success,failure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetodb("champa" ,() =>{
//     console.log("success :your data has saved ");
//     savetodb("sharma", ()=>{
//         console.log("success2 :your data2 has saved ");
//         savetodb("vansh", ()=>{
//            console.log("success3 :your data3 has saved "); 
//            savetodb("bhatia",()=>{
//                 console.log("success4 :your data4 has saved "); 
//            },()=>{
//                 console.log("failure4 :weak connection . data4 not saved");
//            });
//         }, ()=>{
//             console.log("failure3 :weak connection . data3 not saved");
//         });
//     },()=>{
//         console.log("failure2 :weak connection . data2 not saved");

//     });
// }, () =>{
//     console.log("failure :weak connection . data not saved");
// });

// reject& resolve

// function savetodb(data) {
//     return new Promise((resolve,reject) =>{
//         let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed > 4){
//         resolve("success : data was saved");
//     }else{
//         reject("failed : poor connetion");
//     }
//     });
// }

// savetodb("apna college")
//     .then(() =>{
//         console.log(" data1:promise was resolved");
//         return savetodb("aditya");
//     })
//     .then(() =>{
//         console.log("data2:promise was resolved");
//         return savetodb("sharma");
//     })
//     .then(()=>{
//         console.log("data3:promise was resolved");
//     })
//     .catch(() =>{
//         console.log("promise was rejected");
//     });


// result & error
// savetodb("apna college")
//     .then((result) =>{
//         console.log(" data1:promise was resolved");
//         console.log("result :",result);
//         return savetodb("aditya");
//     })
//     .then((result) =>{
//         console.log("data2:promise was resolved");
//         console.log("result :",result);
//         return savetodb("sharma");
//     })
//     .then((result)=>{
//         console.log("data3:promise was resolved");
//         console.log("result :",result);
//     })
//     .catch((error) =>{
//         console.log("promise was rejected");
//         console.log("error :",error);
//     });


// change color using promise

// let h1= document.querySelector("h1");
// function changecolor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             console.log(`color has changed to ${color}.!`);
//             resolve("color changed")
//         },delay);

//     });
// }
// changecolor("red",1000)
// .then(()=>{
//     console.log("red completed");
//     return changecolor("green",1000);
// })
// .then(()=>{
//     console.log("green completed");
//     return changecolor("orange",1000);
// })
// .then(()=>{
//     console.log("orange completed");
//     return changecolor("pink",1000);
// })
// .then(()=>{
//     console.log("pink completed");
    
// })


//Async function

// async function greet() {
//     // throw "page 404 ";
//     return "hello..!";
// }
// greet()
//     .then((result)=>{
//         console.log("promise was resolved");
//         console.log("result was:",result);

//     })
//     .catch((err)=>{
//         console.log("promise was rejected ",err);
//     });

// change color
// async function demo() {
//    await changecolor("red",1000);
//    await changecolor("blue",1000);
//    await changecolor("green",1000);
//    await changecolor("orangr",1000);
//    await changecolor("purple",1000);
// }

let div = document.querySelector(".box");

function changecolor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num= Math.floor(Math.random()*5)+1;
            if(num>3) {
                reject("promise rejected");
            }
            div.style.backgroundColor=color;
            console.log(`the is ${color}`);
            resolve();
        },delay);

    });

}
async function demo() {
    try{
        await changecolor("red",1000);
        await changecolor("yellow",1000);
        await changecolor("green",1000);
    } catch(err){
        console.log(err);

    }
    let number=1;
    console.log(number);
    
}
