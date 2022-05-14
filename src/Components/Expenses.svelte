<script>
	import { expenses } from "../store.js";
	import Headline from "./Headline.svelte"
</script>

{#each $expenses as expense}
<p>
	{expense.title} : {expense.amount}€ {#if expense.category !== 'undefined'}["{expense.category}"]{/if}
</p>
{/each}

<style>
</style>