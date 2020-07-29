console.log('main.js', 'Loading...');

import { Meteor } from 'meteor/meteor';
import Application from '/client/Routes.svelte';

Meteor.startup(() => {
    console.log('main.js', 'startup()');

    new Application({
        target: document.getElementById('app')
    });
});
