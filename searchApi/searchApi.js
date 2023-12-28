const express = require("express");

require("../mongoose/config");

const Product = require("../mongoose/product");

const app = express();
app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  const data = await Product.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
      {
        brand: { $regex: req.params.key },
      },
      {
        category: { $regex: req.params.key },
      },
    ],
  });
  console.log(data);
  resp.send(data);
});

app.listen(6005);
