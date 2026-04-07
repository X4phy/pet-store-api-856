import express from 'express';
import morgan from 'morgan';
import petRouter from './routes/pet.routes';

const app = express();
const PORT = 3000;

// Middleware
app.use(morgan('dev'));         
app.use(express.json());      
// Routes
app.use('/api/pets', petRouter);

// Start
app.listen(PORT, () => {
  console.log(`Pet Store API running on http://localhost:${PORT}`);
});