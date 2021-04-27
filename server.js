const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/testdeploy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful.");
  })
  .catch((e) => {
    console.log(e);
  });

  console.log('hi')
app.get("/get", (req, res) => {
  res.send("hello");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
