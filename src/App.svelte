<script>
	import Headline from "./Components/Headline.svelte";
	import AddExpense from "./Components/AddExpense.svelte";
	import Expenses from "./Components/Expenses.svelte";
	import AddCategory from "./Components/AddCategory.svelte";
	import Categories from "./Components/Categories.svelte";
</script>

<main>
	<Headline level="h1">Budget</Headline>
	<Headline>Ausgabe hinzufügen</Headline>

	<AddExpense />
	<Expenses />

	<Headline>Kategorien</Headline>
	<AddCategory />
	<Categories />
</main>
