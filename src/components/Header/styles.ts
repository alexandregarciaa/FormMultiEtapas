import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 0;
    border-bottom: 1px solid #16195C;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 28px;
        margin-left: 30px;
    }
    p {
        font-size: 14px;
        color: #b8b8d4;
        margin-left: 30px;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 20px;
        }
        P {
            font-size: 11px;
        }
    }

`;