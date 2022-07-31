<script lang="ts">
  import UserName from './UserName.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import SearchBar from './Search.svelte';
  import IconNotify from './icons/IconNotify.svelte';
</script>

<header>
  <div class="header shadow-xl">
    <div class="header-nav flex">
      <SearchBar />

      <div class="header-nav-icons flex">
        <div
          class="icon relative flex items-center gap-4 fill-slate-500 text-xs"
        >
          <button class="icon-notification relative h-6 w-6 fill-amber-500">
            <IconNotify />
          </button>
          <button class="icon-user-avatar relative fill-amber-500">
            <UserAvatar />
          </button>
          <button class="icon-user-name relative fill-amber-500">
            <UserName />
          </button>
        </div>
      </div>
    </div>

    <div class="wrapper-user flex items-center gap-2 p-4 text-4xl">
      <UserAvatar />
      <div class="user-body flex flex-col">
        <span class="greeting text-base font-bold">Hi there,</span>
        <UserName />
      </div>
    </div>
  </div>
</header>

<!-- https://natclark.com/tutorials/svelte-working-with-svgs/ -->
<style>
  header {
    grid-area: header;
  }
</style>
