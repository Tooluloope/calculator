import React, { useContext } from 'react';
import './input.style.css';
import { InputContext } from '../context/input.context';


export const Input = () => {
    const [state, dispatch] =  useContext(InputContext)
    return (
        <div className='input'>
            <form className='form-input'>
                <input value = {state} type='text' name='input' readOnly/>
            </form>
        </div>
        )
}