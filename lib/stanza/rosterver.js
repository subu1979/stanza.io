var stanza = require('jxt');


function RosterVerFeature(data, xml) {
    return stanza.init(this, xml, data);
}
RosterVerFeature.prototype = {
    constructor: {
        value: RosterVerFeature
    },
    _name: 'rosterVersioning',
    NS: 'urn:xmpp:features:rosterver',
    EL: 'ver',
    toString: stanza.toString,
    toJSON: stanza.toJSON
};


module.exports = RosterVerFeature;
