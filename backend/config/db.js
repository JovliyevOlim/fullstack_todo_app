const mongoose = require('mongoose');

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    console.log(`MongoDB is now Connected ${conn.connection.host}`.cyan.underline.bold);
}


module.exports = connectDB;