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

  constructor(id:number, userId:number, title:string, date?:string, text?:string){
    this._id = id!;
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