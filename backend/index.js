import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import authRoute from './src/routes/auth.route.js';
import messageRoute from './src/routes/message.route.js';
import { connectDB } from './src/lib/conn.js';
import cookieParser from 'cookie-parser';

const app = express();
configDotenv();

app.use(cors());
app.use(express.json());   
connectDB();
app.use(cookieParser());
// routes
app.use("/api/auth",authRoute);
app.use('/api/message',messageRoute);




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

