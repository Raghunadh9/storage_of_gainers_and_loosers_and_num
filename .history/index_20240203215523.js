import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = 5002 || process.env.PORT;
app.get("/", async (req, res) => {
  try {
    // Read the contents of the data.json file
    const fileContents = fs.readFileSync("./data.json", "utf-8");
    const jsonData = JSON.parse(fileContents);
    res.status(200).json(jsonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.get("/num_data", async (req, res) => {
  try {
    const fileContents_num = fs.readFileSync("./data_num.json", "utf-8");
    const jsonData_num = JSON.parse(fileContents_num);
    res.status(200).json(jsonData_num);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.listen(PORT, (req, res) => {
  console.log("listening on port 5002");
});
