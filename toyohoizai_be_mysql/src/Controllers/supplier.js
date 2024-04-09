const suppliersModel = require("../Models/supplier");
const responseResult = require("../Helpers/formResponse");

const suppliersController = {
  //CREATE METHOD
  postSupplier: (req, res) => {
    suppliersModel
      .postSupplier(req.body)
      .then((result) => {
        responseResult.success(res, req.body);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //post with upload file
  addSupplier: (req, res) => {
    suppliersModel
      .addSupplier(req.body)
      .then((result) => {
        responseResult.success(res, req.body);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //READ METHOD
  getAllSupplier: (_, res) => {
    suppliersModel
      .getAllSupplier()
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  searchSupplierByName: (req, res) => {
    suppliersModel
      .searchSupplierByName(req.query.name)
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  searchAndPaginate: (req, res) => {
    suppliersModel
      .searchAndPaginate(req.query)
      .then((result) => {
        responseResult.paginationSucces(req, res, result);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
  sortSupplier: (req, res) => {
    suppliersModel
      .sortSupplier(req.query)
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //DELETE METHOD
  deletesupplier: (req, res) => {
    suppliersModel
      .deleteSupplier(req.params, req.body)
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
};
module.exports = suppliersController;