<script>
  export let title = "";
  export let descript = "";
  export let src = "";
  export let link = "";
  export let source = "";
</script>

<div
  class="img-block sm:scale-95 sm:hover:scale-100 duration-500 relative inline-block border-2 my-3 shadow-none border-purple-300 w-[320px] h-[350px] rounded-lg overflow-hidden sm:shadow-md shadow-zinc-400 dark:shadow-zinc-500 dark:bg-slate-800"
>
  <div class="overflow-hidden">
    <img class="img-hover sm:scale-125 w-full h-[200px] duration-500 object-cover" {src} alt="project images" />
  </div>
  <h3
    class="text-xl py-1 text-zinc-800 dark:text-white"
  >
    {title}
  </h3>
  <div class="dark:text-white">
    <div>{descript}</div>
    <div class="bottom-0 absolute my-1 w-full">
      <a
        target="_blank"
        class="px-2 py-1 bg-purple-400 hover:bg-purple-500 border border-purple-500 text-white rounded-md hover:scale-105 duration-200 inline-block dark:bg-purple-800 dark:hover:bg-purple-600"
        href={link}>website</a
        >
        <a
        target="_blank"
        class="px-2 py-1 bg-purple-400 hover:bg-purple-500 border border-purple-500 text-white rounded-md hover:scale-105 duration-200 inline-block dark:bg-purple-800 dark:hover:bg-purple-600"
        href={source}>source code</a
      >
    </div>
  </div>
</div>

<style>
  .img-block:hover .img-hover {
    transform: scale(1.0);
  }
</style>