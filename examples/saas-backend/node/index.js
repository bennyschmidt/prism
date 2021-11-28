const { Prism } = require('../../..');
const { AnalyticsSettings } = require('../actions/AnalyticsSettings');
const { Dashboard } = require('../actions/Dashboard');
const { Ping } = require('../actions/Ping');
const { User } = require('../actions/User');

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
      new Dashboard('/dashboard'),
      new AnalyticsSettings('/dashboard/analytics/enable/:key'),
      new User('/user/:key')
    ]);
  }
}

exports.Node = Node;
