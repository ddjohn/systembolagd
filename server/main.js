console.log('main.js', 'Loading...');

import { Meteor } from 'meteor/meteor';

import '/server/sslproxy.js';

Meteor.startup(() => {
    console.log('main.js', 'startup()');

    /*
    const id = Accounts.createUser({
        username: 'you'
    });
    console.log('id=' + id);
    */
});
