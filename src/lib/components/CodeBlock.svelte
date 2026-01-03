<script lang="ts">
  import { onMount } from "svelte";
  import { createHighlighter, type Highlighter } from "shiki";

  interface Props {
    code: string;
    lang?: string;
    filename?: string;
  }

  let { code, lang = "text", filename }: Props = $props();

  // Track theme state reactively
  let isDark = $state<boolean>(false);
  let observer: MutationObserver | null = $state(null);
  let copied = $state(false);
  let highlighter: Highlighter | null = $state(null);
  let highlightedCode = $state<string>("");

  function highlightCode() {
    if (!highlighter) return;

    const theme = isDark ? "vitesse-dark" : "vitesse-light";
    highlightedCode = highlighter.codeToHtml(code, {
      lang,
      theme,
    });
  }

  // Re-highlight when code, lang, or theme changes
  $effect(() => {
    if (highlighter) {
      highlightCode();
    }
  });

  onMount(() => {
    let cleanup: (() => void) | null = null;

    // Initialize highlighter
    createHighlighter({
      themes: ["vitesse-light", "vitesse-dark"],
      langs: [lang],
    }).then((hl) => {
      highlighter = hl;

      const updateTheme = () => {
        const wasDark = isDark;
        isDark = document.documentElement.getAttribute("data-theme") === "dark";
        // Re-highlight if theme changed
        if (wasDark !== isDark) {
          highlightCode();
        }
      };

      // Set initial theme and highlight
      updateTheme();
      highlightCode();

      // Watch for theme changes
      observer = new MutationObserver(() => {
        updateTheme();
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });

      cleanup = () => {
        observer?.disconnect();
      };
    });

    return () => {
      cleanup?.();
    };
  });

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }
</script>

<div class="overflow-hidden rounded-md border">
  <div
    class="flex items-center justify-between border-b bg-neutral-50 px-4 py-2 dark:bg-neutral-900"
  >
    {#if filename}
      <span class="text-sm text-neutral-600 dark:text-neutral-400">{filename}</span>
    {/if}
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
    {#if highlightedCode}
      {@html highlightedCode}
    {:else}
      <pre class="code-fallback"><code>{code}</code></pre>
    {/if}
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

  .code-fallback {
    margin: 0;
    padding: 1rem;
    font-family: "Fira Code", "Consolas", "Monaco", monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    color: inherit;
    white-space: pre;
  }

  .code-fallback code {
    font-family: inherit;
  }
</style>
