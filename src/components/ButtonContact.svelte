<script>
  export let title;
  export let Icon;
</script>

<div
  class="duration-200 bg-purple-500 hover:bg-purple-400
  dark:bg-slate-900 text-white dark:text-slate-200
    fill-white  dark:fill-slate-200 flex justify-center 
    items-center rounded-lg border-2 py-1 px-3 font-medium
     border-purple-400 dark:border-slate-200 
     dark:hover:bg-gray-700 m-1 hover:scale-105"
>
  <span class="inline-block w-8 mx-1">
    <svelte:component this={Icon} />
  </span>
  <span class="">{title}</span>
</div>
