<script lang="ts">
  import Header from './lib/layout/Header.svelte';
  import Navigation from './lib/layout/Navigation.svelte';
  import Main from './lib/layout/Main.svelte';
  import Sidebar from './lib/layout/Sidebar.svelte';
  import Footer from './lib/layout/Footer.svelte';
  import { projects } from './lib/stores/projectsStore';

  const arrayData = [];
  arrayData.push(projects);
</script>

<Header />
<Navigation />
<Main />
<Sidebar />
<Footer />

<style>
  /* .design-bg-img { */

  /*   top: 0; */

  /*   right: 0; */

  /*   left: 0; */

  /*   height: 100vh; */

  /*   background-image: url('https://cdn.statically.io/gh/TheOdinProject/curriculum/main/html_css/grid-lessons/project-dashboard/dashboard-project.png'); */

  /*   background-repeat: no-repeat; */

  /*   background-attachment: fixed; */

  /*   background-position: center center; */

  /*   background-size: contain; */

  /* } */

  /*  https://css-tricks.com/perfect-full-page-background-image/ */
</style>
