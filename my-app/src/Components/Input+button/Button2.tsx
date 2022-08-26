import React from 'react';

type Button2Type = {
    name:string
    callback:()=>void
}
export const Button2:React.FC<Button2Type> = ({name, callback}) => {
    const onClickButton2Handler = ()=> {
        callback()
    }
    return <button onClick={onClickButton2Handler}>{name}</button>
};

