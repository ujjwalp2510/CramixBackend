import mongoose from 'mongoose'

const mongoURI = "mongodb+srv://cramix:cramix.01@cluster0.lmsjz4l.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

export default connectToMongo;