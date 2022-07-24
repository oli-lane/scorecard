import styled from "styled-components";

export const Scoregrid = styled.div`
    display: grid;
    grid-template-columns: 30px 200px auto 100px;
    grid-gap: 2px;
    background-color: #2196F3
`;

export const Headercell = styled.div`
    background = #ccc;
    color: #282828;
    padding: 4px;
    text-align: center;
`;

export const Inputcell = styled.input`
    padding: 0 4px:
    :not(:focus) {
        text-align: right;
    }
    : focus {
        border: 1px solid #1581ba;
        background-color: #e7f2f8
    }
`;