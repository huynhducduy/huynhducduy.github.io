import React, { Component } from 'react';
import { Tag, Timeline } from 'antd';


export default class Resume extends Component {
  render() {
    const information = {
        'Full name'     : 'Huynh Duc Duy',
        'Day of birth'  : 'January 2nd, 1999',
        'Phone number'  : '(+84) 163 922 8306',
        'Email'         : 'duuuuuuuuy@gmail.com',
        'Skype'         : 'live:duuuuuuuuy',
    };

    const about             = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const experience        = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const skill_front_end   = ['html5','css3'];
    const skill_back_end    = ['php', 'laravel'];
    const skill_others      = ['git'];

    const education = [
        'Software Engineering at FPT University, HCMC',
        'Information and Technology Special Class at Le Quy Don Gifted High School, Da Nang'
    ];

    const achievements = [
        '3rd Place at Vifotec National 2017',
        '3rd Place at Young Maker Challenger National 2017',
        '1st Place at Viet Nam Science and Engineering Fair (ViSEF) Regional 2017',
        '2nd Place at Group D3, Young Infomation and Technology National 2017',
        '1st Place at Group D3, Young Infomation and Technology Regional 2017',
        '2 * 4th Place at Group E3, Young Infomation and Technology Regional 2017',
        '3rd Place at Robodnic Da Nang 2017',
        '2nd Place at Student Contest 2016',
        '2nd Place at Viet Nam Science and Engineering Fair (ViSEF) Regional 2016',
        '4th Place at Robodnic Da Nang 2016',
        '3rd Place at Group E3, Young Infomation and Technology National 2016',
        '2st Place at Group D3, Young Infomation and Technology National 2016',
        '1st Place at Group D3, Young Infomation and Technology Regional 2016',
        '1st Place at Group E3, Young Infomation and Technology Regional 2016',
        '2nd Place at Group C, Young Infomation and Technology Regional 2016',
        '2nd Place at Student Contest 2015',
        '2nd Place at Group D2, Young Infomation and Technology National 2015',
        '1nd Place at Group D2, Young Infomation and Technology Regional 2015',
        '2nd Place at Group B, Young Infomation and Technology Regional 2015'
    ];

    const list_skill_front_end = skill_front_end.map(value => {
        return <Tag key={value}>{value}</Tag>
    });

    const list_skill_back_end = skill_back_end.map(value => {
        return <Tag key={value}>{value}</Tag>
    });

    const list_skill_others = skill_others.map(value => {
        return <Tag key={value}>{value}</Tag>
    });

    const list_infomation = Object.keys(information).map(key => {
        return <p key={key}>{key}: <b>{information[key]}</b></p>
    });

    const list_education = education.map(value => {
        return <Timeline.Item color="gray" key={value}>{value}</Timeline.Item>
    });

    const list_achievements = achievements.map(value => {
        return <Timeline.Item color="gray" key={value}>{value}</Timeline.Item>
    });

    return (
        <div className="resume">
            <h2>Infomation</h2>
            { list_infomation }
            <h2>About</h2>
            <p>{ about }</p>
            <h2>Skills</h2>
            <h3 className="for-tag">Front-end</h3>
            { list_skill_front_end }
            <h3 className="for-tag">Back-end</h3>
            { list_skill_back_end }
            <h3 className="for-tag">Others</h3>
            { list_skill_others }
            <h2>Experience</h2>
            <p>{ experience }</p>
            <h2>Education</h2>
            <Timeline style={{ 'marginTop': '25px', 'marginBottom': '-50px' }}>
                { list_education }
            </Timeline>
            <h2>Achievements</h2>
            <Timeline style={{ 'marginTop': '25px', 'marginBottom': '-50px' }}>
                { list_achievements }
            </Timeline>
        </div>
    );
  }
}
