const { Prism } = require('../../..');
const { Ping } = require('../actions/Ping');
const { Todos } = require('../actions/Todos');

/*
 * Node
 */

class Node extends Prism.Node {
  constructor() {
    super();

    this.setShape({
      startedAt: Prism.Type.Number
    });

    this.setState({
      startedAt: Date.now()
    });

    this.setActions([
      new Ping('/'),
      new Todos('/todos')
    ]);
  }
}

exports.Node = Node;
