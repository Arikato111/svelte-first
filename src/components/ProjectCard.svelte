<script>
  export let title = "";
  export let descript = "";
  export let src = "";
  export let link = "";
  export let source = "";
</script>

<div class="h-[390px] mb-5">
  <div
    class="img-block p-1 duration-500 relative inline-block w-[320px] h-[390px] overflow-hidden dark:border-slate-200"
  >
    <div class="shadow-none overflow-hidden">
      <div
        class="overflow-hidden rounded-md border-2 border-purple-400 shadow-md shadow-gray-300 dark:shadow-gray-800"
      >
        <img
          class="img-hover shadow-inner h-[200px] w-full object-cover"
          {src}
          alt="project images"
        />
      </div>
      <h3 class="text-xl py-3 text-zinc-800 dark:text-white">
        <b>
          {title}
        </b>
      </h3>
      <div class="dark:text-white">
        <div class="px-3">{descript}</div>
        <div
          class="link-contact lg:h-0 overflow-hidden duration-500 bottom-1 absolute my-1 w-full"
        >
          <a
            target="_blank"
            class="border-2 border-white shadow dark:shadow-none shadow-gray-400 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 inline-block px-2 hover:px-5 py-1 bg-purple-600 hover:bg-purple-600/90 text-white rounded-md duration-300 dark:border-white dark:bg-slate-800 dark:hover:bg-slate-700"
            href={link}>website</a
          >
          <a
            target="_blank"
            class="border-2 border-white shadow dark:shadow-none shadow-gray-400 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 inline-block px-2 hover:px-5 py-1 bg-purple-600 hover:bg-purple-600/90 text-white rounded-md duration-300 dark:border-white dark:bg-slate-800 dark:hover:bg-slate-700"
            href={source}>source code</a
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .img-block:hover .img-hover {
    transform: scale(1);
  }
</style>
