<script>
  export let src = "";
  export let alt = "";
  export let type = "";
</script>

<div class="m-10 inline-block">
  <span class="dark:text-slate-200 font-bold">{type}</span>
  <div
    class="lg:hover:scale-105 inline-block transition-all shadow lg:hover:shadow-lg shadow-gray-400 lg:hover:shadow-gray-300 duration-300 dark:shadow-slate-700 dark:hover:shadow-slate-800 rounded border-2 border-purple-400"
  >
    <img
      class="w-80"
      {src}
      {alt}
      title={alt}
    />
  </div>
</div>
