import connectDB from "../startup/db";
const express = require("express");

const app = express();
connectDB();

app.use(express.json());
app.use("/api/videos", videos);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
