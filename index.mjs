import express from "express";
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/abc", (req, res) => {
    console.log("Requested ip: " + req.ip + new Date());
    res.send("Hello World!" + new Date());
});

const __dirname = path.resolve();


app.use('/', express.static(path.join(__dirname, './web/build')));

app.listen(port, () => {
    console.log("Server is running on port: " + port);
})