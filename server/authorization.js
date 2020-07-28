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
                    console.log('authorization.js', 'getUser()');

                    //console.log(user);
                    console.log('Token: ' + json.response.access_token);

                    let id = Accounts.createUser({
                        uid: user.uid,
                        username: user.first_name + ' ' + user.last_name + ' (' + user.user_name + ')',
                        email: user.settings.email_address,
                        profile: {
                          token: json.response.access_token
                        } 
                      });
                      console.log('id=' + id);

                    response.statusCode = 301;
                    response.setHeader('User-Agent', 'SystemBolagd'); 
                    response.setHeader('Location', 
                        'https://systembolagd.servebeer.com/?' +
                        'id=' + id);
                    response.end('Logged in succesfully...');
                });
            });
        });
    });
});