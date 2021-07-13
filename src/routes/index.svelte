<script>
  import { pokemon } from "../stores/pokestore";
</script>

<svelte:head>
  <title>Pokédex | Home</title>
</svelte:head>
<h1>Pokédex</h1>

{#each $pokemon as pokeman}
<p>{pokeman.name}</p>
{/each}

<style>
</style>
