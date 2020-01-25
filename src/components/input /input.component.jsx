import React, { useContext, Fragment } from 'react';
import './input.style.css';
import { InputContext } from '../context/input.context';
import { toLocale } from '../utils';


export const Input = () => {
    const [state] =  useContext(InputContext)
    return (
        <Fragment>
            <div className='input'>
                <form className='form-input'>
                    <input value = {isNaN(state.input) && state.input > 0  ? toLocale(state.input) : state.input} type='text' name='input' readOnly/>
                </form>
            </div>
            <div className='output'>
                <form className='form-output'>
                    <input value = {state.eval  ? toLocale(eval(state.input)) : ''} type='number' />
                </form>
            </div>
        </Fragment>
        )
}