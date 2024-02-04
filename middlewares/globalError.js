exports.globalErrorHandle = (err , req , res , next) => {
    const msg = err.message;
    res.json({
        message: msg
    })
}