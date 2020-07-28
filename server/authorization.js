console.log('authorization.js', 'Loading...');

import { Meteor } from 'meteor/meteor';
const https = require('https');

import { UntappdAPI } from '/server/untappd-api.js';
import { CLIENT_ID, CLIENT_SECRET } from '/server/untappd.js';

Meteor.startup(() => {
  console.log('authorization.js', 'startup()');

  console.log('authentication.js', 'Register router /callback');
  Picker.route( '/callback', function( params, request, response, next ) {
    console.log('authorization.js', 'route()');

    console.log('authorization.js', 'Request authorization');
    https.get('https://untappd.com/oauth/authorize/?' + 
        'client_id=' + CLIENT_ID + '&' +
        'client_secret=' + CLIENT_SECRET + '&' +
        'response_type=code&' +
        'redirect_url=https://systembolagd.servebeer.com/callback&' + 
        'code=' + params.query.code, (result) => {

            result.on('data', (data) => {
                console.log('authorization.js', 'result()');

                var json = JSON.parse(data);
                const untappd = new UntappdAPI(json.response.access_token);

                untappd.getUser('').then((user) => {
                    console.log('User: ' + user.uid);
                    console.log('User: ' + user.first_name);
                    console.log('User: ' + user.last_name);
                    console.log('Token: ' + json.response.access_token);
                });
            });
        });
        response.end('Where should we go from here...');
    });
});