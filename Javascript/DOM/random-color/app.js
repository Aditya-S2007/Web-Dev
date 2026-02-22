let btn=document.querySelector("button");
btn.addEventListener("click", function(){
    let h3=document.querySelector("h3");
    let getcolor=getrandomcolor();
    h3.innerText=getcolor;
    div=document.querySelector("div");
    div.style.backgroundColor=getcolor;
    console.log("color updated")
});

function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}