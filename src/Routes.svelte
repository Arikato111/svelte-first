<script>
  import { Router, Route } from "svelte-routing";
  import App from "./App.svelte";
  import Certificate from "./pages/Certificate.svelte";
  import SingleCertificate from "./pages/SingleCertificate.svelte";
  import { checkTheme } from "./components/CheckMode";
  import ToggleMode from "./components/ToggleMode.svelte";
  import Projects from "./pages/Projects.svelte";
  checkTheme();

  export let url = "";
</script>

<svelte:window />
<ToggleMode />
<Router {url}>
  <Route path="/certificates" component={Certificate} />
  <Route path="/certificates/:id" let:params component={SingleCertificate} />
  <Route path="/projects" component={Projects} />
  <Route path="/" component={App} />
  <Route path="*" component={App} />
</Router>
