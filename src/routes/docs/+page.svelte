<script lang="ts">
  import layoutCss from "../layout.css?raw";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<div class="container mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
  <h1 class="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Documentation</h1>

  <div
    class="mb-6 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:mb-8 sm:p-6"
  >
    <p class="mb-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300 sm:mb-6 sm:text-base sm:leading-7">
      A drop-in Tailwind CSS setup that's ready to go. No fuss, no complicated setup - just grab
      what you need and start building.
    </p>

    <div class="space-y-3 sm:space-y-4">
      <div class="flex gap-2 sm:gap-3">
        <div
          class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
        >
          <svg
            class="h-3 w-3 text-neutral-600 dark:text-neutral-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
            Built on <strong class="font-semibold">Tailwind CSS</strong>, which is an excellent
            design system, but can be difficult to get started with. This gives you a solid
            foundation so you can skip the setup headaches and jump straight into building.
          </p>
        </div>
      </div>

      <div class="flex gap-2 sm:gap-3">
        <div
          class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
        >
          <svg
            class="h-3 w-3 text-neutral-600 dark:text-neutral-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
            <strong class="font-semibold">You own the system.</strong> Just copy the
            <code
              class="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
              >input.css</code
            > file into your project and it's yours. No npm install needed, and since it's just CSS, you
            can modify and extend it however you want without fighting with package updates or breaking
            changes.
          </p>
        </div>
      </div>

      <div class="flex gap-2 sm:gap-3">
        <div
          class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
        >
          <svg
            class="h-3 w-3 text-neutral-600 dark:text-neutral-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
            Born from the struggle of migrating off <strong class="font-semibold"
              >Bootstrap 4</strong
            >. If you've ever tried to move away from an old Bootstrap theme, you know the pain.
            This gives you all the components and styling you're used to, but built with Tailwind
            instead.
          </p>
        </div>
      </div>

      <div class="flex gap-2 sm:gap-3">
        <div
          class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
        >
          <svg
            class="h-3 w-3 text-neutral-600 dark:text-neutral-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
            <strong class="font-semibold">Dark mode and light mode</strong> are built right in, and the
            whole thing is set up so you can easily add more themes down the road if you want.
          </p>
        </div>
      </div>
    </div>
  </div>

  <CodeBlock code={layoutCss} lang="css" filename="input.css" />
</div>
