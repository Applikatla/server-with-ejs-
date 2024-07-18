import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", (req, res) => {
    console.log(req.body);
    const x = req.body["fname"].length + req.body["lname"].length;
    res.render("index.ejs", { nameLength: x});
})

app.listen(port, () => {
    console.log("server running on port 300");
})