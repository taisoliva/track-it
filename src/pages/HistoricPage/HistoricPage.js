import { Container} from "../styledCommon"
import { useEffect } from "react"
import axios from "axios"
import { URL_HISTORIC } from "../Urls"
import { ContainerCalendar, Content, StyledCalendar } from "./styled"
import "react-circular-progressbar/dist/styles.css"
import 'react-calendar/dist/Calendar.css';
import dayjs from "dayjs"
import { useState } from "react"
import useAuth from "../../hooks/useAuth"


export default function HistoricPage() {

    const { auth } = useAuth()
    const [data, setData] = useState([])

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${auth.token}` }
        }

        axios.get(URL_HISTORIC, config)
            .then(res => setData(res.data))
            .catch(err => alert(err.response.data.message))
    }, [auth.token])


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