<script>
  import Atropos from "atropos/svelte";
  export let src = "";
  export let alt = "";
  export let link = "";
  let domain = "https://hack1.hackathailand.com";
</script>

<div
  class=" lg:hover:scale-125 transition-all duration-500 inline-block"
>
  <a class="m-10 inline-block" target="_blank" rel="noreferrer" href={domain + link}>
    <Atropos class="my-atropos inline-block">
      <img
        class="w-80 shadow-lg shadow-gray-400 rounded-lg border-2 border-purple-300"
        {src}
        {alt}
        title={alt}
      />
    </Atropos>
  </a>
</div>
