import axios from "axios";
import React from "react";
import Employee from "./Employee";
import Car from "./Car";

const Employees = () => {

    const [employees, setEmployees] = React.useState([]);
    const [selectedEmployee, setSelectedEmployee] = React.useState("");
    const [showEmployee, setShowEmployee] = React.useState(false);
    const [cars, setCars] = React.useState([]);
    const [selectedCar, setSelectedCar] = React.useState(null);
    const [showCar, setShowCar] = React.useState(false);


    React.useEffect(async () => {
        await axios.get("https://617cdc751eadc5001713632d.mockapi.io/clients")
            .then(res => {
                // setEmployees(res.data);
                console.log(employees);
                setEmployees(res.data.sort(compare));
            });
    }, []);

    React.useEffect(async () => {
        await axios.get("https://617cdc751eadc5001713632d.mockapi.io/cars")
            .then(res => {
                setCars(res.data.filter(car => {
                    return car.isAvailable
                }));
                console.log(cars)
            });
    }, []);

    const showEmployeeCard = (person) => {
        setShowEmployee(true);
        setSelectedEmployee(person);
    }

    // sort employees by name
    const compare = (a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    const selectCar = (car) => {
        setShowCar(true);
        setSelectedCar(car);
    }

    const assignCar = () => {
        selectedCar.isAvailable = false;
        selectedCar.rentDetails = selectedEmployee;
    }


    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{textAlign: "left"}}>
                Employees:
                <br/><br/>
                {employees.map(person => {
                    return (
                        <div style={{cursor: "pointer"}}
                             onClick={() => showEmployeeCard(person)}>
                            {person.name}
                        </div>
                    )
                })}
            </div>
            <div>
                {showEmployee ? <Employee person={selectedEmployee}/> : ""}
                {showCar ? <Car car={selectedCar}/> : ""}
            </div>
            <div style={{textAlign: "left"}}>
                Available cars:
                <br/><br/>
                {
                    selectedEmployee ?
                        (
                            selectedEmployee.isSenior ?
                                (
                                    cars.map(ele => {
                                        return (
                                            <div onClick={() => selectCar(ele)}>
                                                {ele.name}
                                            </div>
                                        )
                                    })
                                ) :
                                (
                                    cars.filter(car => {
                                        return car.isGold
                                    }).map(ele => {
                                        return (
                                            <div onClick={() => selectCar(ele)}>
                                                {ele.name}
                                            </div>
                                        )
                                    })
                                )


                        ) : ""
                }
            </div>
        </div>
    );
}

export default Employees;