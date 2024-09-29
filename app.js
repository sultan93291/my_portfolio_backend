{
  /*
   * author: Md . Abib Ahmed Dipto
   * date : 28-08-2024
   * description : this is the app  file for portfolio backend process . this file is going to handle all the files . and it gonna trigger all the events then it will export to the main index file .
   * copyright : abib.web.dev@gmail.com
   */
}

// dependencies

// external dependencies
const express = require("express");
const chalk = require("chalk");
const cors = require("cors");

// internal dependencies
const AllRoutes = require("./src/Routes/index.js");

// initializing app
const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

//
const versionName = process.env.VERSION_NAME;
app.use( AllRoutes);

//  configuration of port
app.listen(process.env.PORT || 3000, () => {
  console.log(
    chalk.bgBlueBright(
      `listening on port http://localhost:${process.env.PORT || 3000}`
    )
  );
});
