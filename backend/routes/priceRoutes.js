 
import express from 'express';
import { getCryptoPrices } from '../controllers/priceController.js';

const router = express.Router();

router.get('/prices', getCryptoPrices);  

export default router;
