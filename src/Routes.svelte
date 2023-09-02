<script>
  import { Router, Route } from "svelte-routing";
  import App from "./App.svelte";
  import SingleCertificate from "./pages/SingleCertificate.svelte";
  import { checkTheme } from "./components/CheckMode";
  import ToggleMode from "./components/ToggleMode.svelte";
  import Projects from "./pages/Projects.svelte";
  import YoutubeSong from "./components/YoutubeSong.svelte";
  import { pause, play  } from "./components/PlaySound";
  import Certificate from "./pages/Certificate.svelte";
  import Message from "./pages/Message.svelte";

  checkTheme();

  export let url = "";
  let isFlowerFall = false;
  let isMobile = window.navigator.userAgent.match(/Mobile/);

  const changeFlowerFall = () => {
    isFlowerFall = !isFlowerFall;
    if (isMobile) {
      if (isFlowerFall) play();
      else pause();
    }
  };
</script>

<svelte:window />
<ToggleMode />
{#if isFlowerFall && !isMobile}
  <YoutubeSong />
{/if}
<Router {url}>
  <Route path="/certificates"><Certificate /></Route>
  <Route path="/certificates/:id" let:params><SingleCertificate id={params.id} /></Route>
  <Route path="/message"><Message isFlowerFall={isFlowerFall} /></Route>
  <Route path="/projects"><Projects /></Route>
  <Route path="/"
    ><App {isFlowerFall} changeFloerFall={changeFlowerFall} /></Route
  >
  <Route path="*" component={App} />
</Router>
