const express = require("express");
const suppliersRouter = express.Router();
const suppliersController = require("../Controllers/supplier");
const checkToken = require("../Helpers/Middleware/checkToken");

//Create method
suppliersRouter.post("/post", suppliersController.postSupplier);
//post with upload file
suppliersRouter.post(
    "/add",
    checkToken.allUsers,
    suppliersController.addSupplier
);

//Read method
suppliersRouter.get("/", suppliersController.getAllSupplier);
suppliersRouter.get("/search", suppliersController.searchSupplierByName);
suppliersRouter.get("/sort", suppliersController.sortSupplier);
suppliersRouter.get("/search", suppliersController.searchAndPaginate);

//Delete method
suppliersRouter.delete(
    "/delete/:id",
    checkToken.adminOnly,
    suppliersController.deletesupplier
);

//export
module.exports = suppliersRouter;