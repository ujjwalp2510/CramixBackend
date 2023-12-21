import mongoose from 'mongoose'

const mongoURI = process.env.MONGODB_URI;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

export default connectToMongo;