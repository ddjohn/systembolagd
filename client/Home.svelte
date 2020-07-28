<script>
    console.log('Home.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  

import { Accounts } from 'meteor/accounts-base';

    onMount(async () => {
        console.log('Home.svelte', 'onMount()');
    });
</script>

<h1>Home</h1>

<div>
    <p>
        In sweden there is a govement providing beers in well sorted 
        shops named System Bolaget. The app will cross reference untappd 
        with specific shops based on GPS position to list not tested beers.
    </p>
    <p>
        <a class="button" href="/authentication">Authenticate</a>
    </p>
</div>

