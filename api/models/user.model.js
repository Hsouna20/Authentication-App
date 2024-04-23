import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
        type: String,
        default:
          'https://th.bing.com/th/id/OIP.jo-o9weVfRQHgx6iXvV9wAHaEq?rs=1&pid=ImgDetMain',
      },
      isAdmin:{
        type: Boolean , 
        default: false
      }
  },
  { timestamps: true }
);

const User = mongoose.model('users', userSchema);

export default User;