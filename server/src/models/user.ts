import * as post from './post'

export class User {
    _id: number;
    name: string;
    posts: post.Post[]
    age?: number;
    gender?: string;
    email: string;
    password: string;

    constructor(_id:number, name:string){
      
    }
  }
  
  var test = 'test' as string;
  module.exports = test;