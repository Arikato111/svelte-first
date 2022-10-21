<script>
  import Atropos from "atropos/svelte";
  export let src = "";
  export let alt = "";
</script>

<div class="m-10 inline-block">
  <Atropos class="my-atropos inline-block lg:hover:scale-125 transition-all duration-500">
    <img
      class="w-80 shadow-lg shadow-gray-400 rounded-lg border-2 border-purple-300"
      {src}
      {alt}
      title={alt}
    />
  </Atropos>
</div>
