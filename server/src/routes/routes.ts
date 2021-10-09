import { Router } from "express";
import { Post } from "../models/post";
import * as path from "path";
import { randomInt } from "crypto";
import internal from "stream";
const router = Router();

type RequestBody = { text: string };
// type RequestHeader = { text: string };
type RequestParams = { postId: string };

const ERROR_PATH = path.join(
  __dirname,
  "..",
  "templating_engines",
  "error.html"
);
let posts: Post[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ "get request": "done" });
});

router.get("/items/", (req, res, next) => {
  const items = [
    {
      name: "name",
      description: "a",
      price: "b",
    },
    {
      name: "name1",
      description: "c",
      price: "d",
    },
  ];

  res.status(200).json(items);
});

router.get("/post/:postId", (req, res, next) => {
  const params = req.params as RequestParams;
  var getPost = {} as Post;

  for (let x of posts) {
    if (x._id.toString() == params.postId) getPost = x;
  }
  const postIndex = posts.findIndex(
    (postItem) => postItem._id.toString() === getPost._id.toString()
  );

  if (postIndex === -1) res.status(301).json({ message: "Post not found" });
  else res.status(200).json({ message: "Post found!", post: getPost });
});

router.post("/post", (req, res, next) => {
  const body = req.body as RequestBody;
  const newPost: Post = {
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
  const params = req.params as RequestParams;
  const tid = params.postId;
  const body = req.body as RequestBody;
  const postIndex = posts.findIndex(
    (postItem) => postItem._id.toString() === tid
  );
  if (postIndex >= 0) {
    posts[postIndex] = { _id: posts[postIndex]._id, text: body.text };
    return res.status(200).json({ message: "Updated post", posts: posts });
  }
  res.status(404).json({ message: "Could not find post for this id." });
});

router.delete("/post/:postId", (req, res, next) => {
  const params = req.params as RequestParams;
  posts = posts.filter((postItem) => postItem._id.toString() !== params.postId);
  res.status(200).json({ message: "Deleted post", posts: posts });
});

export default router;
