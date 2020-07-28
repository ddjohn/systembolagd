console.log('main.js', 'Loading...');

import { Meteor } from 'meteor/meteor';
import Application from '/client/Application.svelte';

Meteor.startup(() => {
    console.log('main.js', 'startup()');

    new Application({
        target: document.getElementById('app')
    });
});
