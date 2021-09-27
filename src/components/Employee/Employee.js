import React from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Employee = props => {
    const { picture, name, age, salary, role, email } = props.employee;
    return (
        <div className="employee">
            <img src={picture} alt="" />
            <p><span className="title">Name:</span> {name}</p>
            <p><span className="title">Age:</span> {age}</p>
            <p><span className="title">Role:</span> {role}</p>
            <p><span className="title">Email:</span> {email}</p>
            <p><span className="title">Salary:</span> {salary}</p>
            <button onClick={() => props.handleTotal} className="add-button"><FontAwesomeIcon icon={faPlus} />Add to Recruit</button>
        </div>
    );
};

export default Employee;