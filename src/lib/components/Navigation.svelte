<script lang="ts">
  import Logo from './Logo.svelte';
  import { arrayLinks } from '../data/links';
</script>

<nav class="navbar w-fit bg-blue-400 px-6">
  <div class="logo-wrapper flex items-center">
    <Logo />
    <h1 class="text-3xl font-bold underline">Dashboard</h1>
  </div>

  <div class="links flex flex-col gap-4">
    <!-- @typescript-eslint/no-unsafe-member-access -->
    {#each arrayLinks as link}
      <a class="link flex items-baseline gap-6 font-bold" href="/">
        <i>{@html link.icon.svg}</i>
        <p class="text-lg hover:underline">{link.link.text}</p>
      </a>
    {/each}
  </div>
</nav>

<style lang="postcss">
</style>
