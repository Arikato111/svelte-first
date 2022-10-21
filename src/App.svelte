<script>
  import "./App.css";
  import ButtonContact from "./components/ButtonContact.svelte";
  import ThreeWord from "./components/ThreeWord.svelte";
</script>

<main class="main">
  <div class="text-3xl sm:text-6xl text-slate-800 font-medium">
    Hello!, I'm <span class="text-purple-700 use-font font-bold">Nawasan</span
    ><span
      class="inline-block hover:rotate-45 duration-300 ease-in-out transition"
      >👋</span
    >
  </div>
  <ThreeWord />
  <div class="flex flex-wrap items-center justify-center">
    <ButtonContact
      title="Github"
      icon="/icons/github.svg"
      link="/github"
    />
    <ButtonContact
      title="Certificates"
      icon="/icons/certificate.png"
      link="/certificates"
    />
  </div>
</main>

<style>
</style>
