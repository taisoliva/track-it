import { Container, Header, ImageUser, Footer, ContainerRectangle, ContainerCircle } from "../styledCommon"
import LogoTrackit from "../../assets/TrackIt.png"
import { useEffect } from "react"
import { URL_TODAY } from "../Urls"
import axios from "axios"
import { Link } from "react-router-dom"


export default function TodayPage({ token }) {

    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get(URL_TODAY, config)
            .then(res => console.log(res))
            .catch(err => console.log(err))


    }, [])


    return (

        <Container>
            <Header data-test="header">
                <img src={LogoTrackit} />
                <ImageUser />
            </Header>

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