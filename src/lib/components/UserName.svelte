<script lang="ts">
  import { queryUser } from '../data/users';

  export let classAtUserName = '';

  const user = queryUser;
  const { username } = user;
  const { FIRST_NAME, MIDDLE_NAME, LAST_NAME } = user.name;
</script>

<div class="user md:text-xl flex gap-x-2">
  <div class="user-fullname">
    {FIRST_NAME}
    {MIDDLE_NAME}
    {LAST_NAME}
  </div>
  <div class={classAtUserName}>(@{username})</div>
</div>
