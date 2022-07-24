import React, { useCallback, useState, Fragment } from "react";
import { Scoregrid } from "./styles";

const Scoretable = () => {
    return (
        <Scoregrid>
            {Array(4)
                .fill()
                .map((m, i) => {
                    return (
                        <Fragment key={i}>
                            {Array(19)
                                .fill()
                                .map((n,j) => {
                                    return(
                                        <Cell 
                                            rowIndex={i}
                                            columnIndex={j}
                                            setCellValue={0}
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