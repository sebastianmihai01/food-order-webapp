"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPost = void 0;
class UserPost {
    constructor(id, userId, title, date, text) {
        this._id = id;
        this.title = title;
        if (date != null)
            this.date = date;
        else
            this.date = 'NOT_SET';
        if (text != null)
            this.text = text;
        else
            this.text = 'NOT_SET';
    }
    save() {
        //add to db
    }
}
exports.UserPost = UserPost;
var post = '';
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
