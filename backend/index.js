import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import authRoute from './src/routes/auth.route.js'; 

const app = express();
configDotenv();

app.use(cors());
app.use(express.json());   

// routes
app.use("/api/auth",authRoute);




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

