import { writable } from 'svelte/store';

const clearBoa = {
		board: Array(9).fill(''),
		stepNumber: 0,
		whowon: null
}
const clearGame = [{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: null
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: null
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: null
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: null
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: null
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: null
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: null
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: null
},
{
	board: Array(9).fill(''),
	stepNumber: 0,
	whowon: null
}
]
export const game = createGame()
let xisNext = true
let next = -1


function createGame() {
	const { subscribe, set, update} = writable(clearGame);

	return {
		subscribe,
		move: index => update(game => {
			//console.log(game)
			let newBoard = game[Math.floor(index/9)].board
			if(newBoard[index%9]=="" && game[Math.floor(index/9)].whowon==null && (Math.floor(index/9)==next || next == -1)){
				newBoard[index%9] = xisNext ? 'X' : 'O';
				next = index%9
				if(game[next].whowon!=null) next = -1
				Object.assign({}, game[Math.floor(index/9)], {
					board: newBoard,
					stepNumber: game[Math.floor(index/9)].stepNumber,
					whowon: game[Math.floor(index/9)].whowon
				})
				let n = game[Math.floor(index/9)].board.filter(space => space!='').length
				xisNext = !xisNext
				let result = calculateWinner(game[Math.floor(index/9)].board, game[Math.floor(index/9)].stepNumber)
				if(result == null && n==9) game[Math.floor(index/9)] = clearBoa
				game[Math.floor(index/9)].whowon=result}
				return game
		}),
		reset: () => set(clearGame)
	};
}

export function calculateWinner(squares, number) {
	
	
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
	return null;
}

