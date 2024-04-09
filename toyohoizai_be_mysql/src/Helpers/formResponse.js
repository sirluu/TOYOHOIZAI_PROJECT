const responseResult = {
  postSuccess: (res, newData) => {
    const responseObject = {
      success: true,
      status: 200,
      newData: {
        ...newData,
      },
    };
    res.json(responseObject);
  },

  success: (res, data) => {
    const responseObject = {
      success: true,
      status: 200,
      data: data,
    };
    res.json(responseObject);
  },

  getSuccess: (res, result) => {
    const responseObject = {
      success: true,
      status: 200,
      listProduct: result,
    };
    res.json(responseObject);
  },

  searchSuccess: (res, result) => {
    let responseObject;
    if (result.length == 0) {
      responseObject = {
        success: true,
        status: 200,
        searchStatus: "Data is not found",
        listProduct: result,
      };
    } else {
      responseObject = {
        success: true,
        status: 200,
        searchStatus: "Data is found",
        listProduct: result,
      };
    }
    res.json(responseObject);
  },

  updateSuccess: (res, updatedProduct) => {
    const responseObject = {
      success: true,
      status: 200,
      updatedProduct: updatedProduct,
    };
    res.json(responseObject);
  },

  deleteSuccess: (res, statusResponse) => {
    const responseObject = {
      success: true,
      status: 200,
      deleteResponse: statusResponse,
    };
    res.json(responseObject);
  },
  registSuccess: (res, data) => {
    const responseObject = {
      success: true,
      status: 200,
      data: data,
    };
    res.json(responseObject);
  },
  loginSuccess: (res, data) => {
    const responseObject = {
      success: true,
      status: 200,
      data: data,
    };
    res.json(responseObject);
  },
  error: (res, error) => {
    const responseObject = {
      success: false,
      status: 500,
      error: error,
    };
    res.json(responseObject);
  },
};

module.exports = responseResult;
