import styled from "styled-components";

export const Scoregrid = styled.div`
    display: grid;
    grid-template-colums: 32px repeat(
        ${20}, 90px
    );
`;

export const Headercell = styled.div`
    background = #ccc;
    color: #282828;
    padding: 1px;
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