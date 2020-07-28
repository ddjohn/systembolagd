console.log('sslproxy.js', 'Loading...');

import { Meteor } from 'meteor/meteor';
const https = require('https');

Meteor.startup(() => {
    console.log('sslproxy.js', 'startup()');

    SSLProxy({
        port: 8443,
        ssl : {
            key: Assets.getText('test-key.pem'),
            cert: Assets.getText('test-cert.pem'),
            //Optional CA
            //Assets.getText("ca.pem")
        }
    });
});