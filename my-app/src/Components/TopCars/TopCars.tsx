import React from 'react';

type ТopCarsPropsType = {
    topCars:Array<CarsType>
}

type CarsType={
    manufacturer: string,
    model: string
}

export const TopCars =(props:ТopCarsPropsType)=> {
    return (
        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            {props.topCars.map((ObjectFromCarsType, index)=> {
                return (
                    <tbody key={index}>
                    <tr>
                        <td>{ObjectFromCarsType.manufacturer}</td>
                        <td>{ObjectFromCarsType.model}</td>
                    </tr>
                    </tbody>
                )
            })}
        </table>
    )
}