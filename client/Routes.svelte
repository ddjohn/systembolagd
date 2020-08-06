<script>
  console.log('Application.svelte', 'Loading...');

  import { Tracker   } from 'meteor/tracker'
  import { onDestroy } from 'svelte'
  import { Router, Route, navigate } from 'svelte-routing'
  import { Accounts } from 'meteor/accounts-base';

  import Navigation      from '/client/Navigation.svelte'  
  import UserProfile     from '/client/pages/UserProfile.svelte'
  import UserBeers       from '/client/pages/UserBeers.svelte'
  import UserBadges      from '/client/pages/UserBadges.svelte'
  import UserFriends     from '/client/pages/UserFriends.svelte'
  import SearchBeers     from '/client/pages/SearchBeers.svelte'
  import SearchBreweries from '/client/pages/SearchBreweries.svelte'
  import Credits         from '/client/pages/Credits.svelte'
    
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
      <Route path="/"        component={UserProfile} />
      <Route path="/:id"     component={UserProfile} />        
      <Route path="/userfriends" component={UserFriends} />
      <Route path="user/badges"  component={UserBadges} />
      <Route path="/userbeers"   component={UserBeers} />
      <Route path="/searchbeers"   component={SearchBeers} />
      <Route path="/searchbreweries"   component={SearchBreweries} />
      <Route path="/credits" component={Credits} />
    
    {:else}
    
      <Navigation />
      <Route path="/"        component={UserProfile}/>
      <Route path="/:id"     component={UserProfile} />        
      <Route path="/credits" component={Credits} />
    
    {/if}
  </div>
</Router>