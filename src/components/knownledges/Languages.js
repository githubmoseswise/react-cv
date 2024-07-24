import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "HTML", xp: 2 },
      { id: 2, value: "Css", xp: 2 },
      { id: 3, value: "Php", xp: 2 },
      { id: 4, value: "JavaScript", xp: 2 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.4 },
      { id: 2, value: "React native", xp: 1.2 },
      { id: 3, value: "Bootstrap", xp: 2 },
      { id: 4, value: "Wordpress", xp: 1.7 },
      { id: 5, value: "Laravel", xp: 2 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      // <div></div>

      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworkDisplay"
        />
      </div>
    );
  }
}

export default Languages;
