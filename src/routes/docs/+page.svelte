<script lang="ts">
  import { createHighlighter } from "shiki";
  import { onMount } from "svelte";
  import layoutCss from "../layout.css?raw";

  let highlightedCode = $state<string>("");
  let isLoading = $state(true);
  let observer: MutationObserver | null = $state(null);
  let copied = $state(false);

  onMount(() => {
    let cleanup: (() => void) | null = null;

    (async () => {
      const highlighter = await createHighlighter({
        themes: ["github-light", "github-dark"],
        langs: ["css"],
      });

      const updateHighlight = () => {
        const theme =
          document.documentElement.getAttribute("data-theme") === "dark"
            ? "github-dark"
            : "github-light";

        highlightedCode = highlighter.codeToHtml(layoutCss, {
          lang: "css",
          theme,
        });
      };

      updateHighlight();
      isLoading = false;

      // Watch for theme changes
      observer = new MutationObserver(() => {
        updateHighlight();
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });

      cleanup = () => {
        observer?.disconnect();
      };
    })();

    return () => {
      cleanup?.();
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

  {#if isLoading}
    <div class="overflow-hidden rounded-md border">
      <div
        class="flex items-center justify-between border-b bg-neutral-50 px-4 py-2 dark:bg-neutral-900"
      >
        <div class="skeleton-line h-4 w-24 rounded"></div>
        <div class="skeleton-line h-8 w-20 rounded"></div>
      </div>
      <div class="p-4">
        <div class="space-y-2">
          <div class="skeleton-line h-4 w-full rounded"></div>
          <div class="skeleton-line h-4 w-5/6 rounded"></div>
          <div class="skeleton-line h-4 w-full rounded"></div>
          <div class="skeleton-line h-4 w-4/6 rounded"></div>
          <div class="skeleton-line h-4 w-full rounded"></div>
          <div class="skeleton-line h-4 w-3/4 rounded"></div>
          <div class="skeleton-line h-4 w-full rounded"></div>
          <div class="skeleton-line h-4 w-5/6 rounded"></div>
          <div class="skeleton-line h-4 w-full rounded"></div>
          <div class="skeleton-line h-4 w-2/3 rounded"></div>
          <div class="skeleton-line h-4 w-4/5 rounded"></div>
          <div class="skeleton-line h-4 w-full rounded"></div>
        </div>
      </div>
    </div>
  {:else}
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
  {/if}
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

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .skeleton-line {
    background: linear-gradient(
      90deg,
      rgb(245 245 245) 0%,
      rgb(229 229 229) 20%,
      rgb(245 245 245) 40%,
      rgb(245 245 245) 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 1.5s infinite linear;
  }

  :global([data-theme="dark"]) .skeleton-line {
    background: linear-gradient(
      90deg,
      rgb(38 38 38) 0%,
      rgb(64 64 64) 20%,
      rgb(38 38 38) 40%,
      rgb(38 38 38) 100%
    );
    background-size: 1000px 100%;
  }
</style>
