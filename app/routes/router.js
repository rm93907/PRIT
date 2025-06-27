const express = require("express");
const router = express.Router();
const {body, validationResult} = require("express-validator")

router.get("/", (req, res) =>{
    res.render("pages/index");
}   );

res.render("pages/index")

module.exports = router;