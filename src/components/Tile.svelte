<script>
    import Board from './Board.svelte';
    import {win} from '../script/stores.js'
</script>

<style>
    
</style>
<div>
    {#if $win==0}
        <Board indexBoard=0/>
    {:else}
    {/if}
</div>