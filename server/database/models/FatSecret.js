const bookshelf = require('../bookshelf');

class FatSecret extends bookshelf.Model {
    get tableName() {
      return 'fat_secret_token';
    }

    get hasTimestamps() {
      return true;
    }
}

module.exports = bookshelf.model("FatSecret", FatSecret);