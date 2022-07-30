<script lang="ts">
  import UserName from './UserName.svelte';
  import UserAvatar from './UserAvatar.svelte';
</script>

<header>
  <div class="header shadow-xl">
    <div
      class="search m-2 flex w-fit  items-center gap-4 rounded-full bg-neutral-50 py-4 px-8"
    >
      <input
        type="search"
        placeholder="Search ..."
        class="rounded-xl bg-neutral-100 p-2"
      />
      <button class="h-8 w-8  rounded-full bg-blue-400">0</button>
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
