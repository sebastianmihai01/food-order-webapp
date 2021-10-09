import { User } from "../models/user";
import { Post } from "../models/post";
import * as postsModel from "../models/post"

type RequestParams = { postId: string };
type RequestBody = { text: string };

export function getAddPosts(res: any, req: any, next: any) {
  res.status(404);
}

export function getOnePost(req: any, res: any, next: any) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const posts = postsModel.UserPost.fetchPosts();
  const postItem = params.postItem;
  var getPost = {} as Post;

  for (const x in posts) {
    //if (x._id.toString() == params.postId) getPost = x;
    console.log(x)
  }

//   const postIndex = posts.findIndex(
//     (postItem) => postItem._id.toString() === getPost._id.toString()
//   );

//   if (postIndex === -1) res.status(301).json({ message: "Post not found" });
//   else res.status(200).json({ message: "Post found!", post: getPost });
}


export function postPost(res: any, req: any, next: any) {
    const body = req.body as RequestBody;
    const posts = postsModel.UserPost.fetchPosts();
    const newPost: Post = {
      _id: Math.random(),
      title: body.text.split("")[1],
      text: body.text,
    };
    //posts.push(newPost);
    res
      .status(201)
      .json({ message: "Added a new post", post: newPost, posts: posts });
}



export function postOnePost(res: any, req: any, next: any) {
const params = req.params as RequestParams;
const posts = postsModel.UserPost.fetchPosts();
const tid = params.postId;
const body = req.body as RequestBody;

// const postIndex = posts.findIndex(
//   (postItem) => postItem._id.toString() === tid
// );

// if (postIndex >= 0) {
//   posts[postIndex] = { _id: posts[postIndex]._id, text: body.text };
//   return res.status(200).json({ message: "Updated post", posts: posts });
// }
// res.status(404).json({ message: "Could not find post for this id." });
// });

// router.delete("/post/:postId", (req, res, next) => {
// const params = req.params as RequestParams;
// posts = posts.filter((postItem) => postItem._id.toString() !== params.postId);
// res.status(200).json({ message: "Deleted post", posts: posts });

}