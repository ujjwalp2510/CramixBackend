import mongoose from 'mongoose'
import 'dotenv/config.js';

const mongoURI = process.env.MONGODB_URI;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

export default connectToMongo;