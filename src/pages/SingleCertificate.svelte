<script>
  import CertificatesData from "../Data/CertificatesData.json";
  import ButtonContact from "../components/ButtonContact.svelte";
  import { Link } from "svelte-routing";
  import PrinterIcon from "../components/icons/PrinterIcon.svelte";
  import ArrowIcon from "../components/icons/ArrowIcon.svelte";

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
      <button on:click={() => print()}>
        <ButtonContact Icon={PrinterIcon} title="Print" />
      </button>
    </div>
  </div>
  <div class="text-center my-20 lg:my-0 print:m-0">
    <a
      target="_blank"
      rel="noreferrer"
      class=" flex flex-col items-center"
      href={CertificatesData[id].link}
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
      padding: 0;
      size: A4 landscape;
    }
    img {
      height: 100vh;
    }
  }
</style>
