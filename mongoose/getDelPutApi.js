const express = require("express");

require("./config");

const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  const data = new Product(req.body);
  const result = await data.save();
  console.log(result);
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  const data = await Product.find();
  console.log(data);
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  const data = await Product.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  const data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});

app.listen(6004);
