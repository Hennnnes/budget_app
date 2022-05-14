<script>

</script>

<form action="">
	<div>
		<label for="title">Name</label>
		<input type="text" name="title" id="title">
	</div>
	<div>
		<label for="amount">Betrag</label>
		<input type="number" name="amount" id="amount">
	</div>
	<div>
		<label for="category">Kategorie</label>
		<select name="category" id="category">
			<option value="unkategorisierts" selected>unkategorisiert</option>
		</select>
	</div>
	<button>Speichern</button>
</form>


<style>
	:root {
		--primary-color: #436385;
		--primary-color-dark: #1e3955;
		--border-thickness: 2px;
		--border-radius: 4px;
	}
	form {
		display: flex;
		align-items: flex-end;
	}

	form div {
		margin-right: 10px;
	}
	
	label {
		display: block;
		margin-bottom: 4px;
		font-size: 1rem;
	}
	
	input,
	select {
		display: block;
		border: var(--border-thickness) solid var(--primary-color);
		border-radius: var(--border-radius);
		color: var(--primary-color);
		font-size: 1rem;
		padding: 4px 8px;
	}
	
	input:focus {
		border-color: var(--primary-color);
	}

	button {
		background-color: transparent;
		border: var(--border-thickness) solid var(--primary-color);
		border-radius: var(--border-radius);
		color: var(--primary-color);
		cursor: pointer;
		font-size: inherit;
		letter-spacing: inherit;
		line-height: inherit;
		margin: 0;
		padding: 4px 8px;
	}
	
	button:hover,
	button:focus {
		color: var(--primary-color-dark);
		border-color: var(--primary-color-dark);
	}
</style>