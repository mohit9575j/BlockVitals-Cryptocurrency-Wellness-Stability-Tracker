
import { sequelize } from '../config/db.js';
import User from './user.model.js';
 
const db = {};
db.sequelize = sequelize;
db.User = User;
 

export { sequelize };
export default db;
 