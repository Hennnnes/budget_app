<script>
	export let name;
	export let label;
</script>


<label for={name}>{label}</label>
<select name={name}>
	<slot />
</select>


<style>

label {
	display: block;
	font-size: 1rem;
	margin-bottom: 10px;
}

select {
	appearance: none;
	background-color: hsl(210, 19%, 85%);
	background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
	background-position: center right;
	background-repeat: no-repeat;
	border-radius: 4px;
	border: none;
	color: hsl(0, 0%, 20%);
	cursor: pointer;
	display: block;
	font-size: 1rem;
	letter-spacing: 0.3px;
	padding: 8px 24px 8px 16px;
}
</style>