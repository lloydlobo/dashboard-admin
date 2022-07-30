<script lang="ts">
  import UserName from './UserName.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import IconSearch from './icons/IconSearch.svelte';
</script>

<header>
  <div class="header shadow-xl">
    <div class="search relative m-2 flex w-80 items-center">
      <input
        type="search"
        placeholder="Search ..."
        class="bg-white-100 relative w-full rounded-full py-4 px-6"
      />
      <button class="relative -left-12 rounded-full">
        <div class="icon relative h-6 w-6 fill-slate-500 text-xs">
          <IconSearch />
        </div>
      </button>
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
