const dbConnect = require("./mongoDb/mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "note 5",
      brand: "vivo",
      price: 350,
      category: "mobile",
    },
    {
      name: "note 6",
      brand: "oppo",
      price: 250,
      category: "mobile",
    },
  ]);
  console.log("result", result);

  if (result.acknowledged) {
    console.log("data");
  }
};

insert();
