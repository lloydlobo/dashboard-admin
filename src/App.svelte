<script lang="ts">
  import { onMount } from 'svelte';
  import { identity } from 'svelte/internal';
  import Header from './lib/components/Header.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import { projects, URL_TODO } from './lib/stores/projectsStore';

  let user = {
    firstname: 'Ada',
    lastname: 'Lovelace',
  };

  let data:
    | { userId: number; id: number; title: string; completed: boolean }[]
    | ProjectType[];

  let arrayData = [];
  type ProjectType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const url = URL_TODO as string;

  arrayData.push(projects);

  // async function fetchProjects() {
  //   const results = fetch(url)
  //     .then((response: Response) => response.json())
  //     .then((json: ProjectType[]) => {
  //       console.log(json);
  //       data = json;
  //       arrayData.push(data);
  //       console.log(arrayData);
  //       return data;
  //     })
  //     .catch((err: string) => {
  //       throw new Error(err);
  //     });

  //   const res = await Promise.resolve(results);

  //   return res;
  //   // return Promise.resolve(res);
  // }
  // onMount(fetchProjects);
</script>

<!-- TODO Delete after production -->
<div class="design-bg hidden opacity-25 ">
  <div class="design-bg-img" />
</div>

<Header />

<aside class="grid grid-flow-row">
  <Navigation />
</aside>

<main>
  <div class="projects grid grid-flow-col gap-2 p-4">
    {#each projects as { userId, id, title, completed }}
      <div
        class="project grid max-w-md cursor-pointer break-words rounded-lg border-r-4  border-l-4  border-amber-300 bg-white p-4 shadow-md duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
      >
        <h3 class="project-title text-xl font-bold uppercase">{title}</h3>
        <p class="project-title ">{title + title + title}</p>
        <p class="projectId underline">{userId}</p>
        <span class="font-light">{id}</span>
        <div class="status rounded">{completed}</div>
      </div>
    {/each}
  </div>
</main>

<style>
  .design-bg {
    position: relative;
  }

  .design-bg-img {
    position: absolute;
    width: 100vw;
    height: 100vh;

    /*  https://css-tricks.com/perfect-full-page-background-image/ */
    background-image: url('https://cdn.statically.io/gh/TheOdinProject/curriculum/main/html_css/grid-lessons/project-dashboard/dashboard-project.png');

    /* background-repeat: no-repeat; */
    background-attachment: fixed;
    background-position: center center;
    background-size: contain;
  }
</style>
