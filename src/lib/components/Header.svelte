<script lang="ts">
  const avatarSvg = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM7.527 17h8.946a4.5 4.5 0 0 0-8.946 0z"></path></g></svg>`;

  const user = {
    name: {
      first_name: 'Morgan',
      middle_name: '',
      last_name: 'Oakley',
    },
    username: 'morgan',
  };

  const first_name = user.name.first_name;
  const middle_name = user.name.middle_name;
  const last_name = user.name.last_name;
</script>

<header>
  <div class="header  shadow-xl">
    <div class="wrapper-user flex items-center gap-2 p-4 text-4xl">
      <div class="user-avatar">
        <div class="avatar">
          <div
            class="avatar-bg relative flex rounded-full bg-yellow-400 object-contain"
          >
            <a href={user.username} alt={`@${user.username}`}
              ><div class="avatar-svg min-h-full p-2">
                {@html avatarSvg}
              </div></a
            >
          </div>
        </div>
      </div>
      <div class="user-body flex flex-col">
        <span class="greeting text-base font-bold">Hi there,</span>
        <div class="user flex gap-x-2 font-bold">
          <span class="user-fullname">
            {first_name}
            {middle_name}
            {last_name}
          </span>
          <span class="user-username">(@{user.username})</span>
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="postcss">
</style>
