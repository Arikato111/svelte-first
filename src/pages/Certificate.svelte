<script>
  import CertificateShow from "../components/CertificateShow.svelte";
  import ButtonContact from "../components/ButtonContact.svelte";
  import CertificateData from "../Data/CertificatesData.json";
  import { Link } from "svelte-routing";

  console.log(CertificateData);
</script>

<main class="min-h-screen bg-purple-50 box-border border-4 border-purple-700">
  <div class="inline-block">
    <Link to="/">
      <ButtonContact icon="/icons/arrow.png" title="back" />
    </Link>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center"
  >
    {#each CertificateData as Cer}
      <CertificateShow src={Cer.img} link={Cer.link} alt={Cer.title} />
    {/each}
  </div>
</main>
