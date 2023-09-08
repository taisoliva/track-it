import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { URL_HABITS} from "../../Urls";
import { Center } from "../styled";
import { Grid, Oval } from "react-loader-spinner";
import Vector from "../../../assets/Vector.png"
import { Container, DetailsContainer, Selected, Text } from "./styled";

export default function Habit({ item, loadTodayHabits }) {

    const { auth } = useAuth();
    const [loading, setLoading] = useState(false)

    function handleCheckHabit(item) {

        setLoading(true)

        if (!item.done) {
            const config = {
                headers: { Authorization: `Bearer ${auth.token}` }
            }

            axios.post(`${URL_HABITS}/${item.id}/check`, {}, config)
                .then(() => {
                    loadTodayHabits()
                    setLoading(false)
                })
                .catch(err => alert(err.response.data.message))

            return
        }

        const config = {
            headers: { Authorization: `Bearer ${auth.token}` }
        }

        axios.post(`${URL_HABITS}/${item.id}/uncheck`, {}, config)
            .then(() => {
                loadTodayHabits()
                setLoading(false)
            })
            .catch(err => alert(err.response.data.message))
    }

    if (item.length === 0) {
        return <Center> <Grid height="80" width="80" color="#52B6FF" /> </Center>
    }

    return (
        <Container data-test="today-habit-container">
            <DetailsContainer>
                <Text done={item.done} igual={item.currentSequence === item.highestSequence && item.currentSequence > 0} >
                    <h1 data-test="today-habit-name"> {item.name} </h1>
                    <p data-test="today-habit-sequence"> {"Sequência Atual:"} <span> {`${item.currentSequence} dias`}</span> </p>
                    <p data-test="today-habit-record"> {`Seu recorde:`} <span> {`${item.highestSequence} dias`} </span> </p>
                </Text>
            </DetailsContainer>
            <Selected data-test="today-habit-check-btn" onClick={() => handleCheckHabit(item)} done={item.done}>
                {!loading ? <img src={Vector} alt={Vector} /> : <Oval height="50" width="50" color="#52B6FF" />}
            </Selected>
        </Container>
    )


}