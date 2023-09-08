import { Container } from "../styledCommon"
import { useEffect, useState } from "react"
import { URL_TODAY } from "../Urls"
import axios from "axios"
import { Center, Content } from "./styled"
import { Grid } from "react-loader-spinner"
import "react-circular-progressbar/dist/styles.css"
import useAuth from "../../hooks/useAuth"
import useProgress from "../../hooks/useProgress"
import Date from "./Date"
import Subtitle from "./Subtitle"
import Habit from "./Habit"

export default function TodayPage() {

    const { auth } = useAuth()
    const { updateProgress } = useProgress()

    const [dataToday, setDataToday] = useState("")
    const [doneHabitsQuantity, setDoneHabitsQuantity] = useState(0);

    function loadTodayHabits() {
        const config = {
            headers: { Authorization: `Bearer ${auth.token}` }
        }

        axios.get(URL_TODAY, config)
            .then(res => {
                const apiHabits = res.data
                setDataToday(res.data)
                const doneHabits = apiHabits.filter(habit => habit.done)
                updateProgress(doneHabits.length, apiHabits.length)
                setDoneHabitsQuantity(doneHabits.length)

            })
            .catch(err => alert(err.response.data.message))
    }
    useEffect(loadTodayHabits, [auth.token, updateProgress])

    if (dataToday === "") {
        return <Center> <Grid height="80" width="80" color="#52B6FF" /> </Center>
    }

    return (

        <Container>
            <Content>
                <Date />
                <Subtitle doneHabitsQuantity={doneHabitsQuantity} />
                {dataToday.map(item => <Habit key={item.id}
                    item={item}
                    loadTodayHabits = {loadTodayHabits} />)}
            </Content>
        </Container>
    )
}