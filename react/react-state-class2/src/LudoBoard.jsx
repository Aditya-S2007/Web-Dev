import { useState } from "react";

export default function LudoBoard (){
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

    let updateBlue = () => {
        // console.log( `moves.blue = ${moves.blue}`);
        setMoves((pervMoves)=>{
           return {...pervMoves,blue: pervMoves.blue + 1 };// ... moves Creates a shallow copy

        }); 
    };
    let updateYellow = () => {
        
        setMoves((pervMoves)=>{
           return {...pervMoves,yellow: pervMoves.yellow + 1 };// ... moves Creates a shallow copy

        }); 
    };
    return ( 
        <div>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green} </p>
                <button style={{backgroundColor:"green"}}>+1</button>
                <p>Red moves = {moves.red} </p>
                <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    );
}
        