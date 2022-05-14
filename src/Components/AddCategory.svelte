<script>
	import { categories } from "../store.js";

	const handleSubmit = event => {
		event.preventDefault();

		$categories = [...$categories, {
			title: document.forms[1].elements.categorytitle.value,
			budget: document.forms[1].elements.budget.value,
		}];
	}
</script>

<form action="" on:submit={handleSubmit}>
	<div>
		<label for="categorytitle">Name</label>
		<input type="text" name="categorytitle" id="categorytitle">
	</div>
	<div>
		<label for="budget">Budget</label>
		<input type="number" name="budget" id="budget">
	</div>
	<button>Hinzufügen</button>
</form>

<style>
	form {
		display: flex;
		align-items: flex-end;
	}

	form div {
		margin-right: 10px;
	}
</style>