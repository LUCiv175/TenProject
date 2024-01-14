<script>
    import Board from './Board.svelte';
    import {win} from '../script/stores.js';
    export let indexTile;

</script>

<style>
    
    
</style>


<div>
    {#if $win==0}
        <Board indexBoard={indexTile}/>
    {:else}
    {/if}
</div>