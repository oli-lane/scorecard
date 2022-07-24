import React, { useCallback, useState, Fragment } from "react";
import { Scoregrid } from "./styles";
import Cell from "./Cell.js";

const Scoretable = () => {
    return (
        <Scoregrid>
            {Array(4)
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