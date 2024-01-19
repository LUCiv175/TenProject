<script>
	import Square from './Square.svelte';
	export let indexBoard;
    
</script>

<style>
	.board-row:after {
		clear: both;
		content: "";
		display: table;
	}

	
</style>


<div>
	<div class="board-row">
		<Square index={indexBoard*9+0}/>
		<Square index={indexBoard*9+1}/>
		<Square index={indexBoard*9+2}/>
	</div>
	<div class="board-row">
		<Square index={indexBoard*9+3}/>
		<Square index={indexBoard*9+4}/>
		<Square index={indexBoard*9+5}/>
	</div>
	<div class="board-row">
		<Square index={indexBoard*9+6}/>
		<Square index={indexBoard*9+7}/>
		<Square index={indexBoard*9+8}/>
	</div>
</div>


