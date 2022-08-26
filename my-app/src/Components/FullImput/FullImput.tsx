import React, {ChangeEvent, useState} from 'react';

type FullImputType = {
    addMessage:(title:string)=>void
}

export const FullImput:React.FC<FullImputType> = ({addMessage}) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

