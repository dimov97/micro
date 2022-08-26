import React, {ChangeEvent} from 'react';

type InputType = {
    setTitle:(title:string)=>void
    title:string
}

export const Input:React.FC<InputType> = ({setTitle, title}) => {
    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.currentTarget.value)
    }
    return <input value={title} onChange={onChangeInputHandler}/>
};

