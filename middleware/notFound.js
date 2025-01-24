const notFound = (req, res, next) => {
    const error = new Error(`A post was not found`);
    error.status = 404;
    return next(error);
    };

export default notFound;