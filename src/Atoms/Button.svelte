<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const click = () => {
		dispatch('click');
	}
</script>
<button on:click={click}><slot /></button>

<style>
button {
	background-color: hsl(211, 64%, 55%);
	border: none;
	border-radius: 20px;
	color:hsl(0, 0%, 100%);
	cursor: pointer;
	display: block;
	font-size: 1rem;
	letter-spacing: .25px;
	line-height: inherit;
	margin: 0;
	padding: 8px 16px;
	transition: box-shadow 250ms;
}

button:hover,
button:focus {
	background-color:hsl(211, 64%, 70%)
}
</style>