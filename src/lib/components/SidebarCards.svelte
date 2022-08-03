<script>
  export let title = 'Announcements';
</script>

<div class="sidecard flow">
  <h3 class="mb-2 px-1 text-xl font-medium">{title}</h3>
  <div
    class="cards grid grid-rows-3 gap-4 rounded-md bg-white p-2 px-4 shadow-xl"
  >
    <div class="card">
      <h4 class="card-title font-bold">Site Maintenance</h4>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
    </div>
    <div class="card">
      <h4 class="card-title font-bold">Site Maintenance</h4>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
    </div>
    <div class="card">
      <h4 class="card-title font-bold">Site Maintenance</h4>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
    </div>
  </div>
</div>

<style>
  .card {
    @apply border-b border-solid border-gray-400 p-2 pb-4 text-xs;
  }

  .card .card-title {
    @apply mb-2;
  }
</style>
