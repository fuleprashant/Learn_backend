import express from "express";

const app = express();

// console.log(app);
const port = 4000;

const products = [
  {
    id: 1,
    name: "Prashant",
  },
  {
    id: 2,
    name: "sonu",
  },
];

app.get("/", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`the server has been start on the http://localhost:${port}`);
});
