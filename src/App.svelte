<script>
  import "./App.css";
  import GithubIcon from "./components/ButtonContact.svelte";
  import ThreeWord from "./components/ThreeWord.svelte";
</script>

<main
  class="min-h-screen bg-purple-50 border-4 border-purple-700 flex justify-center items-center box-border flex-col"
>
  <div class="text-3xl sm:text-6xl text-slate-800 font-medium">
    Hello!, I'm <span class="text-purple-700 use-font font-bold">Nawasan</span><span
      class="inline-block hover:rotate-45 duration-300 ease-in-out transition"
      >👋</span
    >
  </div>
  <ThreeWord />
  <div>
    <GithubIcon title="Github" icon="/github.svg" link="https://github.com/Arikato111" />
  </div>
</main>

<style>
</style>
