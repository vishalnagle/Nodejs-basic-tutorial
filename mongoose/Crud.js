const mongoose = require("mongoose");

//schema
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");

  // model

  const ProductsModel = mongoose.model("products", ProductSchema);

  let data = new ProductsModel({
    name: "note 10 pro",
    price: 600,
    brand: "redmi",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const Product = mongoose.model("products", ProductSchema);

  let data = await Product.updateOne(
    {
      name: "iphone 15",
    },
    {
      $set: {
        price: 777,
        name: "iphone 15 mini",
      },
    }
  );

  console.log(data);
};

const deleteInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.deleteOne({ name: "m8" });

  console.log(data);
};

const findInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.find({ name: "m10" });

  console.log(data);
};

findInDB();
