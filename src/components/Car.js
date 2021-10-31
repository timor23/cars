import React from "react";

const Car = ({car}) => {

    return (
        <div style={{textAlign: "left"}}>
            <img src={car.picture} alt="avatar"/>
            <div>{car.name}</div>
            {car.isGold ? <div>Gold</div> : ""}
            {/*<button disabled={!car.isAvailable}>Assign to Employee</button>*/}
        </div>
    )
}

export default Car;