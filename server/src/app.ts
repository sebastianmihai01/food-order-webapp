import express from "express";
import router from "./routes/routes";
import bodyParser from "body-parser";
import * as path from "path";
import cors from "cors"

const app = express();
//deprecrated
app.set("title", "Online Food Order Webapp");
/** not used since we work wiht REST, ejs is used for testing only */
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Solving CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(router);
/** used for testing only
 *  express looks at the file extension and matches it */
app.use(express.static(path.join(__dirname, "public")));
app.listen({ port:8080 });

/*

Documentation for myself:
- TS: middlewares only accept RequestHandler object type
- res.send() -> sends respons with ANY type body, and sets Content-Type automatically
- call next() only to go to next middleware (if we have different requests, we dont call it -> we dont want to execute the next middleware as well)
- import router and add route.get(), not just app.get()
*/
