import React from "react";

type ButtonNameType = {
    name: string
    callBack: ()=>void
}

export const Button = (props: ButtonNameType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}