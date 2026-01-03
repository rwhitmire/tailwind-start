<script lang="ts">
  import CodeBlock from "$lib/components/CodeBlock.svelte";

  const primaryButtonCode = `<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-primary" disabled>Disabled</button>`;

  const secondaryButtonCode = `<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-secondary" disabled>Disabled</button>`;
</script>

<div>
  <h1 class="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Buttons</h1>
  <p class="mb-6 text-sm text-neutral-600 dark:text-neutral-400 sm:mb-8 sm:text-base">
    A collection of button components and variations.
  </p>

  <div class="space-y-6 sm:space-y-8">
    <section>
      <h2 class="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">Primary Button</h2>
      <div class="mb-4 flex flex-wrap gap-3 sm:gap-4">
        <button class="btn btn-primary">Primary Button</button>
        <button class="btn btn-primary" disabled>Disabled</button>
      </div>
      <CodeBlock code={primaryButtonCode} lang="html" />
    </section>

    <section>
      <h2 class="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">Secondary Button</h2>
      <div class="mb-4 flex flex-wrap gap-3 sm:gap-4">
        <button class="btn btn-secondary">Secondary Button</button>
        <button class="btn btn-secondary" disabled>Disabled</button>
      </div>
      <CodeBlock code={secondaryButtonCode} lang="html" />
    </section>
  </div>
</div>
