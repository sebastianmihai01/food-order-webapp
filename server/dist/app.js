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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const path = __importStar(require("path"));
const app = (0, express_1.default)();
//deprecrated
app.set("title", "Online Food Order Webapp");
/** not used since we work wiht REST, ejs is used for testing only */
app.set("view engine", "ejs");
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
/** used for testing only
 *  express looks at the file extension and matches it */
app.use(express_1.default.static(path.join(__dirname, "public")));
app.listen({ port: 3000 });
/*

Documentation for myself:
- TS: middlewares only accept RequestHandler object type
- res.send() -> sends respons with ANY type body, and sets Content-Type automatically
- call next() only to go to next middleware (if we have different requests, we dont call it -> we dont want to execute the next middleware as well)
- import router and add route.get(), not just app.get()
*/
