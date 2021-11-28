const { Prism } = require('../../..');

/*
 * User
 */

class User extends Prism.Action {
  constructor(path) {
    super(path);

    this.setShape({
      age: Prism.Type.Integer,
      bio: Prism.Type.String,
      name: Prism.Type.String
    });
  }

  didDelete(body) {
    // do stuff after data was deleted
  }

  didGet(body) {
    // do stuff after data was retrieved
  }

  didPut(body) {
    // do stuff after data was saved
  }
}

exports.User = User;
