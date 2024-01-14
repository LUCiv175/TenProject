<script>
	import Game from './components/Game.svelte';
	import { store, calculateWinner, win } from './script/stores.js';
	let winner;
  	let status;
	store.subscribe(store => {
		winner = calculateWinner(store.history[store.history.length - 1].board);
		if (winner) {
			//status = `Winner: ${winner}`;
		} else{
			//status = `Next player: ${store.xIsNext ? 'X' : 'O'}`;
		}
		//$win = winner
	});

</script>

<style>
.game {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
  display: flex;
  flex-direction: column; /* Cambiato da "row" a "column" per impilare le righe verticalmente */
}


h1 {
	color: black;
}

</style>

<h1>ultimate tris</h1>
<div class='game'>
	<Game/>
  </div>
	<!--
	<div class='game-info'>
		<div>{status}</div>
	</div>
  
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
