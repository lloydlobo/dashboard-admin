<script>
  import IconNotify from './icons/IconNotify.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import UserName from './UserName.svelte';
</script>

<div class="icon relative flex items-center gap-4 fill-slate-500 text-xs">
  <button class="icon-notification relative h-6 w-6 fill-amber-500">
    <IconNotify />
  </button>
  <button class="icon-user-avatar relative fill-amber-500">
    <UserAvatar />
  </button>
  <button class="icon-user-name relative fill-amber-500 text-lg font-medium">
    <UserName classAtUserName="hidden" />
  </button>
</div>
