const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const config = require('../config.json');
const constants = require('../constants');
const { DATABASE_MONGO_PREFIX } = constants;
const ENV = process.env.NODE_ENV || "localhost";
// const DATABASE_CONFIG_KEY = constants.DATABASE_CONFIG_KEY;

module.exports = {
  bootstrap: () => {
    console.log(` ##############  ENV = ${ENV} ############# `);
    // let config = common.getValue(DATABASE_CONFIG_KEY, etcdConfig.etcdInstance, {recursive: true}, true);
    const mongodb = config.mongodb[ENV];
    const connectionString = DATABASE_MONGO_PREFIX + /* mongodb.username + ':' + mongodb.password + '@' + */ mongodb.host + ':' + mongodb.port + '/' + mongodb.database; // There was an issue while connecting mongodb with development username and password
    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err, db) => {
      if (err) {
        console.error(err);
        throw new Error('Unable to connect MongoDB');
      }
      console.log(`###### Connected to MongoDB! ######`);
      autoIncrement.initialize(db);
    });
    // TODO: Validate DB Address
  },
  config: null,
};
