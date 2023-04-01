const data = [
  { name: "Bajrangi Bhaijanan", rating: 5, releaseDate: "jul 2018" },
  { name: "KG", rating: 5, releaseDate: "jul 2018" },
  { name: "shaho", rating: 10, releaseDate: "jul 2018" },
  { name: "avfssdd", rating: 7, releaseDate: "jul 2018" },
  { name: "Bajrangi Bhaijanan1", rating: 5, releaseDate: "jul 2018" },
  { name: "Dabang1g", rating: 8, releaseDate: "jul 2018" },
  { name: "Dabangg1", rating: 3, releaseDate: "jul 2018" },
  { name: "KG", rating: 5, releaseDate: "jul 2018" },
  { name: "Dabangg2", rating: 6, releaseDate: "jul 2018" },
  { name: "Dabangg3", rating: 3, releaseDate: "jul 2018" },
  { name: "Dabangg4", rating: 3, releaseDate: "jul 2018" },
  { name: "Bajrangi Bhaijanan", rating: 5, releaseDate: "jul 2018" },
];
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/movies", (req, res) => {
  res.status(200).json({ data });
});

app.post("/api/movies", (req, res) => {
  console.log(req.body);
  const { name, rating } = req.body;
  data.push({ name, rating });
  res.status(200).json({ success: true, msg: "data added successfully" });
});


app.listen(7895, () => {
  console.log("PORT STARTED");
});
