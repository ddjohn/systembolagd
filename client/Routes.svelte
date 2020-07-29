<script>
  console.log('Application.svelte', 'Loading...');

  import { Tracker   } from 'meteor/tracker'
  import { onDestroy } from 'svelte'

  import { Router, Route, navigate } from 'svelte-routing'

  import Navigation   from '/client/Navigation.svelte'
  import Home         from '/client/Home.svelte'
  import Credits      from '/client/Credits.svelte'
    import { Accounts } from 'meteor/accounts-base';

</script>

<Router url="">
    <div class="container">
        <Navigation />

        <Route path="/"        component={Home}/>
        <Route path="/:id"     component={Home} />        
        <Route path="/credits" component={Credits} />
  </div>
</Router>