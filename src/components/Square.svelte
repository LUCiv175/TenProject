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
	@media only screen and (max-width: 443px) {
		button{
			width: 1.8rem;
			height: 1.8rem;
		}
		.standard{
			font-size: 1.7rem;
			line-height: 1.7rem;
		}
		.selected{
			font-size: 1.7rem;
			line-height: 1.7rem;
		}
	}
	@media only screen and (max-width: 395px) {
		button{
			width: 1.6rem;
			height: 1.6rem;
		}
		.standard{
			font-size: 1.5rem;
			line-height: 1.5rem;
		}
		.selected{
			font-size: 1.5rem;
			line-height: 1.5rem;
		}
	}
	@media only screen and (max-width: 368px) {
		button{
			width: 1.5rem;
			height: 1.5rem;
		}
		.standard{
			font-size: 1.4rem;
			line-height: 1.4rem;
		}
		.selected{
			font-size: 1.4rem;
			line-height: 1.4rem;
		}
	}
	@media only screen and (max-width: 353px) {
		button{
			width: 1.4rem;
			height: 1.4rem;
		}
		.standard{
			font-size: 1.3rem;
			line-height: 1.3rem;
		}
		.selected{
			font-size: 1.3rem;
			line-height: 1.3rem;
		}
	}
	@media only screen and (max-width: 337px) {
		button{
			width: 1.3rem;
			height: 1.3rem;
		}
		.standard{
			font-size: 1.25rem;
			line-height: 1.25rem;
		}
		.selected{
			font-size: 1.25rem;
			line-height: 1.25rem;
		}
	}
	@media only screen and (max-width: 322px) {
		button{
			width: 1.27rem;
			height: 1.27rem;
		}
		.standard{
			font-size: 1.27rem;
			line-height: 1.27rem;
		}
		.selected{
			font-size: 1.27rem;
			line-height: 1.27rem;
		}
	}
</style>

<button class="{cl}" on:click={ () => game.move(index) }>{ value }</button>