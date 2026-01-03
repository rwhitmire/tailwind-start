<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    // Redirect to buttons page by default
    goto("/components/buttons", { replaceState: true });
  });
</script>

<div>Loading...</div>
