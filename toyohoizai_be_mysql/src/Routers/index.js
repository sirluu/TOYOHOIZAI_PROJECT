//Package import
const express = require("express");
//Filepath import
const authRouter = require("./auth");
//Declaration
const indexRouter = express.Router();

//Implementation
//PRIVATE ROUTE
//PUBLIC ROUTE OR PRIVATE ROUTE
indexRouter.use("/auth", authRouter);

//Export
module.exports = indexRouter;
