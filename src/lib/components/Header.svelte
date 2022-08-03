<script lang="ts">
  import UserName from './UserName.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import SearchBar from './Search.svelte';
  import NavbarUserIcons from './NavbarUserIcons.svelte';
</script>

<header class="bg-white">
  <div class="header px-8 pt-4 pb-1 shadow-lg">
    <div class="header-nav flex gap-4 pt-2">
      <div class="flex-1">
        <SearchBar />
      </div>
      <div class="header-nav-icons flex">
        <NavbarUserIcons />
      </div>
    </div>

    <div
      class="wrapper-user mb-4 flex items-center justify-items-end gap-2 py-4"
    >
      <div class="user grid w-full items-center gap-2">
        <div class="text-6xl">
          <UserAvatar classAvatar={'text-6xl'} />
        </div>

        <div class="user-name-id grid grid-cols-2 items-center ">
          <div class="user-body flex w-fit flex-col gap-1">
            <span class="greeting text-sm font-bold">Hi there,</span>
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

  .user {
    grid-template-columns: auto 1fr;
  }
</style>
