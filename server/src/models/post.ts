export interface Post {
  _id: number;
  title?: string;
  text?: string;
}

export class UserPost {
  _id: number;
  title: string;
  date?: string;
  text?: string;

  constructor(userId:number, title:string, date?:string, text?:string){
    this._id = Math.random().toString()
    this.title = title;
    if(date != null)
      this.date = date;
    else this.date = 'NOT_SET'
    if(text != null)
      this.text = text;  
    else this.text = 'NOT_SET'
  }

  save(){
    //add to db
  }

  static fetchPosts(){
    return {"" : ""};
  }
}

var post = '' as string;
exports.post = post;

/**
 * if es6 normal JS:
 * -----
 * exports.f = {}
 * exports.f = f
 * module.exports = f
 * -----
 * require(filename).f
 */