<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import SidebarCards from './lib/components/SidebarCards.svelte';
  import { projects } from './lib/stores/projectsStore';

  const arrayData = [];
  arrayData.push(projects);
</script>

<!-- TODO Delete after production -->
<div class="design-bg pointer-events-none absolute z-10 w-screen opacity-0">
  <div class="design-bg-img" />
</div>

<Header />

<aside class="grid grid-flow-row">
  <Navigation />
</aside>

<main>
  <div class="projects  p-4">
    <h3 class="mb-2 px-1 text-xl font-medium">{'Your Projects'}</h3>
    <div class="projects-cards grid grid-flow-col grid-rows-3 gap-8">
      {#each projects as { userId, id, title, completed }}
        <div
          class="
          project grid h-20 cursor-pointer break-words rounded-lg border-r-4 border-l-4 border-amber-300 bg-white p-4 leading-snug shadow-md duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl md:h-52"
        >
          <h3 class="project-title text-xl font-bold uppercase">{title}</h3>
          <p class="project-title ">{title + title + title}</p>
          <p class="projectId underline">{userId} {new Date().getFullYear()}</p>

          <div class="icons actions flex items-end justify-end gap-4">
            <span class="cursor-pointer font-bold hover:shadow-md">{id}</span>
            <div
              class="status cursor-pointer rounded font-bold hover:shadow-md"
            >
              {completed}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>

<aside class="sidebar px-4 pt-4">
  <SidebarCards title="Announcements" />
  <SidebarCards title="Trending" />
</aside>

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

  aside.sidebar {
    grid-area: sidebar;
  }
</style>
