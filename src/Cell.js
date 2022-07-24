import React, {useCallback, useState, memo, useMemo, Component } from "react";

class Cell extends Component {
    constructor (props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        
    }

    render () {
        return () => {

            
        }

    }

}

export default memo(Cell);