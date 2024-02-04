const express = require("express");
const dotenv = require("dotenv");
const weatherRouter = require('./Routes/weatherRoute');
const { dirname } = require('path');
const path = require('path');
const {globalErrorHandle} = require('./middlewares/globalError');

require('express-async-errors');

dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, './public')));

app.use("/api/v1" , weatherRouter);

app.use('*' , (req , res) => {
  res.sendFile(path.resolve(__dirname , './public' , 'index.html'))
})

app.use(globalErrorHandle);

app.use("*", (req, res) => {
    res.status(400).json({
      msg: "Route Not Found",
    });
});

app.listen(5100, () => {
   console.log("server started");
});
