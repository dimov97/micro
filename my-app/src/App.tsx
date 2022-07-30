import React, {useState} from 'react';
import './App.css';
import {TopCars} from "./Components/TopCars/TopCars";
import {Button} from "./Components/Button/Button";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    const Button1foo =(subscriber:string, age:number, adres:string)=> {
        console.log(subscriber, age, adres)
    }
    const Button2foo =(subscriber:string)=> {
        console.log(subscriber)
    }
/*    const MyFirstSubscriber = () => {
        console.log("hello, my name is Vasya");
    }
    const MySecondSubscriber = () => {
        console.log("hello, my name is Ivan");
    }*/
/*       const onClickHandler = (name:string)=> {
           console.log(name);
       }*/

/*    const foo1 = () => {
        console.log(100100);
    }
    const foo2 = (num:number) => {
        console.log(num);
    }*/
    let[a, setA]=useState(1)

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
            {/*<button onClick={(event)=> {console.log("hello")}}>MyYouTubeChanel-1</button>*/}
{/*            <button onClick={(event)=>onClickHandler("vasya")}>MyYouTubeChanel-1</button>
            <button onClick={(event)=>onClickHandler("ivan")}>MyYouTubeChanel-2</button>*/}
            <Button name={"MyYouTubeChanel-1"} callBack={()=>Button1foo("sonya", 21, "live in Odessa")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={()=>Button2foo("valera")}/>

 {/*           <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>*/}

            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={zero}>0</button>



        </>
    )
}

export default App;
