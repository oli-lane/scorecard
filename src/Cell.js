import React, {useCallback, useState, memo, useMemo} from "react";
import { Inputcell, Headercell } from "./styles";

const Cell = ({rowIndex,columnIndex,setCellValue,currentValue,computeCell }) => {
    const [edit, setEdit] = useState(false);
    
    const value = useMemo(() => {
        if (edit) {
            return currentValue || "";
        }
        return computeCell({row: rowIndex});
    }, [rowIndex, computeCell, edit, currentValue]
    );
    
    const handleEdit = useCallback(
        change => {setCellValue({
            row: rowIndex,
            column: columnIndex,
            value: change.target.value
        });
    }, 
        [rowIndex, columnIndex, setCellValue]
    );
    if (rowIndex === 0 && columnIndex === 0) {
        return <Headercell>Hole: </Headercell>
    }
    if (rowIndex === 0 && columnIndex === 19) {
        return <Headercell>Total: </Headercell>
    }
    
    if (rowIndex === 0) {
        return <Headercell>{columnIndex}</Headercell>
    }
    if (columnIndex === 0) {
        return <Headercell>Player {rowIndex}</Headercell>
    }
    if (columnIndex === 19) {
        return <Headercell>{value}</Headercell>
    }
    return (
        <Inputcell
            onBlur={() => setEdit(false)}
            onFocus={() => setEdit(true)}
            onChange={handleEdit}
            value={currentValue}
            type="text"
        />
    );
}

export default memo(Cell);