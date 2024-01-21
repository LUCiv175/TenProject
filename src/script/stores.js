import { writable } from 'svelte/store';

const clearBoa = {
		board: Array(9).fill(''),
		stepNumber: 0,
		whowon: ''
}
const clearGame = [{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: ''
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: ''
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: ''
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: ''
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: ''
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: ''
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: ''
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: ''
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: ''
}
]

let xisNext = true
let next = -1
let end = 0;



function createGame() {
	const { subscribe, set, update} = writable(clearGame);

	return {
		subscribe,
		move: index => update(game => {
			console.log(game)
			let newBoard = game[Math.floor(index/9)].board
			if(newBoard[index%9]=="" && game[Math.floor(index/9)].whowon=='' && (Math.floor(index/9)==next || next == -1) && end!=-1){
				newBoard[index%9] = xisNext ? 'X' : 'O';
				next = index%9
				store.change(next)
				Object.assign({}, game[Math.floor(index/9)], {
					board: newBoard,
					stepNumber: game[Math.floor(index/9)].stepNumber,
					whowon: game[Math.floor(index/9)].whowon
				})
				let n = game[Math.floor(index/9)].board.filter(space => space!='').length
				xisNext = !xisNext
				let result = calculateWinner(game[Math.floor(index/9)].board)
				if(result == null && n==9) game[Math.floor(index/9)] = clearBoa
				if(result!=null){game[Math.floor(index/9)].whowon=result}
				if(game[next].whowon!=''){
					next = -1
					store.change(next)
				}
				}
				return game
		}),
		reset: () => set(clearGame)
	};
}
export const game = createGame()
export function calculateWinner(squares) {
	
	
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return '';
}



export function calculateWinnerTotal(game) {
	let squares = []
	game.forEach(element => {
		squares = [...squares, element.whowon];
	});

	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			end = -1;
			return squares[a];
		}
	}
	if(squares.filter(space => space!='').length == 9){
		end = -1
		return 'p';
	}
	return null;
}
function createStore() {
	const {subscribe, update} = writable(-1)

	return {
		subscribe, 
		change: (n) => update(s => n)
	}
}
export const store = createStore();

function createCond() {
	const {subscribe, update} = writable(true)

	return {
		subscribe, 
		change: () => update(s => !s)
	}
}

export const viewRules = createCond();
export const rulesLang = createCond();