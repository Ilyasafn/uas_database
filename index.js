import express from "express";
import userRouter from "./routes/userRouter.js";
import postRouter from "./routes/postRouter.js";

const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
