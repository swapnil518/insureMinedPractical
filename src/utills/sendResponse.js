const sendResponse = (res, data, statusCode, message) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        status: statusCode,
        message: message,
        data: statusCode === 500 ? data.message : data,
      })
    );
    res.end();
  };
  
  module.exports = sendResponse;
  