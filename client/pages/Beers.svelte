<script>
    console.log('Beers.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  

    export let beers;
    export let offset = 0;
    export let limit = 10;
    onMount(async () => {
        console.log('Beers.svelte', 'onMount()');

        Meteor.call('untappd.beers', limit, offset, (error, result) => {
            console.log('Beers.svelte', 'untappd.beers()');

            console.log(error);
            console.log(result);
            beers = result;
        });
    });

    function nextBeers() {
        console.log('Beers.svelte', 'nextBeers()');
        offset += limit;
        Meteor.call('untappd.beers', limit, offset, (error, result) => {
            beers = result;
        });
    };

    function prevBeers() {
        console.log('Beers.svelte', 'prevBeers()');
        offset -= limit;
        if(offset < 0) {
            offset = 0;
        }
        Meteor.call('untappd.beers', limit, offset, (error, result) => {
            beers = result;
        });
    };
</script>

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
    <button on:click={prevBeers}>Prev</button>
    <button on:click={nextBeers}>Next</button>
    Offset: {offset}
{/if}