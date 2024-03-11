import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import mongodb from 'mongodb';
import eastAfrica from './routes/eastAfrica.mjs';
import westAfrica from './routes/westAfrica.mjs';
import northAfrica from './routes/eastAfrica.mjs';
import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// db.js
const connectToMongoDB = async () => {
  try {
    const client = new MongoClient(process.env.urlencoded, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log('Connected to MongoDB');
    
    // If you need to work with a specific database, you can get a reference to it here
    // const db = client.db('mydatabase');

    return client; // Return the client object for external use
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Rethrow the error for handling in other parts of the application
  }
};

export default connectToMongoDB;


// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(`Have a good Day`);
});
app.use('/eastAfrica', eastAfrica);
app.use('/westAfrica', westAfrica);
app.use('/northAfrica', northAfrica);
app.use(express.urlencoded({ extended: false }));

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Wrong Username and Password");
});

// Connect to MongoDB
connectToMongoDB();

// Listen for Port
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});



