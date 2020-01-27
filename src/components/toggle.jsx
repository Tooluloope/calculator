import React, { useContext } from 'react'
import './toggle.css'
import {ThemeContext} from './context/theme.context'

export const Toggle = () => {
    const [state, dispatch] =  useContext(ThemeContext)
    console.log(state)
    return (
        
        <div className='toggle'>
            <span   className={`${state ? "grey" : "yellow" } icon`}>☀︎</span>
             
            <span >
                <input checked={state} onChange = { () => dispatch({type:'CHANGE_MODE'})} className="tgl tgl-light" id="cb1" type="checkbox"/>
                <label className="tgl-btn" htmlFor="cb1"></label>
            </span>
             
             
            <span className={`${state ? "slateblue" : "grey" } icon`}>☾</span>
        </div>
    )

}