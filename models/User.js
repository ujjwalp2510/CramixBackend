import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
      },
      name: {
        type: String,
        required: [true, "Your name is required"],
      },
      password: {
        type: String,
        required: [true, "Your password is required"],
      },
      createdAt: {
        type: Date,
        default: new Date(),
      },
    year: {
        type: Number,
        required: [true, "Your year of study is required"],
    },
    branch: {
        type: String,
        required: [true, "Your branch is required"],
    }
});
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });
const User = mongoose.model('User', userSchema);
export default User;