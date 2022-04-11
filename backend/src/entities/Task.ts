import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

export default class Task {
    id: String;
    task_description: String;
    created_at: Date;
    completed_at: Date;
}

export const TaskSchema = new Schema({
    id: { type: String, default: uuid(), index: { unique: true }},
    task_description: { type: String, required: true },
    created_at: { type: Date, default: new Date()},
    completed_at: { type: Date }
})

export const TaskModel = model('Task', TaskSchema);
