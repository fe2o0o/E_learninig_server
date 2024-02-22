import express from "express";
import  cors  from 'cors';
import UserRouter from "./src/modules/users/user.routes.js";
const app = express();
const port = 9000;

app.use(cors())

app.use(express.json());

app.use(UserRouter)

app.listen(port, () => {
    console.log("server Running");
})


