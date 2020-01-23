import React, { useContext } from 'react';
import './input.style.css';
import { InputContext } from '../context/input.context';


export const Input = () => {
    const [state, dispatch] =  useContext(InputContext)
    console.log(state)
    return (
        <div className='input'>
            <form className='form-input'>
                <input value = {state} onChange = {(e) => dispatch({type:'INPUT', payload: e.target.value})} type='text' name='input' readOnly/>
            </form>
        </div>
        )
}