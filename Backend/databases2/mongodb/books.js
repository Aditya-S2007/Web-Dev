const mongoose= require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test");
main()
    .then ( () =>{
    console. log ("connection successful");
    })

    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");

}

const bookSchema = new mongoose.Schema ({
    title:{
        type:String,
        require:true, // not null in sql lang
        maxLength:20, // max length which can be put
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"price is way too low"], // minimum
    },
    discount:{
        type:Number,
        default:0,
    },
    catgory:{
        type:String,
        enum:["fiction","non-fiction"], // out of this array (values) will give error
    },
    genre:{
        type:[String], // pass value through array
    },
});

const Book= mongoose.model("Book",bookSchema);

// let book1= new Book({
//     title:"Mathematics XII",
//     author:"RD Sharma",
//     price:1200,
// });



// book1.save()
//     .then((res)=>{
//         console.log(res);

//     })
//     .catch((err)=>{
//         console.log(err);

//     })

Book.findByIdAndUpdate('69c7bd37dc5793f052fdda68',{price:-500},{runValidators:true}) // its helps the above schema to be in rule applied in update
    .then((res)=>{console.log(res);
    })
    .catch((err)=>{
       console.log(err.errors.price.properties.message);
    });
    