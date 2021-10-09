import * as post from './post'

const users: User[] = []

export class User {
    _id: number;
    name: string;
    posts: post.Post[]
    age?: number;
    gender?: string;
    email: string;
    password: string;

    constructor(email:string, password:string, name:string){
      this._id = Math.random();
      this.name = name
      this.posts = [];
      this.email = email;
      this.password = password
    }

    save(user: User){
      users.push(user)
    }

    /**
     * 
     * @param cb = callback to be run after the result is fetched
     * @returns 
     */
    static fetchAll(cb:any){
      //fetch data
      const fetchedData: string[] = []
      //if error => cb([])
      cb(fetchedData)

      /*  ------USAGE-----
    
      users.fetchAll(usersList => {
        console.log(usersList)
      })
      
         ----------------*/
    }
  }
  
  var test = 'test' as string;
  module.exports = test;