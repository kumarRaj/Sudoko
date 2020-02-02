import React, {Component} from "react";
import SudokuBoard from './SudokoBoard';

export default class Sudoko extends Component{
    constructor(){
        super();
        this.state={
            board: [
                [3, 0, 6, 5, 0, 8, 4, 0, 0], 
                [5, 2, 0, 0, 0, 0, 0, 0, 0], 
                [0, 8, 7, 0, 0, 0, 0, 3, 1], 
                [0, 0, 3, 0, 1, 0, 0, 8, 0], 
                [9, 0, 0, 8, 6, 3, 0, 0, 5], 
                [0, 5, 0, 0, 9, 0, 6, 0, 0], 
                [1, 3, 0, 0, 0, 0, 2, 5, 0], 
                [0, 0, 0, 0, 0, 0, 0, 7, 4], 
                [0, 0, 5, 2, 0, 6, 3, 0, 0] 
            ]
        };
        console.log("board" +this.state.board);
        this.changeBoard = this.changeBoard.bind(this);
    }

    changeBoard(){
        const sol = [
            [3, 0, 6, 5, 0, 8, 4, 0, 0], 
            [5, 2, 0, 0, 0, 0, 0, 0, 0], 
            [0, 8, 7, 0, 0, 0, 0, 3, 1], 
            [0, 0, 3, 0, 1, 0, 0, 8, 0], 
            [9, 0, 0, 8, 6, 3, 0, 0, 5], 
            [0, 5, 0, 0, 9, 0, 6, 0, 0], 
            [1, 3, 0, 0, 0, 0, 2, 5, 0], 
            [0, 0, 0, 0, 0, 0, 0, 7, 4], 
            [3, 0, 5, 2, 0, 6, 3, 0, 0] 
        ];
        console.log(sol);
        this.setState({board : sol});
        console.log("state"+this.state.board);
    }
    
    render(){
           return (
            <div> 
                <SudokuBoard board={this.state.board}/>
                <button onClick={this.changeBoard}>Solve me</button>
            </div>
        )
    }
}

