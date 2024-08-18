import express from "express"
import mysql from "mysql"


const app=express()
const port=5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlmakri',
    database: 'hy'
})

app.get("/",(req,res)=>{
    res.json("hello this the backend");
})

app.get("/tables",(req,res)=>{
    const q="show tables;";
    db.query(q,(err,data)=>{
        if(err) console.log(err);
        else res.json(data);
    })
})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
  });