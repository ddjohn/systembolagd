<script>
    console.log('Navigation.svelte', 'Loading...');
</script>

<div style="overflow: hidden;height: 250px;">
    <nav class="demo">
        <a href="#" class="brand">
            <img class="logo" src="https://untappd.s3.amazonaws.com/apps/ut_connection_default.png" />
            <span>SystemBolagd</span>
        </a>
    
        <!-- responsive-->
        <input id="bmenub" type="checkbox" class="show">
        <label for="bmenub" class="burger pseudo button">menu</label>
    
        <div class="menu">
            <a href="/" class="button icon-picture">Home</a>
            <a href="/credits" class="button icon-puzzle">Credits</a>
        </div>
    </nav>
</div>
