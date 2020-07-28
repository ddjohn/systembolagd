console.log('authentication.js', 'Loading...');

import { Meteor } from 'meteor/meteor';

import { CLIENT_ID } from '/server/untappd.js';

Meteor.startup(() => {
  console.log('authentication.js', 'Starting...');

  console.log('authentication.js', 'Register router /authentication');
  Picker.route( '/authentication', function( params, request, response, next ) {
    console.log('authentication.js', 'route()');

    console.log('authentication.js', 'Redirect for authentication');
        
    response.statusCode = 301;
    response.setHeader('User-Agent', 'SystemBolagd'); 
    response.setHeader('Location', 
      'https://untappd.com/oauth/authenticate/?' +
      'client_id=' + CLIENT_ID + '&' +
      'response_type=code&' +
      'redirect_url=https://systembolagd.servebeer.com/callback');
    response.end('Redirecting to untappd for authentication...');
  });
});