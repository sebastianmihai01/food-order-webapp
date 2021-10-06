import * as post from './post'

export interface User {
    _id: number;
    name: string;
    posts: post.Post[]
    age?: number;
    gender?: string;
    email: string;
    password: string;
  }
  
  var test = 'test' as string;
  module.exports = test;