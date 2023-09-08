import { useState } from "react";
import useAuth from "../../../hooks/useAuth"
import { Container, Footer, Form, InputForm, StyledButtonCancelar, StyledButtonSalvar } from "./styled";
import { Days, StyledDay } from "../styled";
import weekDays from "../../../utils/weekDays";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { URL_HABITS } from "../../Urls"

export default function CreateHabitForm({ isOpen, closeForm, loadHabits }) {

    const { auth } = useAuth()
    const [name, setName] = useState('');
    const [days, setDays] = useState([]);
    const [disabledButton, setDisabledButton] = useState(false)

    function handleCreateHabit(event) {
        event.preventDefault()

        if (days.length === 0) {
            alert("Pelo menos um dia precisa ser selecionado");
            return;
        }

        setDisabledButton(true)

        const config = {
            headers: { Authorization: `Bearer ${auth.token}` }
        }

        axios.post(URL_HABITS, { name, days }, config)
            .then(res => {
                setDisabledButton(false)
                setName('');
                setDays([]);
                closeForm();
                loadHabits();
            })
            .catch(err => { alert(err.response.data.message); setDisabledButton(false) })
    }

    function handleSelectDay(id) {
        const isDaySelected = days.includes(id);

        if (isDaySelected) {
            const newDays = days.filter(day => day !== id);
            setDays(newDays);
            return;
        }

        setDays([...days, id]);
    }

    return (
        <Form onSubmit={handleCreateHabit} isOpen={isOpen}>
            <Container>
                <InputForm label="Nome do Hábito"
                    type="text"
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={disabledButton} />
            </Container>

            <Days disabled={disabledButton}>
                {weekDays.map((weekDay) => (
                    <Day
                        key={weekDay.id}
                        {...weekDay}
                        isSelected={days.includes(weekDay.id)}
                        handleSelectDay={handleSelectDay}
                    />
                ))}
            </Days>

            <Footer>
                <StyledButtonCancelar
                    type="button"
                    disabled={disabledButton}
                    onClick={closeForm}
                >
                    Cancelar
                </StyledButtonCancelar>
                <StyledButtonSalvar type="submit" disabled={disabledButton}>
                    {disabledButton ? <ThreeDots color="#FFFFFF" height={80} width={80} timeout={3000} // 3 secs 
                    /> : "Salvar"}
                </StyledButtonSalvar>
            </Footer>
        </Form>


    )
}

function Day({ day, id, isSelected, handleSelectDay }) {
    return (
        <StyledDay
            onClick={() => handleSelectDay(id)}
            isSelected={isSelected}
        >
            {day}
        </StyledDay>
    );
}