const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
require('./mongoDB/mongooes')

app.listen(1030, () => {
    console.log("Sever Start...");
});

app.get("/api", (req, res) => {
    return res.json({ message: "message" });
});

app.use('/',(req,res)=>{
    return res.send("<h1 align='center'>Blog Backend</h1>");
})
console.log("Hello World!......");