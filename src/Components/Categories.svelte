<script>
	import Category from "../Atoms/Category.svelte";
	import { categories } from "../store.js";
</script>

<ul>
{#each $categories as category}
	<li>
		<Category {category} />
	</li>
{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding-left: 0;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
</style>