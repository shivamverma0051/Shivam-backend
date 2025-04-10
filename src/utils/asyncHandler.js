// src/utils/asyncHandler.js

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export { asyncHandler };

  

    // const asyncHnadler = () =>{}
    // const asyncHnadler = (func) => {}
    // const asyncHnadler = (func) => async () => {}
      
        // const asyncHandler = (fn) => async (req, res, next) => {
        //     try {
        //         await fn(req, res, next);
        //     } catch (error) {
        //         res.status(error.code || 500).json({
        //             success: false,
        //             message: error.message || 'Server Error',
        //         });
        //     }
        // };
        