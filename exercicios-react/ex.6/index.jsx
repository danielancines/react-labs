import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Ancines' >
        <Member name='Daniel'/>
        <Member name='Silvana'/>
        <Member name='Cesar'/>
    </Family>
    , document.getElementById('app'))