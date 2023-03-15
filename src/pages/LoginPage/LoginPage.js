import { HomePageContainer, HomePage } from "./styled"
import { Input,Button } from "../styledCommon"
import Logo from "../../assets/logo-completa.svg"
import {Link} from "react-router-dom"

export default function Login() {
    return (

        <HomePageContainer>
            <HomePage>
                <img src={Logo} alt={Logo}></img>

                <Input placeholder="email"></Input>
                <Input placeholder="senha"></Input>
                <Button> Entrar </Button>
                <Link to={"/cadastro"}> Não tem uma conta? Cadastre-se</Link>

            </HomePage>
        </HomePageContainer>

    )
}