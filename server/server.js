import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminroutes.js';



const app = express();

await connectDB()


app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API is work");
});
app.use("/api/admin", adminRouter)



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

