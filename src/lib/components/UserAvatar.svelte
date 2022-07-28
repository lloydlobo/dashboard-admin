<script lang="ts">
  import { queryUser } from '../data/users';

  const user = queryUser;
  const { avatar, username } = user;
</script>

<div class="user-avatar">
  <div class="avatar">
    <div
      class="avatar-bg relative flex rounded-full bg-yellow-400 object-contain"
    >
      <a href={username} alt={`@${username}`}
        ><div class="avatar-svg min-h-full p-2">
          {@html avatar}
        </div></a
      >
    </div>
  </div>
</div>
