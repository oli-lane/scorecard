import styled from "styled-components";

export const Scoregrid = styled.div`
    display: grid;
    grid-template-columns: 47px repeat(
        19,
        50px
      );
`;

export const Headercell = styled.div`
    background-color: palegreen;
    color: black;
    padding: 1px;
    text-align: center;
`;

export const Inputcell = styled.input`
    padding: 0 4px:
    :not(:focus) {
        text-align: center;
    }
    : focus {
        border: 1px solid #000080;
        background-color: #e7f2f8
    }
`;