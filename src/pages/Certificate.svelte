<script>
  import CertificateShow from "../components/CertificateShow.svelte";
  import ButtonContact from "../components/ButtonContact.svelte";
  import { Link } from "svelte-routing";

  import CertificateData from "../Data/CertificatesData.json";

  console.log(CertificateData);
</script>

<svelte:head>
  <title>Nawasan | Certificates</title>
</svelte:head>

<main class="main">
  <div class="inline-block">
    <Link to="/">
      <ButtonContact icon="/icons/arrow.png" title="back" />
    </Link>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center"
  >
    {#each CertificateData as Cer, id}
      <Link to={`/certificates/${id}`}>
        <CertificateShow src={Cer.img} alt={Cer.title} />
      </Link>
    {/each}
  </div>
</main>
