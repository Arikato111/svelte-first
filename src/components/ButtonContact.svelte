<script>
  import { Link } from "svelte-routing";
  export let title;
  export let icon;
</script>

<div
  class="flex justify-center items-center rounded border-2 py-1 px-3 font-medium border-black hover:bg-purple-100 m-1"
>
  <img class="inline-block w-8 mx-1" src={icon} alt="github icon" />{title}
</div>
