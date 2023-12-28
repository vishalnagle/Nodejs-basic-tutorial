const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    { name: "note 6 pro max" },
    {
      $set: {
        name: "new note pro",
        price: 800,
      },
    }
  );
  console.log(result);
};

updateData();
