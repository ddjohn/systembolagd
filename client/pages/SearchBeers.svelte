<script>
    console.log('SearchBeers.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  

    export let beers;
    export let offset = 0;
    export let limit = 10;
    onMount(async () => {
        console.log('SearchBeers.svelte', 'onMount()');

        Meteor.call('untappd.search_beers', 'Coro', limit, offset, (error, result) => {
            console.log('SearchBeers.svelte', 'untappd.search_beers()');

            console.log('SearchBeers.svelte', 'error', error);           
            beers = result.beers.items;
        });
    });

    function nextSearchBeers() {
        console.log('SearchBeers.svelte', 'nextSearchBeers()');
        offset += limit;
        Meteor.call('untappd.search_beers', '', limit, offset, (error, result) => {
            beers = result.beers.items;
        });
    };

    function prevSearchBeers() {
        console.log('SearchBeers.svelte', 'prevSearchBeers()');
        offset -= limit;
        if(offset < 0) {
            offset = 0;
        }
        Meteor.call('untappd.search_beers', '', limit, offset, (error, result) => {
            beers = result.beers.items;
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
    <button on:click={prevSearchBeers}>Prev</button>
    <button on:click={nextSearchBeers}>Next</button>
    Offset: {offset}
{/if}