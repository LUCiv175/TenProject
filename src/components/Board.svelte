<script>
	import Square from './Square.svelte';
    
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
		<Square index=0/>
		<Square index=1/>
		<Square index=2/>
	</div>
	<div class="board-row">
		<Square index=3/>
		<Square index=4/>
		<Square index=5/>
	</div>
	<div class="board-row">
		<Square index=6/>
		<Square index=7/>
		<Square index=8/>
	</div>
</div>


