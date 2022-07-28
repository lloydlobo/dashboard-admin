<script lang="ts">
  import { queryUser } from '../data/users';

  const user = queryUser;
  const { username } = user;
  const { FIRST_NAME, MIDDLE_NAME, LAST_NAME } = user.name;
</script>

<div class="user flex gap-x-2 font-bold">
  <span class="user-fullname">
    {FIRST_NAME}
    {MIDDLE_NAME}
    {LAST_NAME}
  </span>
  <span class="user-username">(@{username})</span>
</div>
