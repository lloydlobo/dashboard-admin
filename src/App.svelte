<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import Navigation from './lib/components/Navigation.svelte';

  const avatarSvg = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM7.527 17h8.946a4.5 4.5 0 0 0-8.946 0z"></path></g></svg>`;
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
