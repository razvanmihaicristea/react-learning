import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: -1
        }
    }

    render() {
      return (
        <button 
            className="square" 
            style={{ backgroundColor: this.props.background }} 
            onClick={
                () => {this.setState( {value: 'X'} )}
            }
            >
          { this.state.value }
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i, color) {
      return <Square value = {i} background = { color } />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0, '#f0c')}
            {this.renderSquare(1, '#fc0')}
            {this.renderSquare(2, '#f0c')}
          </div>
          <div className="board-row">
            {this.renderSquare(3, '#fc0')}
            {this.renderSquare(4, '#f0c')}
            {this.renderSquare(5, '#fc0')}
          </div>
          <div className="board-row">
            {this.renderSquare(6, '#f0c')}
            {this.renderSquare(7, '#fc0')}
            {this.renderSquare(8, '#f0c')}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  