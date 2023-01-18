const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());




const getIpCall = (req, res, next) => {
    res.send(req.ip);
    console.log('request received from ip: ' + req.ip);

    next();
}

app.use('/', getIpCall, (req, res) => { res.send(new Date()); });
app.use('/findMyMac', require('./systemFolder/index.js'))
// app.use('/userhit', require('./userFolder/index.js'))

app.listen(PORT, () => { console.log("Server Running... ") });