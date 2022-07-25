import React, {useCallback, useState, memo, useMemo, Component } from "react";
import { Inputcell, Headercell } from "./styles";

const Cell = ({rowIndex, columnIndex }) => {
    if (rowIndex == 0 && columnIndex == 0) {
        return <Headercell>Hole: </Headercell>
    }
    if (rowIndex == 0 && columnIndex == 19) {
        return <Headercell>Total: </Headercell>
    }
    
    if (rowIndex == 0) {
        return <Headercell>{columnIndex}</Headercell>
    }
    if (columnIndex == 0) {
        return <Headercell>Player {rowIndex}</Headercell>
    }
    if (columnIndex == 19) {
        return <Headercell>-</Headercell>
    }
    return (
        <Inputcell/>
    );
}

export default memo(Cell);