import { Router } from 'express';
import { login } from '../controllers/authController';
// a seperate route for authentication
const router = Router();

router.post('/login', login);

export default router;
