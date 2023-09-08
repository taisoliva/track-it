import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useProgress from "../../hooks/useProgress";
import axios from "axios";
import { URL_HABITS, URL_TODAY } from "../Urls";
import { Center } from "../TodayPage/styled";
import { Grid } from "react-loader-spinner";
import { Container, RegisterContent, StyledButton, Title } from "./styled";
import CreateHabitForm from "./CreateHabitForm";
import HabitsList from "./HabitsList";

export default function Habit() {

    const { auth } = useAuth()
    const { updateProgress } = useProgress()
    const [habits, setHabits] = useState(null);
    const [isCreateHabitFormOpen, setIsCreatingHabitFormOpen] = useState(false);

    function loadHabits() {
        const config = {
            headers: { Authorization: `Bearer ${auth.token}` }
        }
        axios.get(URL_HABITS, config)
            .then(res => { setHabits(res.data) })
            .catch(err => alert(err.response.data.message))
    }

    function loadTodayHabits() {
        const config = {
            headers: { Authorization: `Bearer ${auth.token}` }
        }

        axios.get(URL_TODAY, config)
            .then(res => {
                const doneHabits = res.data.filter(habit => habit.done)
                updateProgress(doneHabits.length, res.data.length)

            })
            .catch(err => alert(err.response.data.message))
    }

    function handleDeleteHabit(id) {
        if (window.confirm("Deseja realmente excluir o Hábito?")) {
            const config = { headers: { Authorization: `Bearer ${auth.token}` } }

            axios.delete(`${URL_HABITS}/${id}`, config)
                .then(res => {
                    loadHabits()
                    loadTodayHabits()
                })
                .catch(err => alert(err.response.data.message))
        }
    }

    useEffect(loadHabits, [])

    if (habits === null) {
        return <Center> <Grid height="80" width="80" color="#52B6FF" /> </Center>
    }

    return (
        <Container>
            <RegisterContent>
                <Title> Meus Hábitos </Title>
                <StyledButton variant="outlined" onClick={() => setIsCreatingHabitFormOpen(true)}>
                    +
                </StyledButton>
            </RegisterContent>
            <CreateHabitForm
                isOpen={isCreateHabitFormOpen}
                closeForm={() => setIsCreatingHabitFormOpen(false)}
                loadHabits={loadHabits}
            />
            <HabitsList habits={habits} handleDeleteHabit={handleDeleteHabit} />
        </Container>
    )
}