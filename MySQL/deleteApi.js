const express = require("express");
const con = require("./config");

const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      resp.send("error");
    } else {
      resp.send(result);
    }
  });
});

app.post("/", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO users SET ?", data, (error, result, fields) => {
    if (error) {
      throw error;
    } else {
      resp.send(result);
    }
  });
});

app.put("/:id", (req, resp) => {
  const data = [
    req.body.name,
    req.body.password,
    req.body.user_type,
    req.params.id,
  ];
  con.query(
    "UPDATE users SET name = ?, password = ?, user_type = ? where id = ?",
    data,
    (error, result, fields) => {
      if (error) {
        throw error;
      } else {
        resp.send(result);
      }
    }
  );
  resp.send("update api working");
});

app.delete("/:id", (req, resp) => {
  con.query("DELETE FROM users WHERE id =" + req.params.id, (error, result) => {
    if (error) {
      throw error;
    } else {
      resp.send(result);
    }
  });
});

app.listen(6003);
