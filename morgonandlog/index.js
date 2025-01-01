import express from "express";
import morgan from "morgan";

const app = express();

const port = 4598;

app.get("", (req, res) => {
  res.send("the server has been started");
});

const products = [
  { id: 1, name: "Prashant" },
  {
    id: 2,
    name: "Sonu",
  },
];

app.use(morgan("short"));
app.get("/data", (req, res) => {
  res.send(products);
}); // in console we get that how much time take while the seend reqest

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
