const { builtinModules } = require("module")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: rpocess.env.NODE_ENV === 'production' ? null : error.stack
    })
}

module.exports = {
    errorHandler
}