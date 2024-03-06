import express from 'express';
import dotenv from 'dotenv';


dotenv.config()
const app = express()
const PORT = process.env.port || 3000


//Middleware
app.use(express.json())


//Routes
app.get('/', (req, res)=>{
    res.send(`Have a good Day`)
})


// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Wrong Username and Password");
  });


//Listen for Port
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})


