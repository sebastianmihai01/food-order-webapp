// import {validationResult} from 'express-validator'
// import jwt from 'jsonwebtoken'
// import bcrypt from bcryptjs
import {User} from '../models/user'
import {Post} from '../models/post'

let users: User[] = []
let posts: Post[] = []

//declare let $: getAddPosts;

export function getAddPosts(res:any, req:any, next:any) {
    res.status(404);
};