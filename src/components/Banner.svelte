<script>
  import { Link } from "svelte-routing";
  export let isSwitching;
</script>

<div
  class="text-3xl text-center sm:text-6xl text-slate-800 dark:text-slate-200 font-medium"
>
  {#if isSwitching}
    ぼくの名前は <span class="text-purple-700 use-font font-bold"
      ><Link to={"/message"}><span>ナワサン。</span></Link></span
    ><span class="inline-block duration-300 ease-in-out transition">🌳</span>
  {:else}
    Hello!, I&apos;m <span class="text-purple-700 use-font font-bold changename"
      ><span>Arikato111</span></span
    ><span
      class="inline-block hover:rotate-45 duration-300 ease-in-out transition"
      >👋</span
    >
  {/if}
</div>
