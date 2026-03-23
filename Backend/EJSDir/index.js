const express= require("express");
const app= express();
const path= require("path");
let port=3000;
app.use(express.static( path.join(__dirname,"public/CSS")));
app.use(express.static( path.join(__dirname,"public/JS")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get(("/ig/:username"),(req,res)=>{
    // const follower=["a","d","i","t","y","a"];
    let {username} =req.params;
    const instaData= require("./data.json");
    const data =instaData[username];
    // console.log(data);
    if(data){
        res.render("insta.ejs",{data});
    }else{
        res.render("error.ejs");
    }

    
});
app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
});

app.listen(port,()=>{
    console.log(`app is listening ${port}`);
});

