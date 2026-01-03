<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import logo from "$lib/assets/logo.svg";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="sticky top-0 z-10 flex items-center bg-(--body-bg) px-6 py-3">
  <div class="flex-1">
    <a href="/" class="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity">
      <img src={logo} alt="Tailwind Start" class="h-8 w-8" />
      <span>Tailwind Start</span>
    </a>
  </div>
  <div class="flex flex-5 justify-center">
    <a href="/docs" class="rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
      Docs
    </a>
    <a
      href="/components"
      class="rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
    >
      Components
    </a>
    <a href="/blocks" class="rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
      Blocks
    </a>
  </div>
  <div class="flex flex-1 justify-end">
    <ThemeToggle />
  </div>
</div>

{@render children()}
