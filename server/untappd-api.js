console.log('untappd-api.js', 'Loading...');

const https = require('https');
const UNTAPPD_API = 'https://api.untappd.com/v4';
import got from 'got';

export class UntappdAPI {

    constructor(token) {
        console.group('untappd-api.js', "Storing " + token);
        this._token = token;
    }

    async getBeers() {
        try {
            const result = await got.post(UNTAPPD_API + '/user/beers/?access_token=' + this._token, {});
            const json = JSON.parse(result.body);
            return json["response"].beers.items;
        }
        catch (error) {
            console.log('error', error);
        }
    }

    async getUser(user) {
        try {
            const result = await got.post(UNTAPPD_API + '/user/info/' + user + '?access_token=' + this._token, {});
            const json = JSON.parse(result.body);
            return json["response"]["user"];
        }
        catch (error) {
            console.log('error', error);
        }
    }
}