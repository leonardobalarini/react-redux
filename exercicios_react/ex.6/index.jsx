import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Balarini">
        <Member name="Leonardo" />
        <Member name="Familia" />
        <Member name="Angela" />
    </Family>
, document.getElementById('app'));


