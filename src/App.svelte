<script>
	import Headline from "./Components/Headline.svelte";
	import AddExpense from "./Components/AddExpense.svelte";
	import Expenses from "./Components/Expenses.svelte";
	import Button from "./Atoms/Button.svelte"
	import AddCategory from "./Components/AddCategory.svelte";
	import Categories from "./Components/Categories.svelte";

	let addCategoryVisible = false;
	$: buttonOpenText = addCategoryVisible ? 'x' : '+';

	const displayAddCategory = () => {
		addCategoryVisible = !addCategoryVisible;
	}
</script>

<main>
	<Headline level="h1">Budget App</Headline>
	<section>
		<Headline visuallyHidden>Ausgabe hinzufügen</Headline>
		<AddExpense />
	</section>
	<section>
		<div class="headline--interactive">
			<Headline>Kategorien</Headline>
			<Button on:click={displayAddCategory}>{buttonOpenText}</Button>
		</div>
		<AddCategory hidden={!addCategoryVisible}/>
		<Categories />
	</section>
</main>


<style>
	section {
		margin-bottom: 60px;
	}
	.headline--interactive {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 1rem;
	}
</style>