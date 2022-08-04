//function that are executed during a request, reponse cycle (when we make a request)

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500  //if we have a status then dispay that if not out 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler,
}