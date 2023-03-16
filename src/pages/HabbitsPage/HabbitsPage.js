import { Container, Header, ImageUser, Footer, ContainerRectangle, ContainerCircle } from "../styledCommon"
import LogoTrackit from "../../assets/TrackIt.png"
import { useEffect, useState } from "react"
import { URL_HABITS } from "../Urls"
import axios from "axios"
import {
    Content, ContentFixed, ContainerIonIcon,
    Text, NewHabit, Days, Week, ButtonSave, ButtonCancel
} from "./styled"
import { Link } from "react-router-dom"
import { Input } from "../styledCommon"
import Day from "../../components/Day"
import { ThreeDots } from "react-loader-spinner"


export default function HabbitsPage({ token }) {

    const [dataHabit, setDataHabit] = useState("")
    const [disabledButton, setDisabledButton] = useState(false)
    const [form, setForm] = useState({ name: "", days: "" })
    const [ativeAdd, setAtiveAdd] = useState("none")
    const [selectedDays, setSelectedDays] = useState([]);
    const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

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

    function cancel (){
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

        setForm({...form, days: array})
    }

    

    function Save (event){
        event.preventDefault()
        
        setDisabledButton(true)
        const body = { ...form }
       
        console.log(body)

        const config ={
            headers : {Authorization : `Bearer ${token}`}
        }
        
        axios.post(URL_HABITS, body ,config)
        .then(res =>{console.log(res)
                     setDisabledButton(false)
                     setSelectedDays([])
                     setAtiveAdd("none")
                     setForm({ name: "", days: "" })
        } )
        .catch(err => {alert(err.response.data.message); setDisabledButton(false)})

    }

    return (

        <Container>
            <Header data-test="header">
                <img src={LogoTrackit} />
                <ImageUser />
            </Header>

            <Content>
                <ContentFixed>
                    <p> Meus Hábitos </p>
                    <ContainerIonIcon data-test="habit-create-btn" onClick={addHabit}>
                        <ion-icon name="add-outline"></ion-icon>
                    </ContainerIonIcon>
                </ContentFixed>

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
                            {week.map((d,indice) => <Day key={indice}
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
                        Hoje
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