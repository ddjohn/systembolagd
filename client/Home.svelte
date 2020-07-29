<script>
    console.log('Home.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  
    
    export let id;

    if(id !== undefined) {
        console.log('Home.svelte', 'Log in...');

        Meteor.loginWithPassword(id, 'password', (error) => {
            if(error) {
                console.log('Home.svelte', 'login failed', error);
            } else {
                console.log('Home.svelte', 'login ok');
            }
        });
        console.log('Home.svelte', 'id=' + id);
    } else {
        console.log('Home.svelte', 'Not logging in!!!');
    }

    export let user;
    onMount(async () => {
        console.log('Home.svelte', 'onMount()');

        Meteor.call('untappd.user', (error, result) => {
            console.log('Home.svelte', 'untappd.user()');

            console.log(error);
            console.log(result);
            user = result;
        });
    });

</script>

<h1>Home</h1>

<div>
{#if user}
    <article class="card">
        <header>Profile:</header>
        <section></section>
        <footer>
            <p>User: {user.uid}</p>
            <p>Name: {user.user_name}</p>
            <p>FullName: {user.first_name} {user.last_name}</p>
            <img src="{user.user_avatar_hd}">
        </footer>
    </article>
{:else}
    <p>
        In sweden there is a govement providing beers in well sorted 
        shops named System Bolaget. The app will cross reference untappd 
        with specific shops based on GPS position to list not tested beers.
    </p>

    <p>
        <a class="button" href="/authentication">Authenticate</a>
    </p>
{/if}

</div>
