import { Container, Header, ImageUser, Footer, ContainerRectangle, ContainerCircle } from "../styledCommon"
import LogoTrackit from "../../assets/TrackIt.png"
import { useContext, useEffect } from "react"
import axios from "axios"
import { URL_HISTORIC } from "../Urls"
import { ContainerCalendar, Content, StyledCalendar } from "./styled"
import { Link } from "react-router-dom"
import UserData from "../../context/AuthContext"
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import 'react-calendar/dist/Calendar.css';
import dayjs from "dayjs"
import { useState } from "react"


export default function HistoricPage() {

    const { token } = useContext(UserData)
    const { imageUser } = useContext(UserData)
    const {porcentagem} = useContext(UserData);
    const [data, setData] = useState([])

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get(URL_HISTORIC, config)
            .then(res => setData(res.data))
            .catch(err => alert(err.response.data.message))
    }, [token])


    function completedAllHabits(habits){
        const doneHabits = habits.filter(h => h.done)
        return doneHabits.length === habits.length 
    }

    const sucessDays = data.filter(day => completedAllHabits(day.habits))
    const failureDays = data.filter(day => !completedAllHabits(day.habits))

    function getClassName({date}) {
        const formattedDate = dayjs(date).format("DD/MM/YYYY")
        
        if(failureDays.find(f => f.day === formattedDate)){
            return "failure"
        } 

        if(sucessDays.find(s => s.day === formattedDate)){
            return "success"
        } 
    }

    return (

        <Container>
            <Content>
                <ContainerCalendar>
                    <StyledCalendar 
                        tileClassName={getClassName}
                        locale="pt-BR"
                        formatDay={(_, date) => dayjs(date).format('DD') }
                    />
                </ContainerCalendar>
            </Content>

        </Container>
    )
}