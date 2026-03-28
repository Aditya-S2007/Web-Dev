const mongoose= require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test");
main()
    .then ( () =>{
    console. log ("connection successful");
    })

    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User=mongoose.model("User",userSchema);

// const user2= new User({
//     name:"eve",
//     email:"eve@.in",
//     age:48,
// });

// user2.save()
//     .then((res)=>{
//         console.log(res);

//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// insert multiple

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res)=>{
//     console.log(res);
// });

// find
// User.find({age:{$gte:47}})
// User.findById("69c41ef34ffa0507f0cf35c0")
//     .then((res)=>{
//         console.log(res[0]); // [0] to remove array from the output
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

//update
// User.updateOne({name:"Bruce"},{age:49})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// update many 
// User.updateMany({age:{$gt:48}},{age:55})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

//findOneAndUpdate
// User.findByIdAndUpdate("69c67404c48b35412ef82f01",{age:46},{new:true})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// delete
// User.deleteOne({name:"Bruce"})
//     .then((res)=>{
//         console.log(res);
//     });

//many delete
// User.deleteMany({age:{$eq:48}})
//     .then((res)=>{
//         console.log(res);
//     });

//findByAndDelete
// User.findByIdAndDelete('69c5774605501ba2f15b826a')
//     .then((res)=>{
//         console.log(res);
//     });

// findOneAndDelete
// User.findOneAndDelete({name:"Peter"},{new:true})
//     .then((res)=>{console.log(res)});
