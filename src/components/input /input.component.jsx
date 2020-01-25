import React, { useContext, Fragment } from 'react';
import './input.style.css';
import { InputContext } from '../context/input.context';
import { toLocale } from '../utils';


export const Input = () => {
    const [state] =  useContext(InputContext)
    console.log(state)
    
    return (
        <Fragment>
            <div className='input'>
                <form className='form-input'>
                    <input value = {isNaN(state.input) && state.input > 0  ? toLocale(state.input) : state.input} type='text' name='input' readOnly/>
                </form>
            </div>

            
            <div className='output'>
                <form className='form-output'>
                    <input defaultValue = {state.eval  ? toLocale(eval(state.input)) : ''} type='text' readOnly />
                </form>
            </div>
        </Fragment>
        )
}