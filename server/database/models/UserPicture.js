const bookshelf = require("../bookshelf");

class Workout extends bookshelf.Model {
  get tableName() {
    return "user_pictures";
  }

  get hasTimestamps() {
    return true;
  }

  users_id(){
    return this.belongsTo("User");
  }
}

module.exports = bookshelf.model("UserPicture", Workout);
