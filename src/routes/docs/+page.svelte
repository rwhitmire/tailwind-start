<script lang="ts">
  import { onMount } from "svelte";
  import layoutCss from "../layout.css?raw";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  // Track theme state reactively
  let isDark = $state<boolean>(false);
  let observer: MutationObserver | null = $state(null);
  let copied = $state(false);

  // Derive highlighted code from data and theme
  let highlightedCode = $derived(isDark ? data.highlightedDark : data.highlightedLight);

  onMount(() => {
    const updateTheme = () => {
      isDark = document.documentElement.getAttribute("data-theme") === "dark";
    };

    // Set initial theme
    updateTheme();

    // Watch for theme changes
    observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer?.disconnect();
    };
  });

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(layoutCss);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }
</script>

<div class="container mx-auto max-w-4xl px-6 py-8">
  <h1 class="mb-6 text-3xl font-bold">Layout CSS</h1>

  <div class="overflow-hidden rounded-md border">
    <div
      class="flex items-center justify-between border-b bg-neutral-50 px-4 py-2 dark:bg-neutral-900"
    >
      <span class="text-sm text-neutral-600 dark:text-neutral-400">layout.css</span>
      <button
        onclick={copyToClipboard}
        class="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
        title="Copy to clipboard"
      >
        {#if copied}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span>Copied!</span>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2" />
          </svg>
          <span>Copy</span>
        {/if}
      </button>
    </div>
    <div class="overflow-x-auto">
      {@html highlightedCode}
    </div>
  </div>
</div>

<style>
  :global(pre.shiki) {
    margin: 0;
    padding: 1rem;
    background: transparent !important;
    overflow-x: auto;
  }

  :global(.shiki) {
    font-family: "Fira Code", "Consolas", "Monaco", monospace;
    font-size: 0.875rem;
    line-height: 1.6;
  }
</style>
