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

app.get("/get", (req, res) => {
  const noteSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    details: {
      type: String,
      required: true,
      minlength: 3,
    },
    category: {
      type: String,
      required: true,
    },
  });
  
  const Note = new mongoose.model("Note", noteSchema);

  const notesData = await Note.find();
  res.send(notesData");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
