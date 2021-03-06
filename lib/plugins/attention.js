require('../stanza/attention');


module.exports = function (client) {
    client.disco.addFeature('', 'urn:xmpp:attention:0');


    client.getAttention = function (jid, opts) {
        opts.to = jid;
        opts.type = 'headline';
        opts.attention = true;
        client.sendMessage(opts);
    };

    client.on('message', function (msg) {
        if (msg._extensions._attention) {
            client.emit('attention', msg);
        }
    });
};
