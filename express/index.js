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
  res.send("Welcome to the homepage");
});

app.post("/post", (req, res) => {
  res.send("Welcome to the post dara configuration");
});

app.put("/put", (req, res) => {
  res.send("This is updated data");
});

app.delete("/delete", (req, res) => {
  res.send("This is delete function data");
});

// below is the route of the route parameters for that code is below

// when we send the req at this url threw the data then we get the data of that id which we pass threw the url postman ----- route parameter
app.get("/products/:id/:name", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  //   const { id } = req.params;
  return res.send(`products is id:${id} and name is name:${name}`);
});

//Query-string == this is the querystring code data

app.get("/search", (req, res) => {
  const title = req.query.title;
  const price = req.query.price;

  return res.send(
    `you searched for the ${title} and price of that is ${price}`
  );
});

app.listen(port, () => {
  console.log(`the server has been start on the http://localhost:${port}`);
});
