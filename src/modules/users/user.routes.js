import Express from "express";
import { LoginUser, addUser, getAll } from "./user.controller.js";
const UserRouter = Express.Router();

UserRouter.post("/api/v1/login", LoginUser);

UserRouter.post("/api/v1/register", addUser);


UserRouter.get("/api/v1/getAllUsers" , getAll )




export default UserRouter;