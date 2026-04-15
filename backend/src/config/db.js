const mongoose=require('mongoose');
const logger = require('../utils/logger');


async function ConnectDB() {
    try{
   const conn= await mongoose.connect(process.env.MONGODB_URI);
     logger.info(`MongoDB connected: ${conn.connection.host}`);
    console.log('database is also doing welll');
    }
    catch(error){
        logger.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
}



module.exports=ConnectDB;