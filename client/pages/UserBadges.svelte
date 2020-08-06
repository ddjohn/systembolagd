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

            console.log('Badges.svelte', 'error', error);
            badges = result.items;
        });
    });
</script>

<h1>Badges</h1>
{#if badges}
    <div class="flex four badge">
    {#each badges as badge}
      <span class="button">{badge.badge_name}</span>
    {/each}
    </div>
{/if}