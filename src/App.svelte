<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import SidebarCards from './lib/components/SidebarCards.svelte';
  import { projects } from './lib/stores/projectsStore';
  import Projects from './lib/components/Projects.svelte';
  import ComponentTitle from './lib/components/ComponentTitle.svelte';
  import Footer from './lib/components/Footer.svelte';

  const arrayData = [];
  arrayData.push(projects);
</script>

<!-- TODO Delete after production -->
<div class="design-bg pointer-events-none absolute z-10 w-screen opacity-0">
  <div class="design-bg-img" />
</div>
<!-- ennd of: Delete after production -->

<Header />
<aside class="grid grid-flow-row">
  <Navigation />
</aside>
<main>
  <div class="projects p-4">
    <ComponentTitle title="Your Projects" />
    <Projects />
  </div>
</main>
<aside class="sidebar grid gap-8 px-4 pt-4">
  <div class="sidebar-announcements">
    <ComponentTitle title="Announcements" />
    <SidebarCards />
  </div>
  <div class="sidebar-trending">
    <ComponentTitle title="Trending" />
    <SidebarCards />
  </div>
</aside>

<Footer />

<style>
  .design-bg-img {
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    background-image: url('https://cdn.statically.io/gh/TheOdinProject/curriculum/main/html_css/grid-lessons/project-dashboard/dashboard-project.png');
    background-repeat: no-repeat;
    background-attachment: fixed;

    /* background-position: center center; */
    background-size: contain;
  }

  /*  https://css-tricks.com/perfect-full-page-background-image/ */
</style>
