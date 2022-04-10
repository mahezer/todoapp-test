import { compareSync } from "bcrypt";
import { verify } from "jsonwebtoken";

export function isValidPassword(password: string, attemptedPassword: Buffer) {
    return compareSync(attemptedPassword, password);
}

export function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send()
    }

    const token = authorization.split(' ')[1];
    try {
        verify(token, process.env.JWT_SECRET);
        next();
    } catch(err) {
        console.log(err)
        return res.status(401).send()
    }
}