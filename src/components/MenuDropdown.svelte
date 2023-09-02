<script>
  import ButtonContact from "./ButtonContact.svelte";
  import MenuIcon from "./icons/MenuIcon.svelte";
  import PrinterIcon from "./icons/PrinterIcon.svelte";
  import BookIcon from "./icons/BookIcon.svelte";

  export let link;
  let isShow = false;
</script>

<div class="inline-block cursor-pointer print:hidden">
      <div class="relative">
        <div class="text-red-800" on:click={() => isShow = !isShow}>
          <ButtonContact Icon={MenuIcon} title="" />
        </div>

        <div
          class={`absolute z-10 duration-500 overflow-hidden ${
            isShow ? "h-40" : "h-0"
          }`}
        >
          <div class="grid-cols-2">
            <button on:click={() => window.print()}>
              <ButtonContact Icon={PrinterIcon} title="Print" />
            </button>
            <a target="_blank" rel="noreferrer" href={link}>
              <ButtonContact Icon={BookIcon} title="link" />
            </a>
          </div>
        </div>
      </div>
    </div>
