require('dotenv').config();
const app= require('./src/app');
const ConnectDB = require('./src/config/db');
const logger =require('./src/utils/logger');



ConnectDB();

Port=process.env.PORT || 5000
async function start() {
    await ConnectDB();
    app.listen(Port,()=>{
    logger.info(`Server running on port ${Port} in ${process.env.NODE_ENV} mode`);
})
}
