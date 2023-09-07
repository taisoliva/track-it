import styled from "styled-components";
import Calendar from "react-calendar"

export const Content = styled.div`
    width: 100vw;
    height: 83vh;

    
    position: absolute;

    top:100px;
    
    padding-left: 20px;
    padding-right: 20px;


    display: flex;
    flex-wrap: wrap;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
`

export const ContainerCalendar = styled.div`

    height: 60vh;
    margin-bottom: 30px;
`


export const StyledCalendar = styled(Calendar)`
    width: 100%;
    height: 100%;
    margin-top: 12px;
    border: none;
    border-radius: 10px;
`