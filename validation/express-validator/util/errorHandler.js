const NotFoundError = (req,res,next) =>{
    return res.status(404).json({
        statusCode: res.statusCode,
        error : {
            type: "NotFound",
            message:"notfound"+ req.url +"route" 
        },
    })
} 
const ErrorHandler = (err,req,res,next) => {
    return res.json({
        statusCode:err.status || 500,
        error:{
            message:err.message,
            invalidParams: err.error
        }
    })
}

module.exports = {
    ErrorHandler,
    NotFoundError
}