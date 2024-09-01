import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
const port = 5000;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlmakri',
    database: 'hy'
})

app.post('/login', (req, res) => {
    const sql = " select * from login where user_id=? and password=?";
    const values = [
        req.body.username,
        req.body.password];
        db.query(sql, values, (err, data) => {
            if(err || values[0].username==null) return res.json("Login failed");
            return res.json(data);
        })

})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});