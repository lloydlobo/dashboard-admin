<script lang="ts">
  import { queryUser } from '../data/users';

  export let classAvatar = 'text-6xl';

  const user = queryUser;
  const { avatar, username } = user;
</script>

<div class="user-avatar">
  <div class="avatar text-4xl">
    <div
      class="avatar-bg relative flex rounded-full bg-yellow-400 object-contain"
    >
      <a href={username} alt={`@${username}`}
        ><div id="avatar-svg" class={classAvatar}>
          {@html avatar}
        </div></a
      >
    </div>
  </div>
</div>

<style>
  #avatar-svg {
    @apply min-h-full p-2;
  }
</style>
