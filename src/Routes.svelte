<script>
  import { Router, Route } from "svelte-routing";
  import App from "./App.svelte";
  import Certificate from "./pages/Certificate.svelte";

  export let url = "";
</script>

<svelte:window />

<Router url={url}>
  <Route path="/certificates" component={Certificate} />
  <Route path="/" component={App} />
  <Route path="*" component={App} />
</Router>
