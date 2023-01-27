<script>
  import CertificateShow from "../components/CertificateShow.svelte";
  import ButtonContact from "../components/ButtonContact.svelte";
  import { Link } from "svelte-routing";

  import CertificateData from "../Data/CertificatesData.json";
  import ArrowIcon from "../components/icons/ArrowIcon.svelte";

  if (CertificateData[0].id == 0) {
    CertificateData.reverse();
  }
</script>

<svelte:head>
  <title>Certificates | Arikato111</title>
</svelte:head>

<main class="main">
  <div class="inline-block">
    <Link to="/">
      <ButtonContact Icon={ArrowIcon} title="back" />
    </Link>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center"
  >
    {#each CertificateData as Cer}
      <Link to={`/certificates/${Cer.id}`}>
        <CertificateShow
          src={"/cer/low/" + Cer.img}
          alt={Cer.title}
          type={Cer.type}
        />
      </Link>
    {/each}
  </div>
</main>
