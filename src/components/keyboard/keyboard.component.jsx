
import React, { useContext, useEffect } from 'react';
import './keyboard.style.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { InputContext } from '../context/input.context';


export const Keyboard = () => {
    const [ ,dispatch] =  useContext(InputContext)

    const Click = (e) => {   
        dispatch({type:'INPUT_NUMBERS', payload: e.target.id })
    }

    useEffect(() => {
        const numbers = document.getElementsByClassName('numbers')
        const operator = document.getElementsByClassName('operator')

        for (let i = 0; i < numbers.length; i ++) {
            var number = numbers[i]
            number.addEventListener("click", Click)
        };
        return () => {
            window.removeEventListener("click", Click)
        };
    },[])
    
    

    return (
        <div className='keyboard'>
            <div className='top-keys'>
                <i className="fas fa-history fa-2x icon-history"></i>
                <i className="fas fa-backspace fa-2x icon-delete"></i>
            </div>
            <div className='lower-keys'>
                <button className='button margin-3rd' id='C'> C</button>
                <button className='button margin-3rd green ' id='()'> ()</button>
                <button className='button margin-3rd green' id='%'> %</button>
                <button className='button green operator' id='/'> /</button>
                <button className='button margin-3rd numbers' id='7'> 7</button>
                <button className='button margin-3rd numbers' id='8'> 8</button>
                <button className='button margin-3rd numbers' id='9'> 9</button>
                <button className='button green operator' id='*'> *</button>
                <button className='button margin-3rd numbers' id='4'> 4</button>
                <button className='button margin-3rd numbers' id='5'> 5</button>
                <button className='button margin-3rd numbers' id='6'> 6</button>
                <button className='button green operator' id='-'> -</button>
                <button className='button margin-3rd numbers' id='1'> 1</button>
                <button className='button margin-3rd numbers' id='2'> 2</button>
                <button className='button margin-3rd numbers' id='3'> 3</button>
                <button className='button green operator' id='+'> +</button>
                <button className='button margin-3rd' id='+/-'> +/-</button>
                <button className='button margin-3rd number' id='0'> 0</button>
                <button className='button margin-3rd' id='.'> .</button>
                <button className='button equal' id='='> =</button>

                
            
            </div>
        </div>
    )

}