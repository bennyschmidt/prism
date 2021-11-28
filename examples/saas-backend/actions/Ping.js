const { Prism } = require('../../..');

/*
 * Ping
 */

class Ping extends Prism.Action {
  constructor(path) {
    super(path);

    this.setShape({
      message: Prism.Type.String
    });

    this.setState({
      message: '👍'
    });

    this.setReadWriteDelete(true, false, false);
  }

  didGet(body) {
    console.log(`Ping! Responded with ${this.state.message}`);
  }
}

exports.Ping = Ping;
