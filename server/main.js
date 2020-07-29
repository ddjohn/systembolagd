console.log('main.js', 'Loading...');

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    console.log('main.js', 'startup()');
});
