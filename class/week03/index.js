import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res)=> {
    res.send ("Welcome to server -GET")
})

app.post("/", (req, res)=> {
    res.send ("Welcome to server -POST")
})

app.delete("/", (req, res)=> {
    res.send ("Welcome to server -DELETE")
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
}) 
