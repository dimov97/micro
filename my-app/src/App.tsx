import React, {useState} from 'react';
import './App.css';
import {TopCars} from "./Components/TopCars/TopCars";
import {Button} from "./Components/Button/Button";
import {Filter} from "./Components/Filter/Filter";

export type filterType = 'all'|'Dollars'|'RUBLS'
export type moneyType = {
    banknots: string
    value: number
    number: string
}

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<filterType>('all')
    let currentMoney = money
    if (filter === 'Dollars') {
        currentMoney = money.filter(m=> m.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter(m=> m.banknots === 'RUBLS')
    }
    function filterMoney(value:filterType) {
        setFilter(value)
    }
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const Button1foo = (subscriber: string, age: number, adres: string) => {
        console.log(subscriber, age, adres)
    }
    const Button2foo = (subscriber: string) => {
        console.log(subscriber)
    }
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }
    const zero = () => {
        setA(a = 0);
        console.log(a);
    }

    return (
        <>
            <TopCars topCars={topCars}/>
            <Button name={"MyYouTubeChanel-1"} callBack={() => Button1foo("sonya", 21, "live in Odessa")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={() => Button2foo("valera")}/>

            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={zero}>0</button>
            <Filter filterMoney={filterMoney}
                    currentMoney={currentMoney}
            />

        </>
    )
}

export default App;
