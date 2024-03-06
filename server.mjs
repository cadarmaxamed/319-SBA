import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(`Have a good Day`);
});

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



