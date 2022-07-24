import React, {useCallback, useState, memo, useMemo, Component } from "react";
import { Inputcell, Headercell } from "./styles";

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

const Cell = ({rowIndex, columnIndex }) => {
    if (rowIndex == 0) {
        return <Headercell>{columnIndex}</Headercell>
    }
    if (columnIndex == 0) {
        return <Headercell>Player</Headercell>
    }
    return (
        <Headercell>0</Headercell>
    );
}

export default memo(Cell);