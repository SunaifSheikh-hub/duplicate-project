import styled from "styled-components";

export const Body = styled.div`
    padding: 15px;
    border-radius: 15px;
    background-color: rgb(var(--white-rgb));
    display: flex;
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    margin-bottom: 10px;
    
    .content p {
        color: black;
    }

    .heading {
        color: gray !important;
        font-size: small;
        margin-bottom: 5px;
    }
    
    .info_card {
        background-color: rgb(var(--primary-rgb));
        border-radius: 15px;
        padding: 10px;
        color: rgb(var(--text-rgb)) !important;
        text-align: center;
        margin-right: 10px;

        .info_card_heading {
            font-size: small;
        }

        .info_card_text {
            font-size: larger;
            font-weight: bolder;
        }
    }
`;