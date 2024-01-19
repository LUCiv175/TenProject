<script>
  
    import { game} from "../script/stores";
    
    function resetGame() {
        location.replace(location.href)
    }
</script>

<style>

</style>

<button on:click={resetGame}>Start a new Game</button>