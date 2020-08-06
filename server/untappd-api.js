console.log('untappd-api.js', 'Loading...');

const https = require('https');
const UNTAPPD_API = 'https://api.untappd.com/v4';
import got from 'got';

let requests = 0;

export class UntappdAPI {

    constructor(token) {
        console.group('untappd-api.js', "Storing " + token);
        this._token = token;
    }

    async untappd(endpoint, query) {
        console.log('untappd-api.js','requests', ++requests);
        console.log('untappd-api.js',endpoint, query);
        try {
            const result = await got.get(UNTAPPD_API + endpoint +
                '?access_token=' + this._token + '&' + query, {});
            const json = JSON.parse(result.body);
            return json["response"];
        }
        catch (error) {
            console.log('error', error);
        }
    }

    getBeers(user, limit, offset) {
        return this.untappd('/user/beers/' + user,  
            'limit=' + limit +
            '&offset=' + offset
        );
    }

    searchBeers(search, limit, offset) {
        return this.untappd('/search/beer',  
            'q=' + search +
            '&limit=' + limit +
            '&offset=' + offset
        );
    }

    searchBreweries(search, limit, offset) {
        return this.untappd('/search/brewery',  
            'q=' + search +
            '&limit=' + limit +
            '&offset=' + offset
        );
    }

    getFriends(user) {
        return this.untappd('/user/friends/' + user, 
            ''
        );
    }

    getBadges(user) {
        return this.untappd('/user/badges/' + user,
            ''
        );
    }

    getUser(user) {
        return this.untappd('/user/info/' + user,
            ''
        );
    }
}