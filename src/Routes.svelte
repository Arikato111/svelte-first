<script>
  import { Router, Route } from "svelte-routing";
  import App from "./App.svelte";
  import Certificate from "./pages/Certificate.svelte";
  import SingleCertificate from "./pages/SingleCertificate.svelte";
  import { checkTheme } from "./components/CheckMode";
  import ToggleMode from "./components/ToggleMode.svelte";
  import Projects from "./pages/Projects.svelte";
  import YoutubeIcon from "./components/icons/YoutubeIcon.svelte";
  import YoutubeSong from "./components/YoutubeSong.svelte";
  import { pause, play, status } from "./components/PlaySound";

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
  <Route path="/certificates" component={Certificate} />
  <Route path="/certificates/:id" let:params component={SingleCertificate} />
  <Route path="/projects" component={Projects} />
  <Route path="/"
    ><App {isFlowerFall} changeFloerFall={changeFlowerFall} /></Route
  >
  <Route path="*" component={App} />
</Router>
