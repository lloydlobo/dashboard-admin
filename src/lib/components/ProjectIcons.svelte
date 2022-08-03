<script lang="ts">
  export let completed: boolean;
  export let id: number;
</script>

<div class="icons actions flex items-end justify-end gap-4">
  <span class="cursor-pointer font-bold hover:shadow-md"> {id}</span>
  <div
    class="status
  cursor-pointer
  rounded
  font-bold
  hover:shadow-md"
  >
    {completed}
  </div>
</div>
