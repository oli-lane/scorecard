import React, {useCallback, useState, memo, useMemo, Component } from "react";
import { Inputcell, Headercell } from "./styles";

const Cell = ({rowIndex,columnIndex,setCellValue,currentValue,computeCell }) => {
    const [edit, setEdit] = useState(false);

    const value = useMemo(() => {
        return computeCell({row: rowIndex});
    }, [edit, computeCell, currentvalue, rowIndex]
    );
    
    const handleEdit = useCallback(
        change => {setCellValue({
            row: rowIndex,
            column: columnIndex,
            value: change.target.value
        });
    }, 
        [rowIndex, columnName, setCellValue]
    );
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
        return <Headercell>value={value}</Headercell>
    }
    return (
        <Inputcell>
            onChange={handleEdit}
            type="text"
        </Inputcell>
    );
}

export default memo(Cell);