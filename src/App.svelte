<script lang="ts">
  // import svelteLogo from './assets/svelte.svg';
  // import Counter from './lib/Counter.svelte';
</script>

<main>
  <div class="design-bg">
    <div class="design-bg__img -z-50 brightness-50" />
  </div>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
</main>

<style>
  main {
    /* width: min(100% - 2rem, 80vw); */
  }

  .design-bg {
    position: relative;
    display: grid;
  }

  .design-bg__img {
    position: absolute;
    width: 100vw;
    height: 100vh;

    /*  https://css-tricks.com/perfect-full-page-background-image/ */
    background: url(images/bg.jpg) no-repeat center center fixed;
    background-image: url(../.archive/brief/dashboard-project.png);
    background-repeat: no-repeat;
    background-size: contain; /* cover */
    background-attachment: fixed;
    background-position: center center;
  }

  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
