<script>
	import Button from "../Atoms/Button.svelte";
	import Input from "../Atoms/Input.svelte";
	import Select from "../Atoms/Select.svelte";
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
		<Input label="Name" name="title" required />
	</div>
	<div>
		<Input type="number" label="Betrag (aufgerundet)" name="amount" required />
	</div>
	<div>
		<Select label="Kategorie" name="category">
			<option value="undefined" selected>unkategorisiert</option>
			{#each $categories as category}
				<option value="{category.title}">{category.title}</option>
			{/each}
		</Select>
	</div>
	<Button>Speichern</Button>
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