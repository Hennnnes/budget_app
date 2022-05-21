<script>
	export let level = 'h2';
	export let visuallyHidden = false;
</script>

{#if level === 'h1'}
	<h1 class:visually-hidden={visuallyHidden}><slot /></h1>
{:else if level === 'h3'}
	<h3 class:visually-hidden={visuallyHidden}><slot /></h3>
{:else}
	<h2 class:visually-hidden={visuallyHidden}><slot /></h2>
{/if}

<style>
	h1, h2, h3 {
		margin: 0;
	}

	h1 {
		font-size: 4rem;
		font-weight: 900;
		letter-spacing: 0.1rem;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 2rem;
		font-weight: 900;
		letter-spacing: 0.05rem;
	}
</style>