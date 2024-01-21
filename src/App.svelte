<script>
	import Game from './components/Game.svelte';
  import Start from './components/Start.svelte';
  import { calculateWinnerTotal, game, viewRules} from './script/stores';
  import RuleButton from './components/RuleButton.svelte';
  import Rules from './components/Rules.svelte';

  $: w = calculateWinnerTotal($game);
  $: view = !$viewRules

</script>

<style>
.game {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
  display: flex;
  flex-direction: column;/* Cambiato da "row" a "column" per impilare le righe verticalmente */
}

@media only screen and (min-width: 443px) {
  .game{
    margin: 0px;
    display: flex;
    flex-direction: column;
    font: 14px "Century Gothic", Futura, sans-serif;
    margin-top: 20px;
  }
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
  color: #FFAD05;
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
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size:cover;
    background-attachment: fixed;
    
  }
  :global(.vertical-line) {
    border-left: 5px solid white;
    height: 5rem;
    margin: 0 10px; /* Ridotto il margine tra i quadranti per una migliore separazione */
  }
  
  :global(.horizontal-line) {
    border-top: 5px solid white;
    margin: 10px 0;
  }

  :global(.rules){
    position: absolute;
    background-color: #d4d2d5eb;
    left: 0; 
    right: 0; 
    margin-left: 20vw; 
    margin-right: 20vw;
    color: #360568;
    padding-bottom: 5vh;
    border-radius: 20px;
    max-height: 90vh;
    overflow-x: auto;
  }
  :global(ul){
    text-align: left;
  }
  :global(li){
    color: #5F5449;
    margin-right: 10px;
  }
  @media only screen and (max-height: 840px) {
    h1{
      line-height: 24px;
    }
  }
  
  @media only screen and (max-width: 300px) {
    h1{
      line-height:normal;
    }
  }
  
</style>
{#if view}
  <Rules/>
{/if}

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
<RuleButton/>

