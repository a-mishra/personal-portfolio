import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperiencePanel.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperiencePanel extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <>
              {section["experiences"].map((experience) => {
                return <ExperienceCard experience={experience} theme={theme} />;
              })}
            </>
          );
        })}
      </div>
    );
  }
}

export default ExperiencePanel;
