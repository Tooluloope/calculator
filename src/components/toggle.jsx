import React, { useContext } from 'react'
import './toggle.css'
import {ThemeContext} from './context/theme.context'

export const Toggle = () => {
    const [state, dispatch] =  useContext(ThemeContext)
    console.log(state)
    return (
        <div>
            <label className="switch">
                <input onChange = { () => dispatch({type:'CHANGE_MODE'})}  type="checkbox" />>
                <span className="slider round"></span>
            </label>
        </div>
    )

}