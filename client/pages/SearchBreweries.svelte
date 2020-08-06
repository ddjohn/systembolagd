<script>
    console.log('SearchBreweries.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  

    export let breweries;
    export let offset = 0;
    export let limit = 10;
    onMount(async () => {
        console.log('SearchBreweries.svelte', 'onMount()');

        Meteor.call('untappd.search_breweries', 'Po', limit, offset, (error, result) => {
            console.log('SearchBreweries.svelte', 'untappd.search_breweries()');

            console.log('SearchBreweries.svelte', 'error', error);           
   console.log('result', result);  
            breweries = result.brewery.items;
        });
    });

    function nextSearchBreweries() {
        console.log('SearchBreweries.svelte', 'nextSearchBreweries()');
        offset += limit;
        Meteor.call('untappd.search_breweries', '', limit, offset, (error, result) => {
            breweries = result.breweries.items;
        });
    };

    function prevSearchBreweries() {
        console.log('SearchBreweries.svelte', 'prevSearchBreweries()');
        offset -= limit;
        if(offset < 0) {
            offset = 0;
        }
        Meteor.call('untappd.search_beers', '', limit, offset, (error, result) => {
            breweries = result.brewery.items;
        });
    };
</script>

{#if breweries}
    <table class='primary'>
    <thead>
        <tr><th>Beer</th><th>Brewery</th></tr>
    </thead>
    <tbody>
    {#each breweries as brewery}
        <tr>    
            <td>{brewery.brewery.brewery_id}</td>
            <td>{brewery.brewery.brewery_name}</td>
            <td><img src="{brewery.brewery.brewery_label}"/></td>
            <td>{brewery.brewery.country_name}</td>
        </tr>
    {/each}
    </tbody>
    </table>
    <button on:click={prevSearchBreweries}>Prev</button>
    <button on:click={nextSearchBreweries}>Next</button>
    Offset: {offset}
{/if}
