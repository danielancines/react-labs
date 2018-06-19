import React from 'react'
import ReactDOM from 'react-dom'
import { First, Second } from './component'

ReactDOM.render(
    <div>
        <First value='First 1'/>
        <Second value='Second 2'/>
    </div>
, document.getElementById('app'))