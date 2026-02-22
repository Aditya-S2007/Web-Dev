// let btns=document.querySelectorAll("button");
// console.dir(btns);

// // onclick
// // btn.onclick= function(){
// //     alert("chale jaa bsdk..!!");
// // };

// for(btn of btns){
//     // btn.onclick=sayhello;
//     // btn.onmouseenter=function name(){
//     //     console.log("hi");

//     // }
//     btn.addEventListener("dblclick",sayhello);
//     btn.addEventListener("click",say1hello);
//     btn.addEventListener("click",say2hello);
// }
// function sayhello(){
//     alert("ur hott");
// }
// function say1hello(){
//     alert("ur  fucking hott");
// }
// function say2hello(){
//     alert("ur super fucking hott");
// }


//this fuction 
// let btn=document.querySelector("button");
// let p=document.querySelector("p");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");

// function changecolor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }
// btn.addEventListener("click",changecolor);
// p.addEventListener("click",changecolor);
// h1.addEventListener("click",changecolor);
// h3.addEventListener("click",changecolor);


// keyboard event listerner

// let inp = document.querySelector("input");
// inp.addEventListener("keypress",function(event){
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     console.log("key was pressed");
// })

// move ur character
// let inp = document . querySelector("input") ;

// inp.addEventListener("keydown", function (event) {

//     console. log("code =", event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
//     if (event.code === "ArrowUp" || event.code === "KeyW") {
//         console. log ("character moves forward");
//     } else if (event.code === "ArrowDown"  || event.code === "KeyS") {
//         console. log ("character moves Downward");
//     } else if (event.code === "ArrowLeft"  || event.code === "KeyA") {
//         console. log ("character moves left");
//     } else if (event.code === "ArrowRight"  || event.code === "KeyD") {
//         console. log ("character moves right");
        
//     }  
// });

// form event 
// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form has been submitted");
// })

// extracting form data
// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user=document.querySelector("#user"); // or this.element[0];
//     let pass=document.querySelector("#pass");// or this.element[1];
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`hi ${user.value}, ur password is set to ${pass.value}`);
// })

// let inp= document.querySelector("#text");
// let p= document.querySelector("p");
// inp.addEventListener("input",function(){
//     console.log(inp.value);
//     p.innerText=inp.value;

// })

// q2
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="green";
//     console.dir(btn);
// })

// let inp= document.querySelector("input");
// let h2= document.querySelector("h2");

// inp.addEventListener("input" , function(){
//     console.log(inp.value);
//     h2.innerText=inp.value;
// })