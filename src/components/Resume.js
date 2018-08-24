import React, { Component } from "react";
import { Tag, Timeline } from "antd";

export default class Resume extends Component {
  render() {
    const information = {
      "Full name": "Huynh Duc Duy",
      "Day of birth": "January 2nd, 1999",
      "Phone number": "(+84) 163 922 8306",
      Email: "duuuuuuuuy@gmail.com",
      Skype: "live:duuuuuuuuy"
    };

    const about =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const experience =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const skillFrontEnd = ["html5", "css3"];
    const skillBackEnd = ["php", "laravel"];
    const skillOthers = ["git"];

    const education = [
      "Software Engineering at FPT University, HCMC",
      "Information and Technology Special Class at Le Quy Don Gifted High School, Da Nang"
    ];

    const achievements = [
      "3rd Place at Vifotec National 2017",
      "3rd Place at Young Maker Challenger National 2017",
      "1st Place at Viet Nam Science and Engineering Fair (ViSEF) Regional 2017",
      "2nd Place at Group D3, Young Information and Technology National 2017",
      "1st Place at Group D3, Young Information and Technology Regional 2017",
      "2 * 4th Place at Group E3, Young Information and Technology Regional 2017",
      "3rd Place at Robodnic Da Nang 2017",
      "2nd Place at Student Contest 2016",
      "2nd Place at Viet Nam Science and Engineering Fair (ViSEF) Regional 2016",
      "4th Place at Robodnic Da Nang 2016",
      "3rd Place at Group E3, Young Information and Technology National 2016",
      "2st Place at Group D3, Young Information and Technology National 2016",
      "1st Place at Group D3, Young Information and Technology Regional 2016",
      "1st Place at Group E3, Young Information and Technology Regional 2016",
      "2nd Place at Group C, Young Information and Technology Regional 2016",
      "2nd Place at Student Contest 2015",
      "2nd Place at Group D2, Young Information and Technology National 2015",
      "1nd Place at Group D2, Young Information and Technology Regional 2015",
      "2nd Place at Group B, Young Information and Technology Regional 2015"
    ];

    const listSkillFrontEnd = skillFrontEnd.map(value => (
      <Tag key={value}>{value}</Tag>
    ));

    const listSkillBackEnd = skillBackEnd.map(value => (
      <Tag key={value}>{value}</Tag>
    ));

    const listSkillOthers = skillOthers.map(value => (
      <Tag key={value}>{value}</Tag>
    ));

    const listInformation = Object.keys(information).map(
      key => `<p key=${key}>${key} : <b>${information[key]}</b></p>`
    );

    const listEducation = education.map(value => (
      <Timeline.Item color="gray" key={value}>
        {value}
      </Timeline.Item>
    ));

    const listAchievements = achievements.map(value => (
      <Timeline.Item color="gray" key={value}>
        {value}
      </Timeline.Item>
    ));

    return (
      <div className="resume">
        <h2>Information</h2>
        {listInformation}
        <h2>About</h2>
        <p>{about}</p>
        <h2>Skills</h2>
        <h3 className="for-tag">Front-end</h3>
        {listSkillFrontEnd}
        <h3 className="for-tag">Back-end</h3>
        {listSkillBackEnd}
        <h3 className="for-tag">Others</h3>
        {listSkillOthers}
        <h2>Experience</h2>
        <p>{experience}</p>
        <h2>Education</h2>
        <Timeline style={{ marginTop: "25px", marginBottom: "-50px" }}>
          {listEducation}
        </Timeline>
        <h2>Achievements</h2>
        <Timeline style={{ marginTop: "25px", marginBottom: "-50px" }}>
          {listAchievements}
        </Timeline>
      </div>
    );
  }
}
