import fs from "fs";
import { NlpManager } from "node-nlp";
import corpus from "../corpus.json" assert { type: "json" };
const model = new NlpManager({ language: ["en"], forceNER: true });

const train = async () => {
  try {
    if (fs.existsSync("./model.nlp")) {
      model.load();
    } else {
      model.addCorpus(corpus);
      await model.train();
    }
  } catch (error) {
    console.log(error);
  }
};
train();

export const Answer = async (req, res) => {
  const question = req.body.message;
  const response = await model.process("en", question);
  res.status(200).json({ answer: response.answer });
};
