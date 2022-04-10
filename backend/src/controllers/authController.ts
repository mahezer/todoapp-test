import { Router as expressRouter } from 'express'
import User, { UserModel } from '../entities/User'
import { isValidPassword } from '../helpers/auth';
import { sign } from 'jsonwebtoken';

const router = expressRouter();

router.post('/signup', async (req, res) => {
    const newUser = new User(null, req.body.username, req.body.password, []);
    UserModel.create(newUser, async (error, result) => {
        if (error) {
            console.log(error)
            return res.status(500).send(error)
        }
        return res.status(204).send();
    });   
})

router.post('/login', async (req, res) => {
    const user = await UserModel.findOne({ username: req.body.username });
    if (!user) {
        return res.status(404).send({
            status: 404,
            message: "Not found",
        })
    }
    if (isValidPassword(user.password, Buffer.from(req.body.password, 'utf8'))) {
        const jwtToken = sign({
            data: user, 
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })
        return res.send({
            token: jwtToken
        })
    }
    return res.status(401).send({
        status: 401,
        message: "Unauthorized",
    })
})
export default router;