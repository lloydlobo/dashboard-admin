<script>
  import Logo from '../components/icons/Logo.svelte';

  export let date = new Date().getFullYear();
</script>

<footer class="footer mt-4 grid  px-4 py-2">
  <div
    class="footer-copy items-center justify-center border-t border-solid border-slate-300 "
  >
    <div class="relative flex ">
      <div
        class="logo relative m-0 flex origin-top-left scale-50 items-center gap-2 p-0"
      >
        <Logo />
        <div class="copy relative m-0 flex gap-4 p-0">
          <span class="relative text-3xl">Dashboard</span>
          <span class="relative text-3xl">&copy; {date} </span>
        </div>
      </div>
    </div>
  </div>
</footer>
