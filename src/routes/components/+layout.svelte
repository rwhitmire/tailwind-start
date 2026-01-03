<script lang="ts">
  import { page } from "$app/state";

  const navItems = [
    { href: "/components/buttons", label: "Buttons" },
    { href: "/components/inputs", label: "Inputs" },
    { href: "/components/accordion", label: "Accordion" },
    { href: "/components/modal", label: "Modal" },
  ];

  let sidebarOpen = $state(false);

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }

  function closeSidebar() {
    sidebarOpen = false;
  }
</script>

<div class="flex min-h-[calc(100vh-4rem)]">
  <!-- Mobile Sidebar Overlay -->
  {#if sidebarOpen}
    <div
      class="fixed inset-0 z-30 bg-black/50 md:hidden"
      onclick={closeSidebar}
      role="button"
      tabindex="-1"
      aria-label="Close sidebar"
    ></div>
  {/if}

  <!-- Left Navigation -->
  <aside
    class="fixed inset-y-0 left-0 z-40 w-64 transform bg-(--body-bg) transition-transform duration-300 ease-in-out md:relative md:z-auto md:translate-x-0 {sidebarOpen
      ? 'translate-x-0'
      : '-translate-x-full md:translate-x-0'}"
  >
    <div class="flex h-full flex-col">
      <div class="flex items-center justify-between p-4 md:hidden">
        <h2 class="font-semibold">Components</h2>
        <button
          type="button"
          onclick={closeSidebar}
          class="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          aria-label="Close sidebar"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav class="flex-1 overflow-y-auto px-4 py-6 md:py-10">
        <div class="space-y-1">
          {#each navItems as item}
            <a
              href={item.href}
              onclick={closeSidebar}
              class="block rounded-md px-3 py-2 text-sm transition-colors {page.url.pathname ===
              item.href
                ? 'bg-neutral-100 font-medium dark:bg-neutral-900'
                : 'hover:bg-neutral-100 dark:hover:bg-neutral-900'}"
            >
              {item.label}
            </a>
          {/each}
        </div>
      </nav>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 px-4 py-6 sm:px-6 sm:py-8 md:ml-0">
    <!-- Mobile Sidebar Toggle Button -->
    <button
      type="button"
      onclick={toggleSidebar}
      class="mb-4 flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 md:hidden"
    >
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <span>Components Menu</span>
    </button>
    <slot />
  </main>
</div>
