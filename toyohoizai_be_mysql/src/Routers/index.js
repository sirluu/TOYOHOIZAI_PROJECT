//Package import
const express = require("express");
//Filepath import
const authRouter = require("./auth");
const supplierRouter = require("./supplier");

//Declaration
const indexRouter = express.Router();

//Implementation
//PRIVATE ROUTE
//PUBLIC ROUTE OR PRIVATE ROUTE
indexRouter.use("/auth", authRouter);
indexRouter.use("/supplier", supplierRouter);

//Export
module.exports = indexRouter;
