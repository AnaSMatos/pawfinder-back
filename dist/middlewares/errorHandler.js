function errorTypes(error) {
    if (error.type == "notFound") {
        return { status: 404, message: error.message };
    }
    if (error.type == "conflict") {
        return { status: 409, message: error.message };
    }
    if (error.type == "badRequest") {
        return { status: 400, message: error.message };
    }
    if (error.type == "unauthorized") {
        return { status: 401, message: error.message };
    }
    return { status: 500, message: "internal server error" };
}
export function errorHandler(error, req, res, next) {
    console.log(error);
    var errorData = errorTypes(error);
    return res.status(errorData.status).send(errorData.message);
}
