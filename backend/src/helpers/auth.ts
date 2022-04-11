import { compareSync } from "bcrypt";
import { verify } from "jsonwebtoken";

export function isValidPassword(password: string, attemptedPassword: Buffer) {
    return compareSync(attemptedPassword, password);
}

export function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({
            status: 401,
            message: 'Unauthorized'
        })
    }

    const token = authorization.split(' ')[1];
    try {
        verify(token, process.env.JWT_SECRET);
        next();
    } catch(err) {
        return res.status(401).send()
    }
}