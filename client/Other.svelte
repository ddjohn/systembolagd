<script>
    console.log('Other.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  

    export let beers;
    onMount(async () => {
        console.log('Others.svelte', 'onMount()');

        Meteor.call('untappd.beers', (error, result) => {
            console.log('Other.svelte', 'untappd.beers()');

            console.log(error);
            console.log(result);
            beers = result;
        });
    });
</script>

<h1>Other</h1>
{#if beers}
    <table class='primary'>
    <thead>
        <tr><th>Beer</th><th>Brewery</th></tr>
    </thead>
    <tbody>
    {#each beers as beer}
        <tr>
        <td>{beer.beer.beer_name}</td>
        <td>{beer.brewery.brewery_name}</td>
        </tr>
    {/each}
    </tbody>
    </table>
{/if}