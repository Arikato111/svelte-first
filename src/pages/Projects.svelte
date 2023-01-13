<script>
  import { Link } from "svelte-routing";
  import ButtonContact from "../components/ButtonContact.svelte";
  import ArrowIcon from "../components/icons/ArrowIcon.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import ProjectData from "../Data/ProjectsData.json";

</script>

<svelte:head>
  <title>Projects | Arikato111</title>
</svelte:head>

<main class="main">
  <div class="inline-block">
    <Link to="/">
      <ButtonContact Icon={ArrowIcon} title="back" />
    </Link>
  </div>
  <h1 class="dark:text-white text-2xl font-bold text-center">My open source projects</h1>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center p-3 justify-items-center"
  >
    {#each ProjectData as project}
      <ProjectCard
        title={project.title}
        descript={project.descript}
        src={project.img}
        link={project.link}
        source={project.source}
      />
    {/each}
  </div>
</main>
