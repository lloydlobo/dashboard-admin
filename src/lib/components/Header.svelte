<script lang="ts">
  import UserName from './UserName.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import SearchBar from './Search.svelte';
  import NavbarUserIcons from './NavbarUserIcons.svelte';
</script>

<header>
  <div class="header shadow-xl pt-4 pb-1 px-8">
    <div class="header-nav flex gap-4 pt-2">
      <div class="flex-1">
        <SearchBar />
      </div>
      <div class="header-nav-icons flex">
        <NavbarUserIcons />
      </div>
    </div>

    <div class="wrapper-user flex items-center justify-items-end gap-2 py-4 mb-4">
      <div class="user flex w-full gap-2">
        <UserAvatar />
        <div class="grid grid-cols-2 items-center ">
          <div class="user-body flex w-fit flex-col">
            <span class="greeting text-base font-bold">Hi there,</span>
            <UserName />
          </div>
        </div>
      </div>
      <div class="btn-crud grid h-fit w-fit grid-cols-3 items-end gap-4">
        <button class="btn">New</button>
        <button class="btn">Upload</button>
        <button class="btn">Share</button>
      </div>
    </div>
  </div>
</header>

<!-- https://natclark.com/tutorials/svelte-working-with-svgs/ -->
<style>
  header {
    grid-area: header;
  }

  button.btn {
    @apply rounded-full bg-blue-400 px-6 py-2 text-sm text-white;
  }
</style>
