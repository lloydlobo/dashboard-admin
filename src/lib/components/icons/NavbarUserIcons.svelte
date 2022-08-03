<script>
  import UserAvatar from '../users/UserAvatar.svelte';
  import UserName from '../users/UserName.svelte';
  import IconNotify from './IconNotify.svelte';
</script>

<div class="icon relative flex items-center gap-4 fill-slate-500 text-xs">
  <button class="icon-notification relative h-6 w-6 fill-amber-500">
    <IconNotify />
  </button>
  <button class="icon-user-avatar relative fill-amber-500">
    <UserAvatar classAvatar={'text-2xl'} />
  </button>
  <button class="icon-user-name relative fill-amber-500 text-lg font-medium">
    <UserName classAtUserName="hidden" />
  </button>
</div>
