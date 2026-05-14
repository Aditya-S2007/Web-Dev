const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main()
    .then(() => {
        console.log("connection is working");
    })
    .catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};
let allChats=[
    {
    from: "neha",
    to: "priya",
    msg: "send noods",
    create_at: new Date(),
},
{
    from: "neha_1",
    to: "priya_1",
    msg: "send noods",
    create_at: new Date(),
},
{
    from: "neha_2",
    to: "priya_2",
    msg: "send noods",
    create_at: new Date(),
},
{
    from: "neha_3",
    to: "priya_3",
    msg: "send noods",
    create_at: new Date(),
},
];
Chat.insertMany(allChats);

