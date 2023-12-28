const express = require("express");
const dbConnect = require("../mongoDb/mongodb");

const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});

app.post("/", async (req, resp) => {
  console.log(req.body);
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

app.put("/:name", async (req, resp) => {
  console.log(req.body);
  let data = await dbConnect();
  let result = await data.updateOne(
    {
      name: req.params.name,
    },
    {
      $set: req.body,
    }
  );
  resp.send({ result: "update" });
});

app.listen(5003);
