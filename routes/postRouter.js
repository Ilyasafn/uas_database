import express from "express";
import database from "../configs/database.js";

const postRouter = express.Router();

postRouter.get("/", async function (req, res) {
  const [result, response] = await database.execute("SELECT * FROM post");
  res.json({ posts: result });
});

postRouter.get("/:postId", async function (req, res) {
  const postId = req.params.postId;
  const { judul, tulisan, user_id } = req.body;
  const [result, response] = await database.execute("SELECT id FROM post WHERE id = ?", [postId]);
  res.json({
    message: `Detail post dengan id ${postId}`,
    posts: result,
    judul: judul,
    tulisan: tulisan,
    user_id: user_id,
  });
});

postRouter.post("/", async function (req, res) {
  const { judul, tulisan, user_id } = req.body;
  const [result, response] = await database.execute("INSERT INTO post (judul, tulisan, user_id) VALUES (?,?,?) ", [judul, tulisan, user_id]);
  res.json({ result, message: "post baru berhasil ditambahkan" });
});

postRouter.delete("/:postId", async function (req, res) {
  const postId = req.params.postId;
  const [result, response] = await database.execute("DELETE FROM post WHERE id = ?", [postId]);
  res.json({ result, message: `post dengan id ${postId} berhasil dihapus` });
});

export default postRouter;
