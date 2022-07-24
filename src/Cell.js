import React, {useCallback, useState, memo, useMemo, Component } from "react";
import { InputCell, HeaderCell } from "./styles";

/*
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
        // should change something using this.state.value
        event.preventDefault()
    }
    render () {
        return () => {   
        }
    }
}
*/

const Cell = ({rowIndex, columnIndex }) 



export default memo(Cell);