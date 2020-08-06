console.log('untappd-methods.js', 'Loading...');

import { Meteor } from 'meteor/meteor';
import { UntappdAPI } from '/server/untappd-api';

Meteor.methods({
    'untappd.user'() {
		console.log('untappd-methods', 'user()');

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

        const api = new UntappdAPI(Meteor.user().profile.token);
		return api.getUser('').then((user) => {
			return user;
		});
    },

	'untappd.beers'(limit, offset) {
		console.log('untappd-methods', 'beers()');

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

        const api = new UntappdAPI(Meteor.user().profile.token);
		return api.getBeers('', limit, offset).then((beers) => {
			return beers;
		});
    },

	'untappd.search_beers'(query, limit, offset) {
		console.log('untappd-methods', 'search_beers()');

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

        const api = new UntappdAPI(Meteor.user().profile.token);
		return api.searchBeers(query, limit, offset).then((beers) => {
			return beers;
		});
    },

	'untappd.search_breweries'(query, limit, offset) {
		console.log('untappd-methods', 'search_breweries()');

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

        const api = new UntappdAPI(Meteor.user().profile.token);
		return api.searchBreweries(query, limit, offset).then((breweries) => {
			return breweries;
		});
    },

	'untappd.friends'() {
		console.log('untappd-methods', 'friends()');

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

        const api = new UntappdAPI(Meteor.user().profile.token);
		return api.getFriends('').then((friends) => {
			return friends;
		});
    },

	'untappd.badges'() {
		console.log('untappd-methods', 'badges()');

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

        const api = new UntappdAPI(Meteor.user().profile.token);
		return api.getBadges('').then((badges) => {
			return badges;
		});
    },
});

