<script lang="ts">
  import { page } from "$app/stores";

  const navItems = [
    { href: "/components/buttons", label: "Buttons" },
    { href: "/components/inputs", label: "Inputs" },
  ];
</script>

<div class="flex min-h-[calc(100vh-4rem)]">
  <!-- Left Navigation -->
  <aside class="w-64 border-r px-6 py-8">
    <nav class="space-y-1">
      {#each navItems as item}
        <a
          href={item.href}
          class="block rounded-md px-3 py-2 text-sm transition-colors {$page.url.pathname ===
          item.href
            ? 'bg-neutral-100 font-medium dark:bg-neutral-900'
            : 'hover:bg-neutral-100 dark:hover:bg-neutral-900'}"
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 px-6 py-8">
    <slot />
  </main>
</div>
