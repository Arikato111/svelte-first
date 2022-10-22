<script>
  import { Link } from "svelte-routing";
  import "./App.css";
  import ButtonContact from "./components/ButtonContact.svelte";
  import ThreeWord from "./components/ThreeWord.svelte";
</script>

<svelte:head>
  <title>Nawasan</title>
</svelte:head>

<main class="main-flex">
  <div class="text-3xl sm:text-6xl text-slate-800 font-medium">
    Hello!, I'm <span class="text-purple-700 use-font font-bold">Nawasan</span
    ><span
      class="inline-block hover:rotate-45 duration-300 ease-in-out transition"
      >👋</span
    >
  </div>
  <ThreeWord />
  <div class="flex flex-wrap items-center justify-center">
    <a href="https://github.com/Arikato111">
      <ButtonContact title="Github" icon="/icons/github.svg" />
    </a>
    <Link to="/certificates">
      <ButtonContact title="Certificates" icon="/icons/certificate.png" />
    </Link>
  </div>
</main>

<style>
</style>
