const Follower = require('../models/follower');

exports.getFollowing = async (req, res) => {
    try {
        const follower = await Follower.findAll({
            where: {
                followerId: req.params.followerId,
            }
        })
        if (!follower) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Following not found'
            })
        }
        res.status(200).json(follower)
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.getFollowers = async (req, res) => {
    try {
        const follower = await Follower.findAll({
            where: {
                userId: req.params.userId,
            }
        })
        if (!follower) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Followers not found'
            })
        }
        res.status(200).json(follower)
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.followUser = async (req, res) => {
    try {
        const follower = await Follower.create({
            followerId: req.body.followerId,
            userId: req.body.userId,
        })
        res.status(201).json({
            status: 'Created',
            message: 'Followed successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.unfollowUser = async (req, res) => {
    try {
        const follower = await Follower.destroy({
            where: {
                followerId: req.body.followerId,
                userId: req.body.userId,
            }
        })
        res.status(200).json({
            status: 'OK',
            message: 'Unfollowed successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}