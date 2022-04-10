import { Schema, model, Types } from 'mongoose';
import { v4 as uuid} from 'uuid';
import Task, { TaskSchema } from './Task'
import { UserModel } from './User';

export default class Project {
    _id: String;
    project_name: String;
    user_id: String;
    tasks: Task[];
}

export const ProjectSchema = new Schema({
    project_name: { type: String, required: true },
    user_id: { type: Types.ObjectId, ref: "User"},
    tasks: []
})

ProjectSchema.pre('remove', async function(next) {
    const project = this;
    try {
        const user = await UserModel.findByIdAndUpdate(project.user_id, {
            $pull: { projects: this._id}
        })
        next();
    } catch(err) {
        throw err;
    }

})

export const ProjectModel = model('Project', ProjectSchema);