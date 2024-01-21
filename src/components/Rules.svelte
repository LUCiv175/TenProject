<script>
    import { viewRules, rulesLang } from "../script/stores";

    const titleIta = "Regole";
    const titleEng = "Rules";

      const rulesIta = [
    "Giocatori: 2 giocatori",
    "Scopo del gioco: Ottenere una fila di tre segni consecutivi (X o O) in orizzontale, verticale o diagonale.",
    "Tabellone: Griglia 3x3 formata da sotto-griglie 3x3",
    "Turni: I giocatori si alternano.",
    "Simboli: Un giocatore usa 'X', l'altro 'O'.",
    "Inizio partita: Un giocatore inizia posizionando il proprio simbolo su una cella vuota.",
    "Successione dei turni: I giocatori si alternano nelle sottogriglie, la casella del sotto tris che il giocatore deciderà di cliccare, corrisponderà, nella griglia principale, al quadrante(quadrato illuminato) dove il giocatore successivo effettuerà il turno",
    "Proseguimento del gioco: Quando un giocatore effettua un tris nella sottogriglia vince la casella",
    "Caso Speciale: Quando il giocatore precedente sceglie una casella che ha il quandrante di riferimento già conquistato, il giocatore a cui spetta il turno potrà scegliere di giocare in qualsiasi quadrante libero",
    "Vincente: Il primo giocatore a formare una fila di tre simboli consecutivi nella griglia principale vince.",
    "Pareggio: Se tutte le celle della griglia principale sono occupate senza che nessun giocatore abbia ottenuto una fila di tre simboli, la partita termina in pareggio.",
    "Fine del gioco: La partita termina quando c'è un vincitore o un pareggio."
  ];

  const rulesEng = [
    "Players: 2 players",
    "Objective of the game: Achieve a row of three consecutive marks (X or O) horizontally, vertically, or diagonally.",
    "Game board: 3x3 grid composed of 3x3 subgrids",
    "Turns: Players take turns.",
    "Symbols: One player uses 'X', the other 'O'.",
    "Start of the game: A player begins by placing their symbol on an empty cell.",
    "Sequence of turns: Players take turns in the subgrids; the cell in the subgrid that a player chooses corresponds, in the main grid, to the quadrant (illuminated square) where the next player will take their turn.",
    "Continuation of the game: When a player forms a row of three symbols in a subgrid, they win that cell.",
    "Special Case: When the previous player chooses a cell that has the reference quadrant already conquered, the player whose turn it is can choose to play in any free quadrant.",
    "Winner: The first player to form a row of three consecutive symbols in the main grid wins.",
    "Draw: If all cells in the main grid are occupied without any player achieving a row of three symbols, the game ends in a draw.",
    "End of the game: The game concludes when there is a winner or a draw."
  ];
  

  $: rules = $rulesLang ? rulesIta : rulesEng
  $: title= $rulesLang ? titleIta : titleEng
  

  function changeLang() {
        if($rulesLang) rulesLang.change()
        else rulesLang.change()
    }



  function view(){
        viewRules.change();
    }

</script>

<style>
.switch {
        position: relative;
        display: inline-block;
        margin: 0 5px;
        text-align: center;
    }

    .switch > span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-family: 'Helvetica', Arial, sans-serif;
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .06);
        width: 50%;
        cursor: pointer;
    }

input.check-toggle-round-flat:checked ~ .off {
  color: #360568;
}

input.check-toggle-round-flat:checked ~ .on {
  color: #f4f2f3;
}

.switch > span.on {
  left: 0;
  padding-left: 2px;
  color: #360568;
}

.switch > span.off {
  right: 0;
  padding-right: 4px;
  color: #f4f2f3;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}
.check-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat + label {
  padding: 2px;
  width: 97px;
  height: 35px;
  background-color: #f4f2f3;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:before, input.check-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat + label:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
  background-color: #360568;
  -webkit-moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:after {
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: 48px;
  background-color: #f4f2f3;
  -webkit-border-radius: 52px;
  -moz-border-radius: 52px;
  -ms-border-radius: 52px;
  -o-border-radius: 52px;
  border-radius: 52px;
  -webkit-transition: margin 0.2s;
  -moz-transition: margin 0.2s;
  -o-transition: margin 0.2s;
  transition: margin 0.2s;
}   

input.check-toggle-round-flat:checked + label:after {
  margin-left: 44px;
}

button{
    margin-top: 5vh;
    transition: 0.3s;
    border: none;
}
button:hover{
    color: #f4f2f3;
    background-color: #360568;
    border: none;
    transform: scale(1.1);
    transition: 0.3s;
}

  @media only screen and (max-width: 1300px) {
		.rules{
			margin-left: 5%;
      margin-right: 5%;
      top: 15%
		}
    /*
    li{
      font-size: small;
    }
    h1{
      font-size:2.5rem;
    }*/
	}
@media only screen and (max-width: 768px) {
		.rules{
			margin-left: 15px;
      margin-right: 15px;
      top: 15%;
      height:100%;
		}
    /*
    li{
      font-size: small;
    }
    h1{
      font-size:2.5rem;
    }*/
    button{
      margin-top: 5px;
    }
	}
  @media only screen and (max-width: 470px) {
		.rules{
			margin-left: 15px;
      margin-right: 15px;
      top: 15px;
      position: absolute;
    background-color: #d4d2d5eb;
    left: 0; 
    right: 0; 
    color: #360568;
    padding-bottom: 5vh;
    border-radius: 20px;
    max-height: 90vh;
    overflow-x: auto;
    height:100%;
    min-width: 290px;
    
		}
    
    li{
      font-size: small;
    }
    h1{
      font-size:2.5rem;
    }
    button{
      margin-top: 5px;
    }
	}
  @media only screen and (max-width: 840px) {
		.rules{
			margin-left: 15px;
      margin-right: 15px;
      top: 15px;
      position: absolute;
    background-color: #d4d2d5eb;
    left: 0; 
    right: 0; 
    color: #360568;
    padding-bottom: 5vh;
    border-radius: 20px;
    max-height: 90vh;
    overflow-x: auto;
    height:100%;
    min-width: 290px;
    
		}
	}
  @media only screen and (max-height: 840px) {
		.rules{
			margin-left: 15px;
      margin-right: 15px;
      top: 15px;
      position: absolute;
    background-color: #d4d2d5eb;
    left: 0; 
    right: 0; 
    color: #360568;
    padding-bottom: 5vh;
    border-radius: 20px;
    max-height: 90vh;
    overflow-x: auto;
    height:100%;
    min-width: 290px;
    
		}
	}
  @media only screen and (max-width: 300px) {
    .rules{
      min-height: 650px;
    }
  }
  

</style>

<div class="rules">
    <h1>{title}</h1>
    <center>
        <div class="switch">
            <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" checked={!$rulesLang}>
            <label for="language-toggle"></label>
            <span class="on" on:click={changeLang}>IT</span>
            <span class="off" on:click={changeLang}>EN</span>
          </div>
     </center>
    <ul>
    {#each rules as rule}
        <li>{rule}</li>
    {/each}</ul>
    <br>
    <button on:click={view}>OK</button>
</div>