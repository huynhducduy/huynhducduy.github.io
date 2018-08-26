import React, { Component } from "react";
import { Tag, Timeline } from "antd";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class Resume extends Component {
  render() {
    const {
      information,
      about,
      skill_front_end,
      skill_back_end,
      skill_others,
      experience,
      education,
      achievements,
      projects
    } = this.props.data;

    const listInformation = Object.keys(information).map(key => (
      <p key={key}>
        {key} : <b>{information[key]}</b>
      </p>
    ));

    const listSkillFrontEnd = skill_front_end.map(value => (
      <Tag key={value}>{value}</Tag>
    ));

    const listSkillBackEnd = skill_back_end.map(value => (
      <Tag key={value}>{value}</Tag>
    ));

    const listSkillOthers = skill_others.map(value => (
      <Tag key={value}>{value}</Tag>
    ));

    const listEducation = Object.keys(education).map(key => (
      <Timeline.Item color="gray" className="education" key={education[key]}>
        {key}
        <p>{education[key]}</p>
      </Timeline.Item>
    ));

    const listProjects = Object.keys(projects).map(key => (
      <Timeline.Item color="gray" className="education" key={projects[key]}>
        <span dangerouslySetInnerHTML={{ __html: key}}/>
        <p>{projects[key]}</p>
      </Timeline.Item>
    ));

    const listAchievements = achievements.map(value => (
      <Timeline.Item color="gray" key={value}>
        {value}
      </Timeline.Item>
    ));

    return (
      <div className="resume">
        <Helmet>
          <title>Resume - Huynh Duc Duy</title>
        </Helmet>
        <h2># Information</h2>
        {listInformation}
        <h2># About</h2>
        <div dangerouslySetInnerHTML={{ __html: about }} />
        <h2># Skills</h2>
        <h3 className="for-tag">Front-end</h3>
        {listSkillFrontEnd}
        <h3 className="for-tag">Back-end</h3>
        {listSkillBackEnd}
        <h3 className="for-tag">Others</h3>
        {listSkillOthers}
        <h2># Experience</h2>
        <p>{experience}</p>
        <h2># Education</h2>
        <Timeline className="timeline-list">{listEducation}</Timeline>
        <h2># Projects</h2>
        <Timeline className="timeline-list">{listProjects}</Timeline>
        <h2># Achievements</h2>
        <Timeline className="timeline-list">{listAchievements}</Timeline>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.resume
});

export default connect(mapStateToProps)(Resume);
