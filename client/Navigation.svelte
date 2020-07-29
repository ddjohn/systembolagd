<script>
    console.log('Navigation.svelte', 'Loading...');

    import { Meteor     } from "meteor/meteor";
    import { onMount    } from 'svelte';
    import { useTracker } from 'meteor/rdb:svelte-meteor-data';  
    import { Link       } from 'svelte-routing';

    onMount(async () => {
        console.log('Navigation.svelte', 'onMount()');

        var menu = document.getElementsByClassName("menu")[0];
        for(var i in menu.childNodes) {
            menu.childNodes[i].className += " button";
        }
    });

    $: currentUser = useTracker(() => Meteor.user());
    $: currentUserId = useTracker(() => Meteor.userId());
</script>

<div style="overflow: hidden; height: 70px;">
    <nav class="demo">
        <a href="#" class="brand">
            <img class="logo" src="https://untappd.s3.amazonaws.com/apps/ut_connection_default.png" />
            <span>
            SystemBolagd
            </span>
        </a>
                
        <!-- responsive-->
        <input id="bmenub" type="checkbox" class="show">
        <label for="bmenub" class="burger pseudo button">&#8801; menu</label>
    
        <div class="menu">
            {#if $currentUser}
            {$currentUser.profile.name}
            {:else}
            Not logged in
            {/if}
            
            <Link to='/'>Home</Link>
            <Link to='/other'>Beers</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/badges'>Badges</Link>
            <Link to='/credits'>Credits</Link>
        </div>
    </nav>
</div>
