import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

//importing routes
import eastAfrica from './routes/eastAfrica.mjs';
import westAfrica from './routes/westAfrica.mjs';
import northAfrica from './routes/northAfrica.mjs';


dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


// Routes
app.get('/', (req, res) => {
  res.send(`Have a good Day`);
});
//used routes

app.use('/EA', eastAfrica);
app.use('/WA', westAfrica);
app.use('/NA', northAfrica);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Wrong Username and Password");
});

//adding indexes

// Listen for Port
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
