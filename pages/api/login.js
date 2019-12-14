import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import Cart from '../../models/Cart';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1) Check to see if the user already exists in the db
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      // 2) --if not, hash their password
      return res.status(404).send('No user exists with that email');
    }
    // 3) bcrypt user
    const passwordsMatch = await bcrypt.compare(password, user.password);
    // check matching password in database
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });
      // 5) send that token to the client
      res.status(200).json(token);
    } else {
      res.status(401).send('Passwords do not match');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in user');
  }
};
