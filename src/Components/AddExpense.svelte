<script>
	import { categories, expenses } from "../store.js";

	const handleSubmit = event => {
		event.preventDefault();

		$expenses = [...$expenses, {
			title: document.forms[0].elements.title.value,
			amount: document.forms[0].elements.amount.value,
			category: document.forms[0].elements.category.value,
		}];
		$categories = $categories;
	}
</script>

<form action="" on:submit={handleSubmit}>
	<div>
		<label for="title">Name</label>
		<input type="text" name="title" id="title" required>
	</div>
	<div>
		<label for="amount">Betrag (aufgerundet)</label>
		<input type="number" name="amount" id="amount" required>
	</div>
	<div>
		<label for="category">Kategorie</label>
		<select name="category" id="category">
			<option value="undefined" selected>unkategorisiert</option>
			{#each $categories as category}
				<option value="{category.title}">{category.title}</option>
			{/each}
		</select>
	</div>
	<button>Speichern</button>
</form>

<style>
	form {
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;
	}

	form div {
		margin-right: 10px;
	}
</style>