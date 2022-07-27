<script lang="ts">
  import Navigation from './lib/components/Navigation.svelte';
</script>

<aside class="grid grid-flow-row">
  <Navigation />
</aside>
<main>
  <div class="design-bg">
    <div class="design-bg-img -z-50 brightness-50" />
  </div>
</main>

<style lang="postcss">
  main {
    width: min(100% - 2rem, 80vw);
  }

  .design-bg {
    position: relative;
    display: grid;
  }

  .design-bg-img {
    position: absolute;
    width: 100vw;
    height: 100vh;

    /*  https://css-tricks.com/perfect-full-page-background-image/ */
    background-image: url('https://cdn.statically.io/gh/TheOdinProject/curriculum/main/html_css/grid-lessons/project-dashboard/dashboard-project.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: contain; /* cover */
    opacity: 0.418;
  }
</style>
