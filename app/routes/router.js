const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const {body, validationResult} = require("express-validator")

app.use(express.static("./app/public"));

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const rotaPrincipal = require("./app/routes/router");
app.use("/", rotaPrincipal);

app.listen(port, ()=>{
    console.log(`Servidor onLine!\nhttp://localhost:${port}`);
})