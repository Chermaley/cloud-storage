const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration',
    [
        check("email", 'Incorrect email').isEmail(),
        check("password", 'Password must be longer than 3 and shorted than 12').isLength({min:3,max:12})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        console.log(41)
        if(!errors.isEmpty()) return res.status(400).json({message: "Incorrect request",errors});

        const {email, password} = req.body;

        const candidate = await User.findOne({email});

        if (candidate) {
            return res.status(400).json({message: `User with email ${email} already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 10);

        const user = await new User({email, password: hashPassword});

        await user.save();

        return res.json({message: "User was created"});
    } catch (e) {
        console.log(e);
        res.send({message: "Server error"})
    }
})

router.post('/login', async (req, res) => {
        try {
           const {email, password} = req.body;

           const candidate = await User.findOne({email});

           if (!candidate) return res.status.json({message: "Invalid email or password"});

           const isPassValid = bcrypt.compareSync(password, candidate.password);

           if (!isPassValid) return res.status(400).json({message: "Invalid email or password"});

           const token = jwt.sign({id: candidate.id}, config.get("secretKey"), {expiresIn: "1h"})
           return res.json({
               token,
               user: {
                   id: candidate.id,
                   email: candidate.email,
                   diskSpace: candidate.diskSpace,
                   usedSpace: candidate.usedSpace,
                   avatar: candidate.avatar
               }
           });
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"})
        }
    })


router.get('/auth', authMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id})
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        });
    } catch (e) {
        console.log(e);
        res.send({message: "Server error"})
    }
})

module.exports = router;

export {}