<script>
  import CertificatesData from "../Data/CertificatesData.json";
  import ButtonContact from "../components/ButtonContact.svelte";
  import { Link } from "svelte-routing";
  import PrinterIcon from "../components/icons/PrinterIcon.svelte";
  import ArrowIcon from "../components/icons/ArrowIcon.svelte";
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from "@rgossiaux/svelte-headlessui";
  import PdfIcon from "../components/icons/PdfIcon.svelte";
  import MenuIcon from "../components/icons/MenuIcon.svelte";
  import BookIcon from "../components/icons/BookIcon.svelte";


  export let id;

  if (!CertificatesData[id]) {
    window.history.back();
  }
</script>

<svelte:window />

<svelte:head>
  <title>{`Nawasan | ${CertificatesData[id].title}`}</title>
</svelte:head>

<main class="main">
  <div>
    <div class="inline-block cursor-pointer print:hidden">
      <Link to="/certificates">
        <ButtonContact Icon={ArrowIcon} title="back" />
      </Link>
    </div>

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
            <a target="_blank" rel="noreferrer" href={CertificatesData[id].cer}>
              <ButtonContact Icon={PdfIcon} title="PDF" />
            </a>
            <a target="_blank" rel="noreferrer" href={CertificatesData[id].link}>
              <ButtonContact Icon={BookIcon} title="Course" />
            </a>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  </div>
  <div class="text-center my-20 lg:my-0 print:m-0">
    <img
      id="certificate"
      title="click to view course"
      class="w-full inline-block lg:w-7/12 shadow-lg shadow-gray-400 print:shadow-none print:w-screen"
      src={CertificatesData[id].img}
      alt={CertificatesData[id].title}
    />
  </div>
</main>

<style>
  @media print {
    @page {
      margin: 0;
      padding: 0;
      size: A4 landscape;
    }
    img {
      height: 100vh;
    }
  }
</style>
