<script>
  console.log('Application.svelte', 'Loading...');

  import { Tracker   } from 'meteor/tracker'
  import { onDestroy } from 'svelte'
  import { Router, Route, navigate } from 'svelte-routing'
  import Navigation   from '/client/Navigation.svelte'
  import Home         from '/client/Home.svelte'
  import Credits      from '/client/Credits.svelte'
  import Other      from '/client/Other.svelte'
    import { Accounts } from 'meteor/accounts-base';

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
      <Route path="/"        component={Home}/>
      <Route path="/:id"     component={Home} />        
      <Route path="/credits" component={Credits} />
      <Route path="/other"   component={Other} />
    
    {:else}
    
      <Navigation />
      <Route path="/"        component={Home}/>
      <Route path="/:id"     component={Home} />        
      <Route path="/credits" component={Credits} />
    
    {/if}
  </div>
</Router>