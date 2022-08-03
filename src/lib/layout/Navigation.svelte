<script lang="ts">
  import Logo from '../components/icons/Logo.svelte';
  import { arraySettings, arrayLinks } from '../data/links';
</script>

<aside class="grid grid-flow-row">
  <nav
    class="navbar flow flex min-h-screen w-full flex-col  bg-blue-400 px-6 text-blue-50"
  >
    <!--  logo -->
    <div class="logo-wrapper mt-8 mb-10 flex">
      <Logo />
      <h1 class="text-3xl font-bold underline">Dashboard</h1>
    </div>

    <div class="grid gap-16">
      <div class="links  flex flex-col gap-5 ">
        {#if arrayLinks}
          <!-- @typescript-eslint/no-unsafe-member-access -->
          {#each arrayLinks as { link, icon }}
            <a
              class="link flex items-baseline gap-5 text-lg font-bold"
              href={link.url}
            >
              <i>{@html icon.svg}</i>
              <p class="text-xl hover:underline">{link.text}</p>
            </a>
          {/each}
        {/if}
      </div>
      <div class="links flex flex-1 flex-col gap-5">
        {#each arraySettings as { link, icon }}
          <a
            class="link flex items-baseline gap-6 text-lg font-bold"
            href={link.url}
          >
            <i>{@html icon.svg}</i>
            <p class="text-xl hover:underline">{link.text}</p>
          </a>
        {/each}
      </div>
    </div>
  </nav>
</aside>

<style>
  .navbar {
    grid-template-rows: auto, repeat(auto-fill, minmax(6rem, 1fr));
  }
</style>
