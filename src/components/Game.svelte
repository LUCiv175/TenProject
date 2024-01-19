<script>
    import Tile from "./Tile.svelte";
</script>

<style>
.game-row {
    display: flex;
    margin-bottom: 10px;
  }
  
  
</style>


    <!-- Prima riga -->
	<div class='game-row'>
        <Tile indexTile=0/>
        <div class='vertical-line'></div>
        <Tile indexTile=1/>
        <div class='vertical-line'></div>
        <Tile indexTile=2/>
      </div>
      
    
      <!-- Linea di separazione -->
      <div class='horizontal-line'></div>
    
      <!-- Seconda riga -->
      <div class='game-row'>
        <Tile indexTile=3/>
        <div class='vertical-line'></div>
        <Tile indexTile=4/>
        <div class='vertical-line'></div>
        <Tile indexTile=5/>
      </div>
    
      <!-- Linea di separazione -->
      <div class='horizontal-line'></div>
    
      <!-- Terza riga -->
      <div class='game-row'>
        <Tile indexTile=6/>
        <div class='vertical-line'></div>
        <Tile indexTile=7/>
        <div class='vertical-line'></div>
        <Tile indexTile=8/>
      </div>

