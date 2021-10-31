import React from "react";

const Employee = ({person, assign}) => {

    return (
        <div style={{textAlign: "left"}}>
            <img src={person.avatar} alt="avatar"/>
            <div>Name: {person.name}</div>
            <div>Department: {person.department}</div>
            <div>Salary: {person.salary}</div>
            {person.isSenior ? <div>Senior</div> : ""}
            {person.isActive ? "" : <div>Not active</div>}
            <button disabled={!person.isActive} onClick={assign}>Assign Car</button>
        </div>
    )
}

export default Employee;