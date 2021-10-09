import { Router } from "express";
import { Post } from "../models/post";
import * as path from "path";
import { randomInt } from "crypto";
import internal from "stream";
import * as authRoutes from "../controllers/auth";
import * as postRoutes from "../controllers/page-controller";
import * as itemRoutes from "../controllers/items";

const router = Router();

type RequestBody = { text: string };
type RequestParams = { postId: string };
let posts: Post[] = [];
const ERROR_PATH = path.join(
  __dirname,
  "..",
  "templating_engines",
  "error.html"
);

router.get("/items/", itemRoutes.getAllItems);
router.get("/items/:itemId", itemRoutes.getOneItem);
//-------------------------------------------------

router.post("/post", postRoutes.postPost);
router.get("/post/:postId", postRoutes.getOnePost);
router.put("/post/:postId", postRoutes.postOnePost);
//-------------------------------------------------

router.post("/users", authRoutes.getAddPosts);
router.get("/", (req, res, next) => { res.status(200).json({ "get request": "done" });});

export default router;
