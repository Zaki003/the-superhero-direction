import React, { useEffect, useState } from 'react';
import './Recruits.css';
import '../Employee/Employee';
import Employee from '../Employee/Employee';

const Recruits = () => {
    const [employees, setEmployees] = useState([]);
    const [total, setTotal] = useState(0);

    const handleTotal = employee => {
        const newTotal = total + employee.salary;
        setTotal(newTotal);
    };


    useEffect(() => {
        fetch("employees.JSON")
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);

    return (
        <div className="main-container">
            <div className="employees-container">
                {
                    employees.map(employee => <Employee
                        key={employee.index}
                        employee={employee}
                        handleTotal={handleTotal}></Employee>)
                }
            </div>

            <div className="total-display">
                <h2>Recruits Made: </h2>
                <h2>Total Salaries: ${total}</h2>
            </div>
        </div>
    );
};

export default Recruits;