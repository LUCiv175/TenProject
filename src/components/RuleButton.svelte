<script>
    import { viewRules } from "../script/stores";

    $: act = $viewRules;
    $: cl = act ? "act" : "noHover"

    function view(){
        viewRules.change();
        act = false
    }

</script>

<style>

     .act:hover{
        background-color: #f4f2f3;
        color: #5F5449;
        border: none;
        transform: scale(1.1);
        transition: 0.3s;
        margin-top: 2vh;

    }
    .act{
        color: #f4f2f3;
        background-color: #5F5449;
        transition: 0.3s;
        border: none;
        margin-top: 2vh;
    }

    .noHover{
    pointer-events: none;
    color: #f4f2f3;
        background-color: #5F5449;
        border: none;
        margin-top: 2vh;
    }
    

    @media only screen and (max-width: 322px) {
		button{
			margin-top: 12vh;
            margin-bottom: 12vh;
		}
	}
</style>

<button class="{cl}" on:click={view}>How to Play</button>