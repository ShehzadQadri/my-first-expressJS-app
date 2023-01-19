const express = require("express");
const router = express.Router();
const os = require('os').networkInterfaces();

const mac = JSON.stringify(os, null, 2).match(/"mac": ".*?"/g).toString().match(/\w\w:\w\w:\w\w:\w\w:\w\w:\w\w/g)

let obj = new Object();

const showIP = (req, res, next) => {
    console.log("request received from ip: " + req.ip)
    obj.ip = "request received from ip: " + req.ip;
    next();
}

router.get("/", showIP, (req, res) => {
    console.log("request received from mac:", mac);
    obj.mac = "request received from mac:" + mac[2];

    res.send(obj);
});

module.exports = router;
