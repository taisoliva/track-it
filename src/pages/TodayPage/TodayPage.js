import { Container, Header, ImageUser, Footer, ContainerRectangle, ContainerCircle, Circle } from "../styledCommon"
import LogoTrackit from "../../assets/TrackIt.png"
import { useContext, useEffect, useState } from "react"
import { URL_TODAY } from "../Urls"
import axios from "axios"
import { Link } from "react-router-dom"
import UserData from "../../context/UserData"
import { ContainerToday, ContentFixed, Center, ContainerTodayHabit } from "./styled"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { Grid } from "react-loader-spinner"
import HabitAPP from "../../components/HabitAPP"
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

export default function TodayPage() {

    const { imageUser } = useContext(UserData);
    const { token } = useContext(UserData);
    const {porcentagem} = useContext(UserData);
    const {setPorcentagem} = useContext(UserData)
    
    let isHabit = false

    dayjs.locale("pt-br")
    const currentDate = dayjs();
    const weekDay = currentDate.format('dddd').charAt(0).toUpperCase() + currentDate.format('dddd').slice(1)
    const formattedDate = `${weekDay}, ${currentDate.format('DD/MM')}`

    const [dataToday, setDataToday] = useState("")
    const [tamanho, setTamanho] = useState(0)
    const [array, setArray] = useState([])
    const [contador, setContador] = useState(0);


    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get(URL_TODAY, config)
            .then(res => { console.log(res.data); setDataToday(res.data); setTamanho(res.data.length) })
            .catch(err => console.log(err))
    }, [])

    

    if (dataToday === "") {
        return <Center> <Grid height="80" width="80" color="#52B6FF" /> </Center>
    }

    console.log("Contador é:", contador)

    return (

        <Container>
            <Header data-test="header">
                <img src={LogoTrackit} />
                <ImageUser imageUser={imageUser} />
            </Header>

            <ContainerToday>
                <ContentFixed contador={contador}>
                    <p data-test="today"> {formattedDate} </p>
                    <div data-test="today-counter"> {dataToday.filter(item => { if (item.done === true) { if (!array.includes(item.id)) { array.push(item.id)}; isHabit = true } })}
                        {isHabit ? `${((contador / tamanho) * 100).toFixed(2)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</div>
                </ContentFixed>

                <ContainerTodayHabit>
                    {dataToday.map(item => <HabitAPP key={item.id}
                        item={item}
                        tamanho={tamanho}
                        array={array}
                        setArray={setArray}
                        contador={contador}
                        setDataToday={setDataToday}
                        setContador={setContador} />)}
                </ContainerTodayHabit>
            </ContainerToday>



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
                            styles={{path: {stroke: "#FFFFFF"}, trail:{stroke:"#52B6FF"}, text:{fill:"#FFFFFF"}}}
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