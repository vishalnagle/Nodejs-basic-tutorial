const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertOne({
    name: "note 5",
    brand: "vivo",
    price: 350,
    category: "mobile",
  });
  console.log("esult", result);

  if (result.acknowledged) {
    console.log("data");
  }
};

insert();
