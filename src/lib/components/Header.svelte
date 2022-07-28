<script lang="ts">
  import UserName from './UserName.svelte';
  import UserAvatar from './UserAvatar.svelte';
</script>

<header>
  <div class="header shadow-xl">
    <div class="wrapper-user flex items-center gap-2 p-4 text-4xl">
      <UserAvatar />
      <div class="user-body flex flex-col">
        <span class="greeting text-base font-bold">Hi there,</span>
        <UserName />
      </div>
    </div>
  </div>
</header>
