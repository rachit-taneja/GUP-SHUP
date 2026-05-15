export const errorhandler = (err, req, res, next) => {
     err.statuscode = err.statuscode || 500;
     err.error = err.message || "Internal Server Error";
            res.status(err.statuscode).json({
                success: false,
                message:err.message,
            });
        };