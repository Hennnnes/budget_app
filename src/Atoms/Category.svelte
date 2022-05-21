<script>
	import { categories, expenses } from "../store.js";

	export let category;

	const expensesPerCategory = category => {
		const filteredExpenses = $expenses.filter(expense => expense.category === category.title);
		if (!filteredExpenses) {
			return 0;
		}
		return filteredExpenses.reduce((a, b) => parseFloat(a) + parseFloat((b.amount || 0)), 0)
	}
</script>

<div class="category">
	<span>{category.title}</span>
	<strong>{expensesPerCategory(category)} / {category.budget}€</strong>
</div>

<style>
	.category {
		background-color: hsl(210, 19%, 85%);
		border-radius: 4px;
		letter-spacing: .04rem;
		padding: 16px 24px;
		position: relative;
		width: auto;
	}
	
	.category:not(:last-of-type) {
		margin-right: 12px;
	}

	.category span {
		display: block;
		margin-bottom: 10px;
	}
</style>