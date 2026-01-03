<script lang="ts">
  import CodeBlock from "$lib/components/CodeBlock.svelte";

  const primaryButtonCode = `<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-primary" disabled>Disabled</button>`;

  const secondaryButtonCode = `<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-secondary" disabled>Disabled</button>`;
</script>

<div>
  <h1 class="mb-6 text-3xl font-bold">Buttons</h1>
  <p class="mb-8 text-neutral-600 dark:text-neutral-400">
    A collection of button components and variations.
  </p>

  <div class="space-y-8">
    <section>
      <h2 class="mb-4 text-xl font-semibold">Primary Button</h2>
      <div class="mb-4 flex flex-wrap gap-4">
        <button class="btn btn-primary">Primary Button</button>
        <button class="btn btn-primary" disabled>Disabled</button>
      </div>
      <CodeBlock code={primaryButtonCode} lang="html" />
    </section>

    <section>
      <h2 class="mb-4 text-xl font-semibold">Secondary Button</h2>
      <div class="mb-4 flex flex-wrap gap-4">
        <button class="btn btn-secondary">Secondary Button</button>
        <button class="btn btn-secondary" disabled>Disabled</button>
      </div>
      <CodeBlock code={secondaryButtonCode} lang="html" />
    </section>
  </div>
</div>
