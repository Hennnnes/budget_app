<script>
	import { categories, expenses } from "../store.js";

	const expensesPerCategory = category => {
		const filteredExpenses = $expenses.filter(expense => expense.category === category.title);
		if (!filteredExpenses) {
			return 0;
		}
		return filteredExpenses.reduce((a, b) => parseFloat(a) + parseFloat((b.amount || 0)), 0)
	}
</script>

<ul>
{#each $categories as category}
	<li style="--filled: {expensesPerCategory(category)}%">
	<strong>{category.title}:</strong> {expensesPerCategory(category)} / {category.budget}€
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
	
	li {
		border: 2px solid var(--primary-color);
		border-radius: var(--border-radius);
		width: auto;
		padding: 8px 16px;
		position: relative;
	}

	li:before {
		content: '';
		background: var(--primary-color-light);
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: var(--filled);
		z-index: -1;
	}
</style>