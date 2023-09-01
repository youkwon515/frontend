import styled from "styled-components";

export const HeaderDiv = styled.div`
    width : 100%;
    height : 80px;
    background : var(--background-color);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const ContentsDiv = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    width : 1000px;
    height : 100%;
    padding : 10px 0 10px 0;
    margin : 0 auto;
`;

export const LogoDiv = styled.div`
    display : flex;
    flex-direction: column;
    width : 200px;
    height : 100%;
    color : #00E0A5;
    font-family: 'ADLaM Display', cursive;
    font-weight: 700;

    > h2 {
        display : flex;
        justify-content: flex-start;
        align-items: center;
        width : 100%;
        height : 50%;
        font-size : 23px;
    }

    > p {
        display : flex;
        justify-content: flex-start;
        align-items: center;
        width : 100%;
        height : 50%;
        font-size : 23px;
    }
`;
