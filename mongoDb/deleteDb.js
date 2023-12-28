const dbConnect = require("./mongodb");

const deleteData = async () => {
  console.log("function called");
  const data = await dbConnect();
  let result = await data.deleteMany({
    name: "note 5",
  });

  console.log(result);
  if (result.acknowledged) {
    console.log("successfully deleted");
  }
};

deleteData();
