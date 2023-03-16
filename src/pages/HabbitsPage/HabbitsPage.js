import { Container, Header, ImageUser, Footer, ContainerRectangle, ContainerCircle } from "../styledCommon"
import LogoTrackit from "../../assets/TrackIt.png"
import { useEffect, useState } from "react"
import { URL_HABITS } from "../Urls"
import axios from "axios"
import { Content, ContentFixed, ContainerIonIcon, Text } from "./styled"
import { Link } from "react-router-dom"

export default function HabbitsPage({ token }) {

    const [dataHabit, setDataHabit] = useState("")

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get(URL_HABITS, config)
            .then(res => { console.log(res); setDataHabit(res.data) })
            .catch(err => console.log(err))

    }, [])

    return (

        <Container>
            <Header data-test="header">
                <img src={LogoTrackit} />
                <ImageUser />
            </Header>

            <Content>
                <ContentFixed>
                    <p> Meus Hábitos </p>
                    <ContainerIonIcon>
                        <ion-icon name="add-outline"></ion-icon>
                    </ContainerIonIcon>
                </ContentFixed>

                {dataHabit.length === 0 && <Text> Você não tem nenhum hábito cadastrado ainda. 
                                                   Adicione um hábito para começar a trackear!  </Text>}
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