import './App.css';
import React from 'react';
import axios from 'axios';



class App extends React.Component {
  constructor(){
      super();
      this.state = {
          teams: [],
          currentSort: 'default'
      };
      this.getTeams = this.getTeams.bind(this);
  }

  componentDidMount() {
      this.getTeams();
  }
  
  async getTeams () {
    await axios.get("https://dotmap-candidat.cleverapps.io")
    .then(res => {
      const teams = res.data;
      this.setState({ teams });
    });
  }

  render(){

      return(
        <div>
          <h3>Tableau</h3>
          <hr />
          <table>
            <thead>
              <tr>
                <th>UUID</th>
                <th>Name</th>
                <th>Team</th>
                <th>Date</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>{this.state.teams.map(item => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.team}</td>
                  <td>{item.date}</td>
                  <td>{item.score}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      )
  }
}

export default App;
