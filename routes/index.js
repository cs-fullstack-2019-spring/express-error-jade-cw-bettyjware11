const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.send("Go to the index URL");
});

router.get("/Exercise1/:placeholder/:placeholder2", (req, res)=>{
    res.render("index", {placeholder: req.params.placeholder});
});

router.get("/Exercise2/:placeholder", (req, res)=> {
    var tempPlaceholder = "";
    if(req.params.placeholder <= "1"){
        tempPlaceholder = "Less than";
    }
    else{
        tempPlaceholder = "Greater than";
    }
    res.render("Exercise2", {placeholder: tempPlaceholder})
});


router.get("/Exercise3", (req, res)=>{
    res.send("No placeholders at the end of the URL");
});



module.exports = router;
