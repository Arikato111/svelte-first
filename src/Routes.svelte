<script>
  import App from "./App.svelte";
  import Certificate from "./pages/Certificate.svelte";
</script>

<svelte:window />
{#if window.location.pathname === "/"}
  <App />
{:else if window.location.pathname === "/certificates"}
  <Certificate />
{:else}
  <script>
    window.location.pathname = "/"
  </script>
{/if}
