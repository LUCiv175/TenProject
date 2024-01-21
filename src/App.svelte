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


h1 {
	color: rgba(250, 250, 239, 0.986);


  
  font-family: 'Fasthand', cursive;
  font-family: 'Just Another Hand', cursive;
  animation: shine 1s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
h2{
  color: #f8f416;
}

:global(.standard) {
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
		color: black;
	}

	:global(.selected) {
		background: #c0c5c1;
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
		color: black;
	}

  :global(body){
    background-image: url('https://www.giuliaimmobiliareaffitti.com/wp-content/uploads/2016/09/sfondo-lavagna.jpg');
    background-size: cover;
  }
  :global(.vertical-line) {
    border-left: 5px solid white;
    height: 100px;
    margin: 0 10px; /* Ridotto il margine tra i quadranti per una migliore separazione */
  }
  
  :global(.horizontal-line) {
    border-top: 5px solid white;
    margin: 10px 0;
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
