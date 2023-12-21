import User from '../models/User.js';
import bcrypt from 'bcrypt';
import createSecretToken from '../util/SecretToken.js';

const Signup = async (req, res, next) => {
  try {
    const { email, name, password, createdAt, year, branch } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, name, password, createdAt, year, branch });
    const token = createSecretToken(user._id);
    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
      token,
    });
    next();
  } catch (error) {
    console.error(error);
  }
};
const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
      token,
    });    
     next()
  } catch (error) {
    console.error(error);
  }
}
export {Signup, Login};