<script>
    console.log('Badges.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  

    export let badges;
    onMount(async () => {
        console.log('Badges.svelte', 'onMount()');

        Meteor.call('untappd.badges', (error, result) => {
            console.log('Badges.svelte', 'untappd.beers()');

            console.log(error);
            console.log(result);
            badges = result;
        });
    });
</script>

<h1>Badges</h1>
{#if badges}
    <table class='primary'>
    <thead>
        <tr><th>Avatar</th><th>User</th><th>Name</th></tr>
    </thead>
    <tbody>
    {#each badges as badge}
        <tr>    
        <td>{badge.badge_name}</td>
        </tr>
    {/each}
    </tbody>
    </table>
{/if}