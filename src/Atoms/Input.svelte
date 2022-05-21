<script>
	export let placeholder = '';
	export let name;
	export let label;
	export let type = 'text';
	export let required = false;
</script>


<label for={name}>{label}</label>
<input {type} {name} {placeholder} {required}>

<style>
label {
	display: block;
	font-size: 1rem;
	margin-bottom: 10px;
}

input {
	display: block;
	background-color: hsl(210, 19%, 85%);
	border: none;
	border-radius: 4px;
	color: hsl(0, 0%, 20%);
	font-size: 1rem;
	letter-spacing: 0.3px;
	padding: 8px 16px;
}
</style>