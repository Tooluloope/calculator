
import React, { useContext, useEffect } from 'react';
import './keyboard.style.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { InputContext } from '../context/input.context';


export const Keyboard = () => {
    const [state, dispatch] =  useContext(InputContext)

    const Click = (e) => {
        dispatch({type:'INPUT', payload: e.target.id })
    }

    useEffect(() => {
        const buttons = document.getElementsByClassName('button')

        for (let i = 0; i < buttons.length; i ++) {
            var button = buttons[i]
            button.addEventListener("click", Click)
        };
        return () => {
            window.removeEventListener("click", Click)
        };
    })
    
    

    return (
        <div className='keyboard'>
            <div className='top-keys'>
                <i className="fas fa-history fa-2x icon-history"></i>
                <i className="fas fa-backspace fa-2x icon-delete"></i>
            </div>
            <div className='lower-keys'>
                <button className='button margin-3rd' id='C'> C</button>
                <button className='button margin-3rd green' id='()'> ()</button>
                <button className='button margin-3rd green' id='%'> %</button>
                <button className='button green' id='/'> /</button>
                <button className='button margin-3rd' id='7'> 7</button>
                <button className='button margin-3rd' id='8'> 8</button>
                <button className='button margin-3rd' id='9'> 9</button>
                <button className='button green' id='*'> *</button>
                <button className='button margin-3rd' id='4'> 4</button>
                <button className='button margin-3rd' id='5'> 5</button>
                <button className='button margin-3rd' id='6'> 6</button>
                <button className='button green' id='-'> -</button>
                <button className='button margin-3rd' id='1'> 1</button>
                <button className='button margin-3rd' id='2'> 2</button>
                <button className='button margin-3rd' id='3'> 3</button>
                <button className='button green' id='+'> +</button>
                <button className='button margin-3rd' id='+/-'> +/-</button>
                <button className='button margin-3rd' id='0'> 0</button>
                <button className='button margin-3rd' id='.'> .</button>
                <button className='button equal' id='='> =</button>

                
            
            </div>
        </div>
    )

}