<script lang="ts">
  import SvgStarPlus from '../../../public/star-plus.svg';
  import SvgEyePlus from '../../../public/eye-plus-outline.svg';
  import SvgShare from '../../../public/share-variant.svg';
</script>

<div class="project-actions flex h-6 justify-end gap-4">
  <img class="project-action-svg" src={SvgStarPlus} alt="Favorite it" />
  <img class="project-action-svg" src={SvgEyePlus} alt="Watch this" />
  <img class="project-action-svg" src={SvgShare} alt="Share Project" />
</div>

<style>
  img.project-action-svg {
    @apply shadow-none duration-300 ease-in;
  }

  img.project-action-svg:hover {
    @apply -translate-y-1 shadow-xl duration-300 ease-in-out;
  }
</style>
