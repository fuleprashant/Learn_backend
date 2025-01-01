import express from "express";
import morgan from "morgan";
import ratelimit from "express-rate-limit";

const limiter = ratelimit({
  windowMs: 20 * 1000, // 11-20 seconds
  max: 2, // Limit each IP to 100 requests per window
  message: "more than 2 req comes",
});

const app = express();

const port = 4598;

app.use(limiter);

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

app.use(morgan("combined"));
app.get("/data", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
