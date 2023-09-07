import { Container, Header, ImageUser, Footer, ContainerRectangle, ContainerCircle } from "../styledCommon"
import LogoTrackit from "../../assets/TrackIt.png"
import { useCallback, useContext, useEffect, useState } from "react"
import { URL_HABITS } from "../Urls"
import axios from "axios"
import {
    Content, ContentFixed, ContainerIonIcon,
    Text, NewHabit, Days, Week, ButtonSave, ButtonCancel, ContainerHabit
} from "./styled"
import { Link } from "react-router-dom"
import { Input } from "../styledCommon"
import Day from "../../components/Day"
import { ThreeDots } from "react-loader-spinner"
import Habit from "../../components/Habit"
import UserData from "../../context/AuthContext"
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

export default function HabbitsPage() {

    const [dataHabit, setDataHabit] = useState("")
    const [disabledButton, setDisabledButton] = useState(false)
    const [form, setForm] = useState({ name: "", days: "" })
    const [ativeAdd, setAtiveAdd] = useState("none")
    const [selectedDays, setSelectedDays] = useState([]);
    const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

    const { token } = useContext(UserData)
    const { imageUser } = useContext(UserData)
    const { porcentagem } = useContext(UserData);


    const ReloadDataHabits = useCallback(() => {
        console.log("Aconteceu alguma coisa")
    }, [])

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get(URL_HABITS, config)
            .then(res => { console.log(res); setDataHabit(res.data) })
            .catch(err => console.log(err))

    }, [])



    function addHabit() {
        setAtiveAdd("flex")
    }

    function cancel() {
        setAtiveAdd("none")
        setDisabledButton(false)
    }

    function handleForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function handleDaySelect(day) {
        let array = [...selectedDays]
        if (array.includes(day)) {
            array = array.filter(d => d !== day);
            setSelectedDays(array)
        } else {
            array.push(day)
            setSelectedDays(array)
        }

        setForm({ ...form, days: array })
    }

    function Save(event) {
        event.preventDefault()

        setDisabledButton(true)
        const body = { ...form }

        console.log(body)

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.post(URL_HABITS, body, config)
            .then(res => {
                console.log(res)
                setDisabledButton(false)
                setSelectedDays([])
                setAtiveAdd("none")
                setForm({ name: "", days: "" })
                axios.get(URL_HABITS, config)
                    .then(res => { console.log(res); setDataHabit(res.data) })
                    .catch(err => console.log(err))

            })
            .catch(err => { alert(err.response.data.message); setDisabledButton(false) })
    }

    function deleteHabit(id) {
        if (window.confirm("Deseja realmente excluir o Hábito?")) {
            const config = { headers: { Authorization: `Bearer ${token}` } }

            axios.delete(`${URL_HABITS}/${id}`, config)
                .then(res => {
                    axios.get(URL_HABITS, config)
                        .then(res => { console.log(res); setDataHabit(res.data) })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err.response.data.message))
        }
    }

    return (

        <Container>
            <Header data-test="header">
                <img src={LogoTrackit} />
                <ImageUser imageUser={imageUser} />
            </Header>

            <Content>
                <ContentFixed>
                    <p> Meus Hábitos </p>
                    <ContainerIonIcon data-test="habit-create-btn" onClick={addHabit}>
                        <ion-icon name="add-outline"></ion-icon>
                    </ContainerIonIcon>
                </ContentFixed>

                {dataHabit.length === 0 &&
                    <Text ativeAdd={ativeAdd}> Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!
                    </Text>
                }

                <ContainerHabit ativeAdd={ativeAdd}>
                    {dataHabit.length !== 0 && dataHabit.map((h) => <Habit key={h.id}
                        id={h.id}
                        name={h.name}
                        days={h.days}
                        week={week}
                        deleteHabit={deleteHabit} />)}
                </ContainerHabit>


                <NewHabit data-test="habit-create-container" ativeAdd={ativeAdd} onSubmit={Save}>
                    <form>
                        <Input data-test="habit-name-input"
                            type="text"
                            placeholder="nome do hábito"
                            name={"name"}
                            value={form.name}
                            disabled={disabledButton}
                            onChange={handleForm} />

                        <Week>
                            {week.map((d, indice) => <Day key={indice}
                                handleDaySelect={handleDaySelect}
                                d={d}
                                indice={indice}
                                disabledButton={disabledButton}
                                selectedDays={selectedDays} />)}
                        </Week>

                        <ButtonCancel data-test="habit-create-cancel-btn" type="button" disabled={disabledButton} onClick={cancel}> Cancelar </ButtonCancel>
                        <ButtonSave data-test="habit-create-save-btn" type="submit" disabled={disabledButton} > {disabledButton ? <ThreeDots color="#FFFFFF" height={80} width={80} timeout={3000} // 3 secs 
                        /> : "Salvar"
                        } </ButtonSave>

                        <Text> Você não tem nenhum hábito cadastrado ainda.
                            Adicione um hábito para começar a trackear!
                        </Text>
                    </form>
                </NewHabit>
            </Content>

            <Footer data-test="menu">

                <Link data-test="habit-link" to={"/habitos"}>
                    <ContainerRectangle>
                        Hábitos
                    </ContainerRectangle>
                </Link>

                <Link data-test="today-link" to={"/hoje"}>
                    <ContainerCircle>
                        <CircularProgressbar
                            value={porcentagem}
                            text={"Hoje"}
                            styles={{ path: { stroke: "#FFFFFF" }, trail: { stroke: "#52B6FF" }, text: { fill: "#FFFFFF" } }}
                        />

                    </ContainerCircle>
                </Link>


                <Link data-test="history-link" to={"/historico"}>
                    <ContainerRectangle>
                        Histórico
                    </ContainerRectangle>
                </Link>
            </Footer>


        </Container>
    )
}