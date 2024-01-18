<script>
    import Board from './Board.svelte';
    import { game } from '../script/stores';
    import Cell from './Cell.svelte';
    
    export let indexTile;

</script>

<style>
    
    
</style>


<div>{#if ($game[indexTile].whowon=='')}
    <Board indexBoard={indexTile}/>
    {:else}
    <Cell symbol={$game[indexTile].whowon}/>
    {/if}
</div>