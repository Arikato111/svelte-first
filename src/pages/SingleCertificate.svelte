<script>
  import CertificatesData from "../Data/CertificatesData.json";
  import ButtonContact from "../components/ButtonContact.svelte";
  import { Link } from "svelte-routing";
  import ArrowIcon from "../components/icons/ArrowIcon.svelte";
  import MenuDropdown from "../components/MenuDropdown.svelte";


  export let id;

  if (!CertificatesData[id]) {
    window.history.back();
  }
</script>

<svelte:window />

<svelte:head>
  <title>{`Arikato111 | ${CertificatesData[id].title}`}</title>
</svelte:head>

<main class="main">
  <div>
    <div class="inline-block cursor-pointer print:hidden">
      <Link to="/certificates">
        <ButtonContact Icon={ArrowIcon} title="back" />
      </Link>
    </div>
    <MenuDropdown id={id} />
  </div>
  <div class="text-center my-20 lg:my-0 print:m-0">
    <img
      id="certificate"
      title={CertificatesData[id].title}
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
