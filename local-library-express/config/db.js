"use strict";

module.exports = {
  database: {
    HOST:
      process.env.MONGODB ||
      "mongodb://dbAdmin:Password#4@ds149551.mlab.com:49551/local-library-db"
  }
};
