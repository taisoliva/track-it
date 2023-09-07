import { HomePageContainer, HomePage } from "./styled"
import { InputForm, ButtonForm } from "../styledCommon"
import Logo from "../../assets/logo-completa.svg"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { useContext, useState } from "react"
import axios from "axios"
import {URL_LOGIN} from "../Urls"
import UserData from "../../context/AuthContext"

export default function Login() {

    const [disabledButton, setDisabledButton] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const {setImageUser} = useContext(UserData);
    const {setToken} = useContext(UserData);

    function SignUp(event) {
        event.preventDefault()
        setDisabledButton(true)

        const body = {email, password}

        axios.post(URL_LOGIN, body)
        .then(res => {setToken(res.data.token); setImageUser(res.data.image) ;navigate("/hoje")})
        .catch(err => {alert(err.response.data.message); setDisabledButton(false)})


    }

    return (

        <HomePageContainer>

            <form onSubmit={SignUp}>
                <HomePage>
                    <img src={Logo} alt={Logo}></img>
                    <InputForm data-test="email-input" 
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={disabledButton} />


                    <InputForm 
                        data-test="password-input"
                        label="Senha"
                        type="password"
                        placeholder="senha"
                        name={"password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        disabled={disabledButton} />

                    <ButtonForm data-test="login-btn" type="submit" disabled={disabledButton}>
                        { disabledButton ? <ThreeDots color="#FFFFFF" height={30} width={80} timeout={3000} // 3 secs 
                        /> : "Entrar"
                        }
                    </ButtonForm>
                    <Link data-test="signup-link" to={"/cadastro"}> Não tem uma conta? Cadastre-se</Link>

                </HomePage>
            </form>

        </HomePageContainer>

    )
}