import dayjs from 'dayjs';
import styled from 'styled-components';
import "dayjs/locale/pt-br"

export default function Date() {
    dayjs.locale("pt-br")
    const currentDate = dayjs();
    const weekDay = currentDate.format('dddd').charAt(0).toUpperCase() + currentDate.format('dddd').slice(1)
    const formattedDate = `${weekDay}, ${currentDate.format('DD/MM')}`

    return (
        <Paragraph data-test="today"> {formattedDate} </Paragraph>
    )
}

const Paragraph = styled.p`
    font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
        
        color: #126BA5;
`


