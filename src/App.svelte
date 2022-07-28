<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import Navigation from './lib/components/Navigation.svelte';
</script>

<!-- TODO Delete after production -->
<div class="design-bg hidden opacity-25 ">
  <div class="design-bg-img" />
</div>

<Header />

<aside class="grid grid-flow-row">
  <Navigation />
</aside>

<main />

<style lang="postcss">
  main {
    /* width: min(100% - 2rem, 80vw); */
  }

  .design-bg {
    position: relative;
    /* position: absolute; */
    /* display: grid; */
    /* top: 0; */
  }

  .design-bg-img {
    position: absolute;
    width: 100vw;
    height: 100vh;
    /*  https://css-tricks.com/perfect-full-page-background-image/ */
    background-image: url('https://cdn.statically.io/gh/TheOdinProject/curriculum/main/html_css/grid-lessons/project-dashboard/dashboard-project.png');
    /* background-repeat: no-repeat; */
    background-attachment: fixed;
    background-position: center center;
    background-size: contain;
  }
</style>
