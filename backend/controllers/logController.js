const Log = require('../models/log');

exports.addLog = async (req, res) => {
    try {
        const log = await Log.create({
            userId: req.body.userId,
            state: req.body.state,
            comment: req.body.comment,
        })
        res.status(201).json({
            status: 'Created',
            message: 'Log added successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.removeLog = async (req, res) => {
    try {
        const log = await Log.destroy({
            where: {
                id: req.body.id,
            }
        })
        res.status(200).json({
            status: 'OK',
            message: 'Log removed successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.updateLogComment = async (req, res) => {
    try {
        const log = await Log.findOne({
            where: {
                id: req.body.id,
            }
        })
        if (!log) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Log not found'
            })
        }
        log.comment = req.body.comment
        await log.save()
        res.status(200).json({
            status: 'OK',
            message: 'Comment updated successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.updateLogVisibility = async (req, res) => {
    try {
        const log = await Log.findOne({
            where: {
                id: req.body.id,
            }
        })
        if (!log) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Log not found'
            })
        }
        log.visible = req.body.visible
        await log.save()
        res.status(200).json({
            status: 'OK',
            message: 'Visibility updated successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.getAllLogs = async (req, res) => {
    try {
        const log = await Log.findAll()

        if (!log) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Logs not found'
            })
        }
        res.status(200).json(log)
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.getLatestUserLog = async (req, res) => {
    try {
        const log = await Log.findOne({
            where: {
                userId: req.params.userId,
            }
        })
        if (!log) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User\'s log not found'
            })
        }
        res.status(200).json(log)
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}

exports.getAllUserLogs = async (req, res) => {
    try {
        const log = await Log.findAll({
            where: {
                userId: req.params.userId,
            }
        })
        if (!log) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User\'s logs not found'
            })
        }
        res.status(200).json(log)
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
}