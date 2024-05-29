const User = require('../models/user');

exports.registerUser = async (req, res) => {
    try {
        const user = await User.create({
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
        })
        res.status(201).json({
            status: 'Created',
            message: 'User registered successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password,
            }
        })
        if (!user) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User not found'
            })
        }
        res.status(200).json(newsletter)
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.uploadAvatar = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                nickname: req.body.nickname,
            }
        })
        if (!user) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User not found'
            })
        }
        user.avatar = req.body.avatar
        await user.save()
        res.status(200).json({
            status: 'OK',
            message: 'Avatar uploaded successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.updateNickname = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                nickname: req.body.current,
            }
        })
        if (!user) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User not found'
            })
        }
        user.nickname = req.body.nickname
        await user.save()
        res.status(200).json({
            status: 'OK',
            message: 'Nickname updated successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.updateUserDetails = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                nickname: req.body.current,
            }
        })
        if (!user) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User not found'
            })
        }
        user.nickname = req.body.nickname
        user.email = req.body.email
        user.password = req.body.password
        user.avatar = req.body.avatar
        await user.save()
        res.status(200).json({
            status: 'OK',
            message: 'User details updated successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.getAllUsers = async (req, res) => {
    const user = await User.findAll()

    if (!user) {
        return res.status(404).json({
            status: 'Not Found',
            message: 'No users found'
        })
    }
    res.status(200).json(user)
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                nickname: req.params.nickname,
            }
        })
        if (!user) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User not found'
            })
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}