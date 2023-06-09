import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspiring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
      {
        name: "Amaari",
        job: "Developer",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => i !== index),
    });
  };

  render() {
    const { characters } = this.state;

    return (
      <React.StrictMode>
        <div className="Container">
          <Table
            removeCharacter={this.removeCharacter}
            characterData={characters}
          />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
