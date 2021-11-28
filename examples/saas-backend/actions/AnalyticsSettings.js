const { Prism } = require('../../..');

/*
 * AnalyticsSettings
 */

class AnalyticsSettings extends Prism.Action {
  constructor(path) {
    super(path);

    this.setShape({
      isEnabled: Prism.Type.Boolean
    });

    this.setReadWriteDelete(true, true, false);
  }

  didPut(body) {
    if (body.isEnabled === true || body.isEnabled === false) {
      console.log(`A user ${body.isEnabled ? 'enabled' : 'disabled'} analytics.`);
    }
  }
}

exports.AnalyticsSettings = AnalyticsSettings;
