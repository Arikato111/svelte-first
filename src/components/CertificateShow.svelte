<script>
  import Atropos from "atropos/svelte";
  export let src = "";
  export let alt = "";
</script>

<div class="m-10 inline-block">
  <Atropos
    class="my-atropos shadow-lg  hidden shadow-slate-400 dark:shadow-slate-600  lg:inline-block lg:hover:scale-125 transition-all duration-500"
  >
    <img
      class="w-80 hidden lg:inline-block rounded-lg border-2 border-purple-300"
      {src}
      {alt}
      title={alt}
    />
  </Atropos>
  <div class="inline-block lg:hidden transition-all duration-500">
    <img
      class="w-80 shadow-lg shadow-slate-400 dark:shadow-slate-600   rounded-lg border-2 border-purple-300"
      {src}
      {alt}
      title={alt}
    />
  </div>
</div>
