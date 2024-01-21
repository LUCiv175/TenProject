<script>
	import { game, store} from '../script/stores.js';

	export let index;

	//$: current = $store.history[$store.stepNumber]
	//$: value = current.board[index];
	$: select = Math.floor(index/9)==$store 
	$: value = $game[Math.floor(index/9)].board[index%9];
	$: cl = !select && $store!=-1 ? 'selected' : 'standard'
</script>

<style>
	button:focus {
		outline: none;
	}
</style>

<button class="{cl}" on:click={ () => game.move(index) }>{ value }</button>