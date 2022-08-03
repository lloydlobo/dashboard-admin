<script lang="ts">
  import IconSearch from './icons/IconSearch.svelte';

  let searchBar: HTMLInputElement;

  function handleSearch() {
    if (searchBar.value === '') {
      searchBar.focus();
    }
  }
</script>

<div class="search relative m-2 flex w-auto items-center">
  <input
    bind:this={searchBar}
    type="search"
    placeholder="Search ..."
    class="relative w-full rounded-full bg-neutral-100 py-2 px-6 focus-visible:bg-white active:bg-white"
  />
  <button on:click={handleSearch} class="relative -left-12 rounded-full">
    <div class="icon relative h-6 w-6 fill-slate-500 text-xs">
      <IconSearch />
    </div>
  </button>
</div>
