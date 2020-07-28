<script>
    console.log('Credits.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  

    onMount(async () => {
        console.log('Credits.svelte', 'onMount()');
    });
</script>

<h1>Credits</h1>
