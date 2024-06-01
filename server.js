const express = require('express')
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotEnv.config();

const app = express()
const port = process.env.PORT || 4500;

// Connection URI (replace with your actual database URI)
const uri = process.env.URI;

// Connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Add other options as needed, e.g., retryWrites, connectTimeoutMS 
};

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    // Start your application logic here (e.g., create an Express server)
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Optional: Handle disconnections and other events
// mongoose.connection.on('disconnected', () => {
//   console.log('Disconnected from MongoDB!');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })