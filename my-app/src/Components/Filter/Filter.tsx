import React from 'react';
import {filterType, moneyType} from "../../App";

type FilterType = {
    filterMoney:(value:filterType)=>void
    currentMoney:moneyType[]
}

export const Filter:React.FC<FilterType> = ({filterMoney,currentMoney}) => {
    return (
        <>
            <ul>
                {currentMoney.map((m,index)=>{
                    return(
                        <li key={index}>
                            <span>{m.banknots}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>{filterMoney('all')}}>all</button>
                <button onClick={()=>{filterMoney('Dollars')}}>dollar</button>
                <button onClick={()=>{filterMoney('RUBLS')}}>rubls</button>
            </div>
            
        </>
    );
};

