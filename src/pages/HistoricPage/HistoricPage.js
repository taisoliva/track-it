import {Container, Header, ImageUser, Footer,ContainerRectangle, ContainerCircle } from "../styledCommon"
import LogoTrackit from "../../assets/TrackIt.png"
import { useContext, useEffect } from "react"
import axios from "axios"
import { URL_HISTORIC } from "../Urls"
import {Content} from "./styled"
import { Link } from "react-router-dom"
import UserData from "../../context/UserData"



export default function HistoricPage (){

    const {token} = useContext(UserData)
    const {imageUser} = useContext(UserData)

    useEffect(()=> {
      

        const config = {
            headers : { Authorization : `Bearer ${token}`}
        }

        axios.get(URL_HISTORIC, config)
        .then(res=>console.log(res))
        .catch(err => console.log(err.response.data.message))
    },[])

    return (

        <Container>
            <Header data-test="header">
                <img src={LogoTrackit} />
                <ImageUser imageUser={imageUser}/>
            </Header>

            <Content>
                <p> Em breve você poderá ver o histórico dos seus hábitos aqui! </p>
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