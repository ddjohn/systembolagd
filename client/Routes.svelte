<script>
  console.log('Application.svelte', 'Loading...');

  import { Tracker   } from 'meteor/tracker'
  import { onDestroy } from 'svelte'
  import { Router, Route, navigate } from 'svelte-routing'
  import { Accounts } from 'meteor/accounts-base';

  import Navigation   from '/client/Navigation.svelte'
  
  import Home    from '/client/pages/Home.svelte'
  import Credits from '/client/pages/Credits.svelte'
  import Beers   from '/client/pages/Beers.svelte'
  import Badges  from '/client/pages/Badges.svelte'
  import Friends from '/client/pages/Friends.svelte'
    
  let loggedIn = false

  const computation = Tracker.autorun(() => {
    loggedIn = !!Meteor.user()
    console.log('loggedin=' + loggedIn);
  });
  onDestroy(() => computation.stop());

</script>

<Router url="">
  <div class="container">

    {#if loggedIn}
    
      <Navigation />
      <Route path="/"        component={Home} />
      <Route path="/:id"     component={Home} />        
      <Route path="/friends" component={Friends} />
      <Route path="/badges"  component={Badges} />
      <Route path="/beers"   component={Beers} />
      <Route path="/credits" component={Credits} />
    
    {:else}
    
      <Navigation />
      <Route path="/"        component={Home}/>
      <Route path="/:id"     component={Home} />        
      <Route path="/credits" component={Credits} />
    
    {/if}
  </div>
</Router>