import { decode } from "jsonwebtoken";
import User from "./User";

export default class Token {
    data: User;
    iat: number;
    exp: number;

    constructor(token: String) {
        const tokenString = token.split(' ')[1];
        const tokenObject = decode(tokenString) as any;
        const { username, password, _id } = tokenObject.data;
        this.data = new User(_id, username, password, []);
        this.iat = tokenObject.iat;
        this.exp = tokenObject.exp;
    }
}