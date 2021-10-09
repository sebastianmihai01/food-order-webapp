import { User } from "../models/user";
import { Post } from "../models/post";

let users: User[] = [];
let posts: Post[] = [];
type RequestParams = { postId: string };
type RequestBody = { text: string };
const queryString = window.location.search;

export function getAddPosts(res: any, req: any, next: any) {
  res.status(404);
}

export function getAllItems(req: any, res: any, next: any) {
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
}

export function getOneItem(req: any, res: any, next: any) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const item = params.itemId;
  const fetchedProduct = posts.find(elem => elem._id.toString() == params.id)
  // search for the item in the database
  res.status(200).json(fetchedProduct);
}

