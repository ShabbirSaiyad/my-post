const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const route = require('./routes/route');
const cors = require('cors');



const app = express();
const PORT = 4000;

// Allow requests from http://localhost:3000
  // origin: 'https://letspostit.netlify.app' 
app.use(cors({ 

  origin: 'http://localhost:3000', 
  // methods: ['GET', 'POST', 'OPTIONS'], // Add the methods you want to allow
  // allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Serve static files from the public directory
app.use('/og-images', express.static(path.join(__dirname,'controller', 'public', 'og-images')));



app.use('/api/v1', route );

app.listen(PORT, () => {
    console.log(`OG Image Generator running at http://localhost:${PORT}`);
  });
