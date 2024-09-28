import express from 'express';
import bodyParser from 'body-parser';
import User from '../Models/userModel.js'

const router = express.Router();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());


//All user routes

//for signup
router.post('/signup', async(req, res) => {

    console.log('Signup Request Body:', req.body);

    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: 'Enter all required fields.',
            });
        }

        const newUser = {
            name: username,
            email: email,
            password: password
        }

        const user = await User.create(newUser);
        return res.status(201).json(user);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }

});

//Route to login a user.
router.post('/login', async(req, res) => {
    
    console.log('Signup Request Body:', req.body);
    
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please enter both email and password.' });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User not found.' });
        }

        const isMatch = await user.matchPassword(password); // This uses bcrypt.compare() from your model method

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password.' });
        }


        res.status(200).json({
            message: 'Login successful',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

export default router;