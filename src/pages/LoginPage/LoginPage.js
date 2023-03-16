import { HomePageContainer, HomePage } from "./styled"
import { Input, Button } from "../styledCommon"
import Logo from "../../assets/logo-completa.svg"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"
import axios from "axios"
import {URL_LOGIN} from "../Urls"

export default function Login({setToken}) {

    const [disabledButton, setDisabledButton] = useState(false)
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    function SignUp(event) {
        event.preventDefault()
        setDisabledButton(true)

        const body = {...form}
        axios.post(URL_LOGIN, body)
        .then(res => {console.log(res); setToken(res.data.token) ;navigate("/hoje")})
        .catch(err => {alert(err.response.data.message); setDisabledButton(false)})


    }

    function handleForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (

        <HomePageContainer>

            <form onSubmit={SignUp}>
                <HomePage>
                    <img src={Logo} alt={Logo}></img>
                    <Input data-test="email-input" 
                        type="email"
                        placeholder="email"
                        name={"email"}
                        value={form.email}
                        onChange={handleForm}
                        disabled={disabledButton} />


                    <Input 
                        data-test="password-input"
                        type="password"
                        placeholder="senha"
                        name={"password"}
                        value={form.senha}
                        onChange={handleForm}
                        disabled={disabledButton} />

                    <Button data-test="login-btn" type="submit" disabled={disabledButton}>
                        {disabledButton ? <ThreeDots color="#FFFFFF" height={80} width={80} timeout={3000} // 3 secs 
                        /> : "Entrar"
                        }
                    </Button>
                    <Link data-test="signup-link" to={"/cadastro"}> Não tem uma conta? Cadastre-se</Link>

                </HomePage>
            </form>

        </HomePageContainer>

    )
}