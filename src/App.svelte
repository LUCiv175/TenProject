<script>
	import Game from './components/Game.svelte';
  import Start from './components/Start.svelte';
  import { calculateWinnerTotal, game} from './script/stores';

  $: w = calculateWinnerTotal($game);

</script>

<style>
.game {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
  display: flex;
  flex-direction: column; /* Cambiato da "row" a "column" per impilare le righe verticalmente */
}


h1, h2 {
	color: black;
}
</style>

<h1>Ultimate Tris</h1>
{#if w!='' && w!=null}
  {#if w!='p'}
    <h2>{w} Won the Game!</h2>
    {:else}
    <h2>The Game is a Draw</h2>
  {/if}
{/if}
<Start/>
<div class='game'>
	<Game/>
  </div>
