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

  export let isFlowerFall = false;
  export let changeFloerFall = () => {};

  let TheFlowerIcon = isFlowerFall ? FlowerIcon : OnlyFansIcon;
  let flowerTitle = isFlowerFall ? "Spring" : "OnlyFans";
  const onSpecial = () => {
    console.log(isFlowerFall);
    isFlowerFall = !isFlowerFall
    changeFloerFall();
    if (isFlowerFall) {
      // @ts-ignore
      let sakura = new Sakura("body");
      TheFlowerIcon = FlowerIcon;
      flowerTitle = "Spring";
    } else {
      // @ts-ignore
      let sakura = new Sakura("body");
      sakura.stop();
      TheFlowerIcon = OnlyFansIcon;
      flowerTitle = "OnlyFans";
    }
  };
</script>

<svelte:head>
  <title>Arikato111</title>
</svelte:head>

<main class="main-flex">
  <div
    class="text-3xl sm:text-6xl text-slate-800 dark:text-slate-200 font-medium"
  >
    Hello!, I'm <span class="text-purple-700 use-font font-bold changename"
      ><span>Arikato111</span></span
    ><span
      class="inline-block hover:rotate-45 duration-300 ease-in-out transition"
      >👋</span
    >
  </div>
  <ThreeWord />
  <div class="sm:flex flex-wrap items-center justify-center">
    <a href="https://github.com/Arikato111">
      <ButtonContact title="Github" Icon={GithubIcon} />
    </a>
    <Link to="/certificates">
      <ButtonContact title="Certificates" Icon={CertificateIcon} />
    </Link>
    <Link to="/projects">
      <ButtonContact title="Projects" Icon={FileIcon} />
    </Link>
    <a href="https://www.linkedin.com/in/nawasan-wisitsingkhon-183680239/">
      <ButtonContact title="Linkedin" Icon={LinkedinIcon} />
    </a>
    <a href="https://youtube.com/@Arikato111">
      <ButtonContact Icon={YoutubeIcon} title="Youtube" />
    </a>
    <a
      href="https://youtu.be/dHDNHIxmBNU"
      on:auxclick={(e) => {
        e.preventDefault();
        onSpecial();
      }}
      on:contextmenu={(e) => {
        e.preventDefault();
        onSpecial();
      }}
      on:click={(e) => {
        e.preventDefault();
        onSpecial();
      }}
    >
      <ButtonContact Icon={TheFlowerIcon} title={flowerTitle} />
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

<style>
  .changename:hover span {
    display: none;
  }
  .changename:hover::before {
    content: "Nawasan ";
  }
</style>
