<script lang="ts">
  import UserName from './UserName.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import SearchBar from './Search.svelte';
  import NavbarUserIcons from './NavbarUserIcons.svelte';
</script>

<header>
  <div class="header shadow-xl">
    <div class="header-nav flex gap-4 px-4 pt-2">
      <div class="flex-1">
        <SearchBar />
      </div>
      <div class="header-nav-icons flex px-4">
        <NavbarUserIcons />
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
