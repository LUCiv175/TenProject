<script>
	import Board from './components/Board.svelte';
	import { store, calculateWinner } from './script/stores.js';
	let winner;
  let status;
	store.subscribe(store => {
		winner = calculateWinner(store.history[store.history.length - 1].board);
		if (winner) {
			//status = `Winner: ${winner}`;
		} else {
			//status = `Next player: ${store.xIsNext ? 'X' : 'O'}`;
		}
	});

</script>

<style>
	.game {
		font: 14px "Century Gothic", Futura, sans-serif;
		margin: 20px;
		display: flex;
		flex-direction: row;
	}
	.game-info {
		margin-left: 20px;
	}
	ol {
		padding-left: 30px;
	}
</style>

<div class='game'>
	<div class='game-board'>
		<Board/>
	</div>
	<div class='game-info'>
		
	</div>
  <!--
	<ol>
		{#each $store.history as step, move}
		<li on:click="{ () => store.jumpTo(move) }">
			{#if move}
			<button>Go to move # { move }</button>
			{:else}
			<button>Go to game start</button>
			{/if}
		</li>
		{/each}
	</ol>-->
</div>