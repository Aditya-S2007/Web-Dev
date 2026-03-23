const express= require("express");
const app =express();
// console.dir(app);
let port=3000;
app.listen(port,()=>{
    console.log(`sun rha hu bsdk..${port}`);
});
app.get("/",(req,res)=>{
    res.send("you touched my root");
});
// app.get("/apple",(req,res)=>{
//     res.send("you touched my apple");
// });
// app.get("/dick",(req,res)=>{
//     res.send("you touched my u-la-la");
// });
// app.use((req,res) => {
//     res.send("zyada tez mt bn lawde");
// });
// app.post("/",(req,res)=>{
//     res.send("you sent a post request to root");
// });
// app.use((req,res)=>{
//     console.log("request received");
//     res.send("basic request");
// });
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlstr=`<h1>welcome to the page of @${username}</h1>`
    res.send(htmlstr);
});
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("<h1>nothing search</h1>");
    }
    // res.send(`search result for query: ${q}`);
    res.send(`<h1>search result for query: ${q}</h>`);
});
