const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.json({ extended: true }));
app.use("/api/regstatus", require("./routes/regstatus.routes"));
// app.use("/api/link", require("./routes/link.routes"));
// app.use("/t", require("./routes/redirect.routes"));


// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static(path.join(__dirname, "client", "build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
//   });
// }

// PORT
const PORT = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Listening on port ${port}...`);
// });

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server Error", e);
    process.emit(1);
  }
}
start();
