<script>
	import { store } from '../script/stores.js';

	export let index;

	$: current = $store.history[$store.stepNumber]
	$: value = current.board[index];
</script>

<style>
	button {
		background: #fff;
		border: 1px solid #999;
		float: left;
		font-size: 24px;
		font-weight: bold;
		line-height: 34px;
		height: 34px;
		margin: -1px;
		padding: 0;
		text-align: center;
		width: 34px;
	}

	button:focus {
		outline: none;
	}
</style>

<button on:click={ () => store.move(index) }>{ value }</button> 