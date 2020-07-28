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
<div>
    <p>
        <b>Meteor is an open source platform for web, mobile, and
        desktop used by over half a million developers around the 
        globe to make shipping javascript applications simple, 
        efficient, and scalable.</b><br/>
        > <a href="https://www.meteor.com/">Meteor</a> - MIT License
    </p>
    <p>
        <b>Cybernetically enhanced web apps</b><br/>
        > <a href="https://svelte.dev/">Svelte</a> -MIT License
    </p>
    <p>
        <b>MongoDB is a document database with the scalability and 
        flexibility that you want with the querying and indexing that 
        you need</b><br/>
        > <a href="https://www.mongodb.com/">Mongo DB</a> - Server Side Public License (SSPL) v1
    </p>
    <p>
        <b>Lightweight and beautiful library</b><br/>
        > <a href="https://picnicss.com/">Picnic CSS</a> - MIT License
    </p>
    <p>
        <b>A SSL Proxy for Meteor</b><br/>
        > <a href="https://github.com/Tarang/Meteor-SSL-proxy">SSL Proxy for Meteor</a> - Unknown
    </p>
</div>