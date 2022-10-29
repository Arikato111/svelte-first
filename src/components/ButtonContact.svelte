<script>
  export let title;
  export let Icon;
</script>

<div
  class="bg-purple-50 dark:bg-slate-900 text-black dark:text-slate-200  fill-black dark:fill-slate-200 flex justify-center items-center rounded border-2 py-1 px-3 font-medium border-black dark:border-slate-200 hover:bg-purple-100 dark:hover:bg-gray-800 m-1"
>
  <span class="inline-block w-8 mx-1">
    <svelte:component this={Icon} />
  </span>
  {title}
</div>
