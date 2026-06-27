const User = require("../Models/UserSchema");
const jwt = require("jsonwebtoken");

// Register
const register = (req, res) => {

    // Check password and confirm password
    if (req.body.password !== req.body.confirmPassword) {
        return res.json({
            msg: "Passwords do not match"
        });
    }

    User.findOne({ email: req.body.email })
        .then((existingUser) => {

            if (existingUser) {
                return res.json({
                    msg: "User already exists"
                });
            }

            let data = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: "user"
            });

            data.save()
                .then((result) => {
                    res.json({
                        msg: "Registered Successfully",
                        user: result
                    });
                })
                .catch((err) => {
                    res.json({
                        err: err
                    });
                });

        })
        .catch((error) => {
            res.json({
                err: error
            });
        });
};

// Login
const login = (req, res) => {

    User.findOne({ email: req.body.email })
        .then((user) => {

            if (!user) {
                return res.json({
                    msg: "User not found"
                });
            }

            if (user.password !== req.body.password) {
                return res.json({
                    msg: "Wrong Password"
                });
            }

            const token = jwt.sign(
                {
                    id: user._id,
                    role: user.role
                },
                "secretkey",
                {
                    expiresIn: "1d"
                }
            );

            res.json({
                msg: "Login Success",
                token: token,
                role: user.role,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });

        })
        .catch((error) => {
            res.json({
                err: error
            });
        });

};

// Get User
const getUser = async (req, res) => {

    try {

        const userid = req.params.userid;

        const user = await User.findById(userid);

        if (!user) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        res.json(user);

    } catch (err) {

        res.status(500).json({
            msg: err.message
        });

    }

};

module.exports = {
    register,
    login,
    getUser
};