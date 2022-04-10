import { Router as expressRouter } from 'express'
import User, { getUserFromToken, UserModel } from '../entities/User';
import { decode } from 'jsonwebtoken';
import Project, { ProjectModel } from '../entities/Project'
import Token from '../entities/Token';
const router = expressRouter();

router.get('/', async (req, res) => {
    const user = await getUserFromToken(req.headers.authorization);
    const fullUser = await UserModel.findById(user._id).populate('projects');
    console.log(fullUser)
    const { projects } = fullUser;
    res.send(projects)
})

router.post('/new', async (req, res) => {
    const user: User = await getUserFromToken(req.headers.authorization)
    try {
        const project = await ProjectModel.create({ project_name: req.body.project_name, user_id: user._id });
        const userResult = await UserModel.findByIdAndUpdate(user._id, { 
            $push: { projects: project._id }
        }, { new: true })
        return res.send(userResult)
    } catch(err) {
        return res.status(500).send(err)
    }  
})

router.put('/update', async(req, res) => {
    const user: User = await getUserFromToken(req.headers.authorization);
    try {
        const project = await ProjectModel.findByIdAndUpdate(req.body.id, {
            project_name: req.body.project_name
        }, { new: false });
        return res.send(project);
    } catch(err) {
        return res.status(500).send(err)
    }
})

router.delete('/', async (req, res) => {
    const user: User = await getUserFromToken(req.headers.authorization);
    try {
        const project = await ProjectModel.findByIdAndDelete(req.body.id);
        return res.status(200).send();
    } catch(err) {
        return res.status(500).send(err)
    }
})
export default router;