import express from "express";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(express.json());
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
