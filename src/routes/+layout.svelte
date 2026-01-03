<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import logo from "$lib/assets/logo.svg";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  let { children } = $props();
  let mobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="sticky top-0 z-50 bg-(--body-bg)">
  <div class="flex items-center justify-between px-4 py-3 sm:px-6">
    <div class="flex items-center">
      <a
        href="/"
        class="flex items-center gap-2 text-lg font-semibold transition-opacity hover:opacity-80"
      >
        <img src={logo} alt="Tailwind Start" class="h-8 w-8" />
        <span class="hidden sm:inline">Tailwind Start</span>
      </a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden items-center gap-1 md:flex">
      <a
        href="/docs"
        class="rounded-md px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
      >
        Docs
      </a>
      <a
        href="/components"
        class="rounded-md px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
      >
        Components
      </a>
      <a
        href="/blocks"
        class="rounded-md px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
      >
        Blocks
      </a>
    </nav>

    <div class="flex items-center gap-2">
      <ThemeToggle />

      <!-- Mobile Menu Button -->
      <button
        type="button"
        onclick={toggleMobileMenu}
        class="rounded-md p-2 transition-colors hover:bg-neutral-100 md:hidden dark:hover:bg-neutral-900"
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        {#if mobileMenuOpen}
          <!-- Close icon -->
          <svg
            class="h-6 w-6 rotate-0 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        {:else}
          <!-- Hamburger icon -->
          <svg
            class="h-6 w-6 rotate-0 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  <nav
    class="overflow-hidden transition-all duration-300 ease-in-out md:hidden {mobileMenuOpen
      ? 'max-h-64 opacity-100'
      : 'max-h-0 opacity-0'}"
  >
    <div class="space-y-1 px-4 py-2">
      <a
        href="/docs"
        onclick={closeMobileMenu}
        class="block rounded-md px-3 py-2 text-sm transition-all duration-300 ease-out hover:bg-neutral-100 dark:hover:bg-neutral-900 {mobileMenuOpen
          ? 'translate-x-0 opacity-100'
          : '-translate-x-4 opacity-0'}"
        style="transition-delay: {mobileMenuOpen ? '100ms' : '0ms'}"
      >
        Docs
      </a>
      <a
        href="/components"
        onclick={closeMobileMenu}
        class="block rounded-md px-3 py-2 text-sm transition-all duration-300 ease-out hover:bg-neutral-100 dark:hover:bg-neutral-900 {mobileMenuOpen
          ? 'translate-x-0 opacity-100'
          : '-translate-x-4 opacity-0'}"
        style="transition-delay: {mobileMenuOpen ? '150ms' : '0ms'}"
      >
        Components
      </a>
      <a
        href="/blocks"
        onclick={closeMobileMenu}
        class="block rounded-md px-3 py-2 text-sm transition-all duration-300 ease-out hover:bg-neutral-100 dark:hover:bg-neutral-900 {mobileMenuOpen
          ? 'translate-x-0 opacity-100'
          : '-translate-x-4 opacity-0'}"
        style="transition-delay: {mobileMenuOpen ? '200ms' : '0ms'}"
      >
        Blocks
      </a>
    </div>
  </nav>
</div>

{@render children()}
