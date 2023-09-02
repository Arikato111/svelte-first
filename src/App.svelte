<script>
  import { Link } from "svelte-routing";
  import "./App.css";
  import ButtonContact from "./components/ButtonContact.svelte";
  import ThreeWord from "./components/ThreeWord.svelte";

  import GithubIcon from "./components/icons/GithubIcon.svelte";
  import CertificateIcon from "./components/icons/CertificateIcon.svelte";
  import LinkedinIcon from "./components/icons/LinkedinIcon.svelte";
  import YoutubeIcon from "./components/icons/YoutubeIcon.svelte";
  import FlowerIcon from "./components/icons/FlowerIcon.svelte";
  import FileIcon from "./components/icons/FileIcon.svelte";
  import OnlyFansIcon from "./components/icons/OnlyFansIcon.svelte";
  import CertificateData from "./Data/CertificatesData.json";
  import ProjectsData from "./Data/ProjectsData.json";
  import Banner from "./components/Banner.svelte";

  export let isFlowerFall = false;
  export let changeFloerFall = () => {};

  let TheFlowerIcon = isFlowerFall ? FlowerIcon : OnlyFansIcon;
  let flowerTitle = isFlowerFall ? "in the spring" : "OnlyFans";
  const onSpecial = () => {
    isFlowerFall = !isFlowerFall;
    changeFloerFall();
    if (isFlowerFall) {
      // @ts-ignore
      let sakura = new Sakura("body");
      TheFlowerIcon = FlowerIcon;
      flowerTitle = "in the spring";
    } else {
      // @ts-ignore
      let sakura = new Sakura("body");
      sakura.stop();
      TheFlowerIcon = OnlyFansIcon;
      flowerTitle = "OnlyFans";
    }
  };
  const evenClickThatButton = (e) => {
    e.preventDefault();
    onSpecial();
  };
</script>

<svelte:head>
  <title>Arikato111</title>
</svelte:head>

<main class={`main-flex ${isFlowerFall ? "bg-transparent" : ""}`}>
  {#if isFlowerFall}
    <div
      class="absolute -z-20 w-screen h-screen bg-cover opacity-80 bg-beautiful dark:hidden"
    />
  {/if}
  <Banner isSwitching={isFlowerFall} />
  {#if isFlowerFall}
    <ThreeWord word1={"Love"} word2={"Relationship"} word3={"Memories"} />
  {:else}
    <ThreeWord />
  {/if}
  <div class="sm:flex flex-wrap items-center justify-center">
    <a href="https://github.com/Arikato111">
      <ButtonContact Class="mobile-size" title="Github" Icon={GithubIcon} />
    </a>
    <Link to="/certificates">
      <ButtonContact
        Class="mobile-size"
        title="Certificates"
        Icon={CertificateIcon}
      />
    </Link>
    <Link to="/projects">
      <ButtonContact Class="mobile-size" title="Projects" Icon={FileIcon} />
    </Link>
    <a href="https://www.linkedin.com/in/nawasan-wisitsingkhon-183680239/">
      <ButtonContact Class="mobile-size" title="Linkedin" Icon={LinkedinIcon} />
    </a>
    <a href="https://youtube.com/@Arikato111">
      <ButtonContact Class="mobile-size" Icon={YoutubeIcon} title="Youtube" />
    </a>
    <a
      href="/redirect?link=149afd631693c895f81e508eb5aaef37"
      on:auxclick={(e) => {
        e.preventDefault();
        // onSpecial();
      }}
      on:contextmenu={evenClickThatButton}
      on:mousedown={(e) => e.preventDefault()}
      on:click={evenClickThatButton}
    >
      <ButtonContact
        Class="mobile-size"
        Icon={TheFlowerIcon}
        title={flowerTitle}
      />
    </a>
  </div>
  <!-- load resources -->
  {#each CertificateData as Cer}
    <img class="hidden" src={"/cer/low/" + Cer.img} alt="" />
  {/each}
  {#each ProjectsData as pj}
    <img class="hidden" src={pj.img} alt="" />
  {/each}
</main>
