import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // cors setup
app.use(express.json());

app.use('/api/auth', authRoutes); // use the routes specifies in authRoutes for /api/auth

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
