<script>
  import CertificatesData from "../Data/CertificatesData.json";
  import ButtonContact from "../components/ButtonContact.svelte";
  import { Link } from "svelte-routing";
  export let id;
  let domain = "https://hack1.hackathailand.com";

  if (!CertificatesData[id]) {
    window.history.back();
  }
</script>

<svelte:window />

<main
  class="min-h-screen bg-purple-50 box-border border-4 border-purple-700 print:border-none"
>
  <div class="flex justify-between">
    <div class="inline-block cursor-pointer print:hidden">
      <Link to="/certificates">
        <ButtonContact icon="/icons/arrow.png" title="back" />
      </Link>
    </div>
    <div class="inline-block cursor-pointer print:hidden">
      <button on:click={()=> print()}>
        <ButtonContact icon="/icons/printer.png" title="Print" />
      </button>
    </div>
  </div>
  <div class="text-center my-20 lg:my-0 print:m-0">
    <a
      target="_blank"
      rel="noreferrer"
      class=" flex flex-col items-center"
      href={domain + CertificatesData[id].link}
    >
      <img
        id="certificate"
        title="click to view course"
        class="w-full lg:w-7/12 shadow-lg shadow-gray-400 print:shadow-none print:w-screen"
        src={CertificatesData[id].img}
        alt={CertificatesData[id].title}
      />
    </a>
  </div>
</main>

<style>
  @media print {
    @page {
      margin: 0;
      size: landscape;
      scale: 200;
    }
    img {
      /* width: 100%; */
      height: 100vh;
    }
  }
</style>
