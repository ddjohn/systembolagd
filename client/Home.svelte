<script>
    console.log('Home.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount, onDestroy } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  
    import { Accounts } from 'meteor/accounts-base';

    export let id;
    //export let location;     

    Meteor.loginWithPassword(id, 'password', (error) => {
        console.log(error);
    });
    console.log(id);
</script>

<h1>Home {id}</h1>
<h1>Home {location}</h1>

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

