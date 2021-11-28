const { Prism } = require('../../..');

/*
 * Dashboard
 */

class Dashboard extends Prism.Action {
  constructor(path) {
    super(path);

    this.setShape({
      tipOfTheDay: Prism.Type.String
    });

    this.setState({
      tipOfTheDay: 'Press ESC to enter distraction-free mode.'
    });

    this.setReadWriteDelete(true, false, false);
  }

  didGet(body) {
    console.log('A user retrieved the Dashboard state.');
  }
}

exports.Dashboard = Dashboard;
