import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";
class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "wordpress" },
      { id: 2, value: "react" },
      { id: 3, value: "Laravel" },
      { id: 4, value: "React native" },
    ],
    selectedRadio: "javascript",
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
  };
  render() {
    let { projects, radios, selectedRadio } = this.state;
    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}> {radio.value} </label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
