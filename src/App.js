import React, { Component } from 'react';
import './App.css';
import Tools from './Components/Tools';

const allTools = [
  {label: "Google Drive"},
  {label: "Keynote"},
  {label: "Clips"},
  {label: "Plants"},
  {label: "Podcast"}
]

class App extends Component {
  state = {
    allTools: allTools,
    players: ["player1", "player2"],
    player1: {tools:[]},
    player2: {tools:[]},
    currentPlayer: "player1"
  }

  updatePlayers = (toolToSelect) => {
      let player1 = {};
      let player2 = {};
      if (this.state.currentPlayer === "player1") {
        player1 = {
          tools: this.state.player1.tools.concat(toolToSelect)
        };
        player2 = { tools: [...this.state.player2.tools] };
      }
      else {
        player1 = { tools: [...this.state.player1.tools] };
        player2 = { tools: this.state.player2.tools.concat(toolToSelect) };
      }
      return { player1, player2 };
    };

  handleDelete = data => {
    console.log("Good job!")
  };

  selectChip = data => {
    const allTools = [...this.state.allTools];

    const toolToSelect = allTools.filter(tool => {
      return tool.label === data.currentTarget.innerText
    })[0];

    toolToSelect.playerTag = this.state.currentPlayer;
  
    const player1 = this.updatePlayers(toolToSelect).player1;
    const player2 = this.updatePlayers(toolToSelect).player2;
    const updatedTools = allTools.filter(tool => {return tool.label !== toolToSelect.label});

    const currentPlayer = this.state.currentPlayer === "player1" ? "player2": "player1";
    this.setState({
        allTools: updatedTools,
        player1,
        player2,
        currentPlayer
      }
    )
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="box tools">
            <h1>Tools</h1>
            <Tools 
              tools={this.state.allTools}
              onDelete={this.handleDelete}
              onClick={this.selectChip}
            />
          </div>
          <div className="box player1">
            <h2>Player1</h2>
            <Tools 
              tools={this.state.player1.tools}
              onDelete={this.handleDelete}
            />
          </div>
          <div className="box player2">
            <h2>Player2</h2>
            <Tools 
              tools={this.state.player2.tools} 
              onDelete={this.handleDelete}
            />
          </div>
        </div>
      </React.Fragment>
      
    );
  }
}

export default App;

