import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlmakri',
    database: 'hy'
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE phone = ? AND password = ?";
    const values = [req.body.phoneNumber, req.body.password];
    console.log(values)

    db.query(sql, values, (err, data) => {
        if (err || data.length === 0) 
            {console.log(err);
            return res.status(401).json("Login failed");} // Send 401 status for unauthorized
        return res.json({ user: data[0], token: 'your_jwt_token' }); // Return user data and a token
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
