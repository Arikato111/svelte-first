<script>
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from "@rgossiaux/svelte-headlessui";
  import ButtonContact from "./ButtonContact.svelte";
  import MenuIcon from "./icons/MenuIcon.svelte";
  import PrinterIcon from "./icons/PrinterIcon.svelte";
  import BookIcon from "./icons/BookIcon.svelte";
  import CertificatesData from "../Data/CertificatesData.json";

  export let id;
</script>

<div class="inline-block cursor-pointer print:hidden">
  <Popover class="relative">
    <PopoverButton class="text-red-800"
      ><ButtonContact Icon={MenuIcon} title="" /></PopoverButton
    >

    <PopoverPanel class="absolute z-10">
      <div class="grid-cols-2">
        <button on:click={() => print()}>
          <ButtonContact Icon={PrinterIcon} title="Print" />
        </button>
        <a target="_blank" rel="noreferrer" href={CertificatesData[id].link}>
          <ButtonContact Icon={BookIcon} title="Course" />
        </a>
      </div>
    </PopoverPanel>
  </Popover>
</div>
