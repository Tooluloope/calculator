import React, { useContext, Fragment } from 'react';
import './input.style.css';
import { InputContext } from '../context/input.context';
import { displayEval } from '../utils';


export const Input = () => {
    const [state] =  useContext(InputContext)
    console.log(state)
    return (
        <Fragment>
            <div className='input'>
                <form className='form-input'>
                    <input value = {state.input} type='text' name='input' readOnly/>
                </form>
            </div>

            
            <div className='output'>
                <form className='form-output'>
                    <input defaultValue = {state.eval  ? displayEval(state.input) : ''} type='text' readOnly />
                </form>
            </div>
        </Fragment>
        )
}