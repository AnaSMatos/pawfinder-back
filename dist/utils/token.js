import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
export function decodeToken(receivedToken) {
    var token = receivedToken.split('Bearer ').join('');
    var infoToken;
    jwt.verify(token, process.env.JWT_TOKEN, function (err, decoded) {
        if (err) {
            throw {
                type: "unauthorized",
                message: "Invalid token"
            };
        }
        else
            infoToken = decoded;
    });
    return infoToken;
}
export function generateToken(userId) {
    return jwt.sign({ userId: userId }, process.env.JWT_TOKEN);
}
