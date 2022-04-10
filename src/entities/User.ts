import { Schema, model, Types } from 'mongoose';
import { v4 as uuid} from 'uuid';
import { hashSync } from 'bcrypt';
import Project, { ProjectSchema } from './Project';
import Token from './Token';

export default class User {
  _id: String;
  username: String;
  password: String;
  projects: Project[];
  
  constructor(_id: String, username: String, password: String, projects: Project[]) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.projects = projects;
  }
}

export const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String },
  projects: [
    {
      type: Types.ObjectId,
      ref: "Project",
    }
  ],
});

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();
  const hash = hashSync(this.password, 10);
  this.password = hash;
  
  next();
});

export async function getUserFromToken(tokenHeader: string) {
  const token = new Token(tokenHeader);
  const user = await UserModel.findById(token.data._id)
  return new User(token.data._id, token.data.username, token.data.password, token.data.projects)
}

export const UserModel = model('User', UserSchema);
