import express from 'express';
import dotenv from 'dotenv';


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
app.use('/eastAfrica', eastAfrica);
app.use('/westAfrica', westAfrica);
app.use('/northAfrica', northAfrica);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Wrong Username and Password");
});



// Listen for Port
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});



