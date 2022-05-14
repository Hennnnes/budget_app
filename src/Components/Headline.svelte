<script>
	export let level = 'h1';
</script>

{#if level === 'h1'}
	<h1><slot /></h1>
{:else if level === 'h3'}
	<h3><slot /></h3>
{:else}
	<h2><slot /></h2>
{/if}

<style>
	h1 {
		font-size: 2rem;
	}
</style>