import styled from "styled-components"

export default function Day({handleDaySelect, d, selectedDays, disabledButton, indice}) {
    return (
        <Days data-test="habit-day"
            type="button" 
            onClick={() => handleDaySelect(indice)}
            color={selectedDays.includes(indice)}
            disabled={disabledButton} >
            {d[0]}
        </Days>
    )
}

export const Days = styled.button`

    width: 30px;
    height: 30px;

    background-color: ${props => props.color ? "#CFCFCF" : "#FFFFFF"};

    border: none;

    margin-right: 5px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: ${props => props.color ? "#FFFFFF" : "#DBDBDB"};;
`