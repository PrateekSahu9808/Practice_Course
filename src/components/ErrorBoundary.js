import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(){
       super()
       this.state = { hasError: false } 
    }
    componentDidCatch(error){
       this.setState({ hasError: true })
    }
  render() {
 
        if(this.state.hasError){
            return <h1>An error occurred</h1>
        }
      return  this.props.children

  }
}
