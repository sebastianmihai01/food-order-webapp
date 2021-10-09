"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = __importStar(require("path"));
const router = (0, express_1.Router)();
const ERROR_PATH = path.join(__dirname, "..", "templating_engines", "error.html");
let posts = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ "get request": "done" });
});
router.get("/items/", (req, res, next) => {
    const items = [
        {
            name: "name",
            height: "height",
            mass: "mass",
        },
        {
            name: "name1",
            height: "height1",
            mass: "mass1",
        },
    ];
    res.status(200).json(items);
});
router.get("/post/:postId", (req, res, next) => {
    const params = req.params;
    var getPost = {};
    for (let x of posts) {
        if (x._id.toString() == params.postId)
            getPost = x;
    }
    const postIndex = posts.findIndex((postItem) => postItem._id.toString() === getPost._id.toString());
    if (postIndex === -1)
        res.status(301).json({ message: "Post not found" });
    else
        res.status(200).json({ message: "Post found!", post: getPost });
});
router.post("/post", (req, res, next) => {
    const body = req.body;
    const newPost = {
        _id: Math.random(),
        title: body.text.split("")[1],
        text: body.text,
    };
    posts.push(newPost);
    res
        .status(201)
        .json({ message: "Added a new post", post: newPost, posts: posts });
});
router.put("/post/:postId", (req, res, next) => {
    const params = req.params;
    const tid = params.postId;
    const body = req.body;
    const postIndex = posts.findIndex((postItem) => postItem._id.toString() === tid);
    if (postIndex >= 0) {
        posts[postIndex] = { _id: posts[postIndex]._id, text: body.text };
        return res.status(200).json({ message: "Updated post", posts: posts });
    }
    res.status(404).json({ message: "Could not find post for this id." });
});
router.delete("/post/:postId", (req, res, next) => {
    const params = req.params;
    posts = posts.filter((postItem) => postItem._id.toString() !== params.postId);
    res.status(200).json({ message: "Deleted post", posts: posts });
});
exports.default = router;
