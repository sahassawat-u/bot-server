import cors from "cors";
import express from "express";
import answerRoute from "./routes/answerRoute.js";
const app = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors());
// routes
app.use("/api/message", answerRoute);
app.get("/", (req, res) => res.status(200).send("Hello to Bot Server"));

app.listen(port, () => {
  console.log(`Server is listenint to port ${port}`);
});
