
import React, { useContext, useEffect } from 'react';
import './keyboard.style.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { InputContext } from '../context/input.context';



export const Keyboard = () => {
    const [state ,dispatch] =  useContext(InputContext)

    // dispatch action once a number is clicked
    const ClickNumbers = (e) => {  
        dispatch({type:'INPUT_NUMBERS', payload: {input : e.target.name, eval: true} })
    }
    // dispatch action once an operator is clicked
    const ClickOperators = (e) => {  
        dispatch({type:'INPUT_OPERATORS', payload: {input : e.target.name, eval: false} })
    }
        // dispatch action once the delete button is clicked
    const deleteButton = () => {
        // action works only if there is an input
        if (state.input.length > 0) {
            // slice the previous state, remove the last input and make a new state
            var newInput = state.input.slice(0, -1);
            
            dispatch({type: 'DELETE_INPUT', payload: {input:newInput, eval:false }})
        }
        
    }

    useEffect(() => {
        const numbers = document.getElementsByClassName('numbers')
        const operators = document.getElementsByClassName('operator')
        
        // click event for operators
        for (let j = 0; j < operators.length; j ++) {
            var operator = operators[j]
            operator.addEventListener("click", ClickOperators)
        };
        // click event for numbers
        for (let i = 0; i < numbers.length; i ++) {
            var number = numbers[i]
            number.addEventListener("click", ClickNumbers)
        };
        
        return () => {
            window.removeEventListener("click", ClickNumbers)
            window.removeEventListener("click", ClickOperators)

        };
    },[])
    
    

    return (
        <div className='keyboard'>
            <div className='top-keys'>
                <i  className="fas fa-history fa-2x icon-history"></i>
                <i onClick = {deleteButton} className="fas fa-backspace fa-2x icon-delete"></i>
            </div>
            <div className='lower-keys'>
                <button className='button margin-3rd clear' name='C'> C</button>
                <button className='button margin-3rd green ' name='()'> ()</button>
                <button className='button margin-3rd green' name='%'> %</button>
                <button className='button green operator' name='/'> /</button>
                <button className='button margin-3rd numbers' name='7'> 7</button>
                <button className='button margin-3rd numbers' name='8'> 8</button>
                <button className='button margin-3rd numbers' name='9'> 9</button>
                <button className='button green operator' name='*'> *</button>
                <button className='button margin-3rd numbers' name='4'> 4</button>
                <button className='button margin-3rd numbers' name='5'> 5</button>
                <button className='button margin-3rd numbers' name='6'> 6</button>
                <button className='button green operator' name='-'> -</button>
                <button className='button margin-3rd numbers' name='1'> 1</button>
                <button className='button margin-3rd numbers' name='2'> 2</button>
                <button className='button margin-3rd numbers' name='3'> 3</button>
                <button className='button green operator' name='+'> +</button>
                <button className='button margin-3rd' name='+/-'> +/-</button>
                <button className='button margin-3rd numbers' name='0'> 0</button>
                <button className='button margin-3rd' name='.'> .</button>
                <button className='button equal' name='='> =</button>

                
            
            </div>
        </div>
    )

}