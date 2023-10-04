/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-20 h-20 text-4xl font-semibold duration-200 border-2 border-black border-solid cursor-pointer hover:bg-sky-200"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquare = squares.slice();
    nextSquare[i] = xIsNext ? "X" : "O";
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Winner :   " + winner;
  } else {
    status = "Next Player :  " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="mt-10 text-2xl font-semibold text-center">{status}</div>
      <div className="border-2 border-black w-[244px] mx-auto mt-10">
        <div className="flex flex-wrap w-[240px] h-[240px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <Square
              key={index}
              value={squares[index]}
              onSquareClick={() => handleClick([index])}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
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

    if (squares[a] && squares[a] === squares[b] && squares[c]) {
      return squares[a];
    }
  }

  return false;
}
