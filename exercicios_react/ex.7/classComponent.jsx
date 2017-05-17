import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render(){
        return (
            <h1>  Olá Class Component: {this.props.value} </h1>
        )
    }
}