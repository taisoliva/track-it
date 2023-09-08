import styled from "styled-components"
import { Days } from "../styled"
import weekDays from "../../../utils/weekDays"
import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

export default function Habit({ name, id, days, handleDeleteHabit }) {
    return (
        <ContainerItem data-test="habit-container">
            <Title>
                <p data-test="habit-name"> {name} </p>
                {/* <ion-icon  data-test="habit-delete-btn" onClick={() => handleDeleteHabit(id)}  name="trash-outline"></ion-icon> */}
                <IconButton aria-label="delete" size="small" onClick={() => handleDeleteHabit(id)}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Title>

            <Days>
                {weekDays.map((weekDay) => <Day data-test="habit-day" key={weekDay.id} color={days.includes(weekDay.id)}> {weekDay.day} </Day>)}
            </Days>

        </ContainerItem>)
}

const ContainerItem = styled.div`

    width: 90vw;
    height: 95px;

    background-color:#FFFFFF;

    margin-bottom:10px ;
    padding-left: 15px ;

    border-radius:5px;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        /* identical to box height */
        color: #666666;
    }
`
const Title = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    padding-right: 10px;

`

const Day = styled.button`

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