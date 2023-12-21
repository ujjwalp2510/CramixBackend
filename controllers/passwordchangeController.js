import User from '../models/User.js';
import bcrypt from 'bcrypt';

const passwordChange = async (req, res, next) => {
    try {
        const {email, newPassword} = req.body;
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        await User.findOneAndUpdate({ email: email }, { password: hashedPassword });
        res.json({
          msg:"Updated",
          success:true,
        })
      next();
    } catch (error) {
      res.json({
        msg:"Error",
        success:false,
      })
    }
  };
  export default passwordChange;