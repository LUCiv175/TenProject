<script>
	import Game from './components/Game.svelte';
	
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

<h1>Ultimate Tris</h1>
<div class='game'>
	<Game/>
  </div>
