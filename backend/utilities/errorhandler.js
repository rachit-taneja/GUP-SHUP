class Errorhandler extends Error {
    constructor(message, statuscode) {
        super(message);
        this.statuscode = statuscode;
        Error.captureStackTrace(this, this.constructor); 
        //Skip setup details and focus on the real problem...
}}
export default Errorhandler;