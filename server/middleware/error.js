function errorHandlingMiddleware() {
  return function(err, req, res, next) {
    res.status(err.status || 500)
    res.send("Something went wrong...")
  }
}

module.exports = errorHandlingMiddleware
