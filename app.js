const express = require('express');
const app = express();
const indexRouter = require("./routes/indexRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});