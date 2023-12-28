const dbConnect = require("./mongodb");

// dbConnect().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const main = async () => {
  console.log("main function called");
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};

main();
