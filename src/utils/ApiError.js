class Apierror extends Error {
    constructor(
        statusCode,
        message= " something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.succes = false;
        this.error = errors

        if(Stack) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)

        }

    }
}

export {Apierror}