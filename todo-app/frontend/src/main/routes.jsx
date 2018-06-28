import React, { Component } from 'react'
//import { Redirect } from 'react-router'
import { Route, HashRouter, Redirect } from 'react-router-dom'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <HashRouter>
        <div>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Route path='*' render={() => (<Redirect to="/todos" />)} />
        </div>
    </HashRouter>
)