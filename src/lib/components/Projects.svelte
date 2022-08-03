<script lang="ts">
  import { projects } from '../stores/projectsStore';

  const svgEye = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" /></svg>`;
  const svgStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C14.9 12 12.4 14.3 12 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" /></svg>`;
  const svgShare = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" /></svg>`;
</script>

<div class="projects-cards grid grid-flow-col gap-8">
  {#each projects as { userId, title }}
    <div
      class=" project
      grid cursor-pointer
      break-words rounded-lg border-l-4 border-amber-300 bg-white p-4 leading-snug shadow-md duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl "
    >
      <h3 class=" project-title text-xl font-bold uppercase">{title}</h3>
      <p class="project-title ">{title + title + title}</p>
      <p class="projectId underline">{userId} {new Date().getFullYear()}</p>

      <div class="project-actions flex justify-end gap-4">
        <div class="svg h-6 w-6"><a href={title}> {@html svgStar} </a></div>
        <div class="svg h-6 w-6"><a href={title}> {@html svgEye} </a></div>
        <div class="svg h-6 w-6"><a href={title}> {@html svgShare} </a></div>
      </div>
    </div>
  {/each}
</div>

<style>
  .projects-cards {
    grid-template-rows: repeat(3, 1fr);
  }

  .svg {
    @apply shadow-none duration-300 ease-in;
  }

  .svg:hover {
    @apply -translate-y-1 shadow-xl duration-300 ease-in-out;
  }
</style>
