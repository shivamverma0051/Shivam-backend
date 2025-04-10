class Apierror extends Error {
    constructor(
        statusCode,
        message= " something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.succes = false;
        this.error = errors

        if(Statck) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)

        }

    }
}

export {Apierror}