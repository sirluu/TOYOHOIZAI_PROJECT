const dbConnect = require("../Configs/dbConnect");
const fs = require("fs");

const suppliersModel = {
    //CREATE METHOD
    postSupplier: (body) => {
        return new Promise((resolve, reject) => {
            const { name, mobile, address } = body;
            let postQuery = "INSERT INTO test.supplier SET name=?, mobile=?, address=?";
            dbConnect.query(
                postQuery,
                [id, name, price, stock, image, category_id],
                (error, result) => {
                    if (!error) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                }
            );
        });
    },

    addSupplier: (body) => {
        return new Promise((resolve, reject) => {
            const { name, mobile, address } = body;
            let postQuery = `INSERT INTO test.supplier SET name='${name}', mobile=${mobile},address='${address}`;
            dbConnect.query(postQuery, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        });
    },

    //READ METHOD
    getAllSupplier: () => {
        return new Promise((resolve, reject) => {
            let getSuppliersQuery = "Select * FROM supplier";
            dbConnect.query(getSuppliersQuery, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        });
    },

    sortSupplier: (query) => {
        return new Promise((resolve, reject) => {
            let sortBased = query.sortBased;
            let sort = query.sort;
            let sortQuery = `SELECT supplier_id, name, mobile, address, logo, create_date FROM supplier ORDER BY supplier.${sortBased} ${sort}`;
            dbConnect.query(sortQuery, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        });
    },

    searchSupplierByName: (name) => {
        return new Promise((resolve, reject) => {
            let getSuppliersQuery = `SELECT * FROM supplier WHERE name LIKE '%${name}%'`;
            dbConnect.query(getSuppliersQuery, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        });
    },

    updateSupplier: (body, params) => {
        return new Promise((resolve, reject) => {
            const { id } = params;
            let updateQuery = `UPDATE supplier SET ? WHERE supplier_id=${id}`;
            dbConnect.query(updateQuery, body, (error, result) => {
                if (!error) {
                    try {
                        resolve({
                            ...result,
                            id,
                            msg: "Success updating supplier",
                            deleteOldImg: "Success",
                        });
                    } catch (err) {
                        resolve({
                            ...result,
                            id,
                            msg: "Success updating supplier",
                            deleteOldImg: "Error",
                        });
                    }
                } else {
                    reject({ msg: "Error updating supplier" });
                }
            });
        });
    },

    //DELETE METHOD
    deleteSupplier: (params, body) => {
        return new Promise((resolve, reject) => {
            const { id } = params;
            let deleteQuery = "DELETE from supplier WHERE supplier_id=?";
            dbConnect.query(deleteQuery, [id], (error, result) => {
                if (!error) {
                    try {
                        resolve({
                            id,
                            msg: "Success deleting supplier",
                            deleteImgInServer: "Success",
                        });
                    } catch (err) {
                        resolve({
                            id,
                            msg: "Success deleting supplier",
                            deleteImgInServer: "Error",
                        });
                    }
                } else {
                    reject({ msg: "Error" });
                }
            });
        });
    },
};

module.exports = suppliersModel;