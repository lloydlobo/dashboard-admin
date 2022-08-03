<script>
  import ComponentTitle from '../components/ComponentTitle.svelte';
  import SidebarCards from '../components/SidebarCards.svelte';
</script>

<aside class="sidebar grid gap-8 px-4 pt-4">
  <div class="sidebar-announcements">
    <ComponentTitle title="Announcements" />
    <SidebarCards />
  </div>
  <div class="sidebar-trending">
    <ComponentTitle title="Trending" />
    <SidebarCards />
  </div>
</aside>
