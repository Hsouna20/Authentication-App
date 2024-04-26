import express from 'express' ;
import mongoose from 'mongoose' ;
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.routes.js'


dotenv.config();
mongoose.connect('mongodb://127.0.0.1:27017/authentication', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDb is connected');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
const app = express() ;
app.use(express.json());

app.listen(3000, () =>{
    console.log('server is running: port 3000!!!');
})

app.use('/api/user' , userRoutes)
app.use('/api/auth' , authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
