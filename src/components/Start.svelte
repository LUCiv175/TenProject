<script>
  
    
    
    function resetGame() {
        location.replace(location.href)
    }
</script>

<style>
     button:hover{
        color: #f4f2f3;
        background-color: #360568;
        border: none;
        transform: scale(1.1);
        transition: 0.3s;

    }
    button{
        transition: 0.3s;
        border: none;
    }
    
</style>

<button on:click={resetGame}>Start a new Game</button>