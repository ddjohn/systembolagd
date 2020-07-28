<script>
    console.log('Home.svelte', 'Loading...');
  
    import { Meteor } from "meteor/meteor";
    import { onMount } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  

    onMount(async () => {
        console.log('Home.svelte', 'onMount()');
    });
</script>

<h1>Home</h1>
