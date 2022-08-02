<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import { projects } from './lib/stores/projectsStore';

  const arrayData = [];
  arrayData.push(projects);
</script>

<!-- TODO Delete after production -->
<div
  class="design-bg pointer-events-none absolute z-10 w-screen opacity-10"
>
  <div class="design-bg-img" />
</div>

<Header />

<aside class="grid grid-flow-row">
  <Navigation />
</aside>

<main>
  <div class="projects grid grid-flow-col grid-rows-3 gap-4 p-4">
    {#each projects as { userId, id, title, completed }}
      <div
        class="project grid max-w-sm cursor-pointer break-words rounded-lg border-r-4  border-l-4  
        border-amber-300 bg-white p-4 leading-snug shadow-md duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
      >
        <h3 class="project-title text-xl font-bold uppercase">{title}</h3>
        <p class="project-title ">{title + title + title}</p>
        <p class="projectId underline">{userId} {new Date().getFullYear()}</p>
        <div class="icons actions flex items-end justify-end gap-4">
          <span class="cursor-pointer font-bold hover:shadow-md">{id}</span>
          <div class="status cursor-pointer rounded font-bold hover:shadow-md">
            {completed}
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  .design-bg-img {
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;

    /*  https://css-tricks.com/perfect-full-page-background-image/ */
    background-image: url('https://cdn.statically.io/gh/TheOdinProject/curriculum/main/html_css/grid-lessons/project-dashboard/dashboard-project.png');
    background-repeat: no-repeat;
    background-attachment: fixed;

    /* background-position: center center; */
    background-size: contain;
  }
</style>
