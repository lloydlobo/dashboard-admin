<script lang="ts">
  import { projects } from '../stores/projectsStore';
  import ProjectIcons from './ProjectIcons.svelte';
</script>

<div class="projects-cards grid grid-flow-col gap-8">
  {#each projects as { userId, title }}
    <div
      class="
      project
      grid cursor-pointer break-words rounded-lg border-l-4 border-amber-300 bg-white p-4 leading-snug shadow-md duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl "
    >
      <h3 class=" project-title text-xl font-bold uppercase">
        {title}
      </h3>
      <p class="project-title ">{title + title + title}</p>
      <p class="projectId underline">{userId} {new Date().getFullYear()}</p>

      <ProjectIcons />
    </div>
  {/each}
</div>

<style>
  .projects-cards {
    grid-template-rows: repeat(3, 1fr);
  }
</style>
