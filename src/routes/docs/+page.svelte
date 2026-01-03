<script lang="ts">
  import layoutCss from "../layout.css?raw";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<div class="container mx-auto max-w-4xl px-6 py-8">
  <h1 class="mb-6 text-3xl font-bold">Layout CSS</h1>
  <CodeBlock code={layoutCss} lang="css" filename="input.css" />
</div>
