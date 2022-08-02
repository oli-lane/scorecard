import React, { useCallback, useState, Fragment } from "react";
import { Scoregrid } from "./styles";
import Cell from "./Cell.js";

const Scoretable = () => {
    const [entries, setEntries] = useState({});

    const setCellValue = useCallback(
        ({row, column, value}) => {
            const tempEntries = { ...entries};
            tempEntries[`${column}${row}`] = value;
            setEntries(tempEntries);
        },
        [entries, setEntries]
    );

    const computeCell = ({row}) => {
            let total = 0;
            const holes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
            holes.forEach(colIndex => {
                total += entries[`${colIndex}${row}`];
            });
            return total;
        }
    ;
    return (
        <Scoregrid>
            {Array(5)
                .fill()
                .map((m, i) => {
                    return (
                        <Fragment key={i}>
                            {Array(20)
                                .fill()
                                .map((n,j) => {
                                    return(
                                        <Cell 
                                            rowIndex={i}
                                            columnIndex={j}
                                            setCellValue={setCellValue}
                                            currentValue={entries[`${j}${i}`]}
                                            computeCell={computeCell}
                                        />
                                    );
                                })
                            }
                        </Fragment>
                    );
                })
            }
        </Scoregrid>
    )
};

export default Scoretable;