import express from "express";
import morgan from "morgan";

const app = express();

const port = 4598;

app.get("", (req, res) => {
  res.send("the server has been started");
});

const products1 = [
  { id: 1, name: "Prashant" },
  {
    id: 2,
    name: "Sonu",
  },
  {
    id: 3,
    name: "Karishma",
  },
];

const products2 = [
  { id: 1, name: "Prashant", age: 23 },
  {
    id: 2,
    name: "Sonu",
    age: 23,
  },
  {
    id: 3,
    name: "Karishma",
    age: 21,
  },
];

app.use(morgan("short"));

// below is the code how can you perform the url versoning
{
  /*
    // versonin in url
    app.get("/data/v1", (req, res) => {
      res.send(products1);
    }); // in console we get that how much time take while the seend reqest
    
    app.get("/data/v2", (req, res) => {
      res.send(products2);
    }); // in console we get that how much time take while the seend reqest
    */
}

// below is the code that how can you perform the versoning threw the headers

{
  /*
    
    
    app.get("/data", (req, res) => {
      const version = req.headers["api-version"] || v1;
    
      res.json({ version: version, products: products1 });
    });
    
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
*/
}
