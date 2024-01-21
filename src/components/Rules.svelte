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
    "Successione dei turni: I giocatori si alternano nella sotto-griglia, la casella del sotto tris che il giocatore deciderà di cliccare, corrisponderà, nella griglia principale, al quadrante dove il giocatore successivo effettuerà il turno",
    "Proseguimento del gioco: Quando un giocatore effettua un tris nella sottogriglia vince la casella",
    "Caso Speciale: Quando il giocatore precedente sceglie una casella che ha il quandrante di riferimento già conquistato, il giocatore a cui spetta il turno potrà scegliere di giocare in qualsisi quadrante libero",
    "Vincente: Il primo giocatore a formare una fila di tre simboli consecutivi nella griglia principale vince.",
    "Pareggio: Se tutte le celle della griglia principale sono occupate senza che nessun giocatore abbia ottenuto una fila di tre simboli, la partita termina in pareggio.",
    "Fine del gioco: La partita termina quando c'è un vincitore o un pareggio."
  ];

  const rulesEng = [
    "Players: 2 players",
    "Objective: Achieve a row of three consecutive symbols (X or O) horizontally, vertically, or diagonally.",
    "Board: 3x3 grid composed of 3x3 subgrids",
    "Turns: Players take turns.",
    "Symbols: One player uses 'X', the other 'O'.",
    "Game Start: A player begins by placing their symbol in an empty cell.",
    "Turn Sequence: Players take turns in the subgrid. The cell of the sub-grid that a player decides to click on will correspond, in the main grid, to the quadrant where the next player will make their move.",
    "Game Progression: When a player forms a row of three in the subgrid, they win the cell.",
    "Special Case: When the previous player chooses a cell that has already been won, the player whose turn it is can choose to play in any free quadrant.",
    "Winner: The first player to form a row of three consecutive symbols in the main grid wins.",
    "Draw: If all cells in the main grid are occupied without any player forming a row of three symbols, the game ends in a draw.",
    "Game End: The game concludes when there is a winner or a draw."
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
}

.switch > span {
  position: absolute;
  top: 14px;
  pointer-events: none;
  font-family: 'Helvetica', Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .06);
  width: 50%;
  text-align: center;
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



</style>

<div class="rules">
    <h1>{title}</h1>
    <center>
        <div class="switch">
            <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" on:click={changeLang}>
            <label for="language-toggle"></label>
            <span class="on">IT</span>
            <span class="off">EN</span>
          </div>
     </center>
    <ul>
    {#each rules as rule}
        <li>{rule}</li>
    {/each}</ul>
    <br>
    <button on:click={view}>OK</button>
</div>