const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

// DB connection
const Connection = require('./Database/db.js');

// Routers
const doctorRoutes = require('./Routes/doctorRoutes.js'); 

// Middleware
app.use(cors());
app.use(express.json());

// Use Routers
app.use('/api', doctorRoutes); 

// Start Server
const PORT = process.env.PORT || 5000;
Connection();
app.listen(PORT, () => console.log(`Server is running at Port number ${PORT}`));
