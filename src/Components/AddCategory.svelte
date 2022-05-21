<script>
	import Button from "../Atoms/Button.svelte";
	import Input from "../Atoms/Input.svelte";
	import { categories } from "../store.js";

	export let hidden = false;

	const handleSubmit = event => {
		event.preventDefault();

		$categories = [...$categories, {
			title: document.forms[1].elements.categorytitle.value,
			budget: document.forms[1].elements.budget.value,
		}];
	}
</script>

<form action="" on:submit={handleSubmit} hidden={hidden}>
	<div>
		<Input label="Name" name="categorytitle" />
	</div>
	<div>
		<Input type="number" label="Budget" name="budget" />
	</div>
	<Button>Hinzufügen</Button>
</form>

<style>
	form {
		width: 100%;
		flex-grow: 1;
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;
	}

	form div {
		margin-right: 10px;
	}
</style>