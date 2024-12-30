import express from  "express";
import dotenv from  "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('server is running!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
