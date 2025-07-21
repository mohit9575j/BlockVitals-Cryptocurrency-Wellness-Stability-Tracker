 
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {sequelize} from './config/db.js';

import priceRoutes from './routes/priceRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import marketRoutes from './routes/marketRoutes.js';
import topCoinsRoutes from './routes/topCoinsRoutes.js';  
import coinChartRoutes from './routes/coinChartRoutes.js'; 
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());  
app.use('/api', priceRoutes);  
app.use('/api', newsRoutes);
app.use('/api', marketRoutes)
app.use('/api', topCoinsRoutes); 
app.use('/api', coinChartRoutes);  
app.use('/api/auth', authRoutes);



 
// DB Connection + Server start
const PORT = process.env.PORT || 5000;
sequelize.sync({alter: true }).then(() => {
  console.log(' DB connected');
  app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
});