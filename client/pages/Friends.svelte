<script>
    console.log('Friends.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  

    export let friends;
    onMount(async () => {
        console.log('Friends.svelte', 'onMount()');

        Meteor.call('untappd.friends', (error, result) => {
            console.log('Friends.svelte', 'untappd.beers()');

            console.log('Friends.svelte', 'error', error);
            friends = result.items;
        });
    });
</script>

<h1>Friends</h1>
{#if friends}
    <table class='primary'>
    <thead>
        <tr><th>Avatar</th><th>User</th><th>Name</th></tr>
    </thead>
    <tbody>
    {#each friends as friend}
        <tr>    
        <td><img height="50" src="{friend.user.user_avatar}"></td>
        <td>{friend.user.user_name}</td>
        <td>{friend.user.first_name} {friend.user.last_name}</td>
        </tr>
    {/each}
    </tbody>
    </table>
{/if}