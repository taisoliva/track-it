import { RegisterContainer, Register } from "./styled"
import { InputForm, ButtonForm } from "../styledCommon"
import Logo from "../../assets/logo-completa.svg"
import { Link, useNavigate } from "react-router-dom"
import {useState } from "react"
import axios from "axios"
import { URL_CADASTRO } from "../Urls"
import { ThreeDots } from "react-loader-spinner"



export default function RegisterPage() {

    const [form, setForm] = useState({ email: "", password: "", name: "", image: "" })
    const navigate = useNavigate()
    const [disabledButton, setDisabledButton] = useState(false)

    function RegisterUser(event) {
        event.preventDefault()
        setDisabledButton(true)
        const body = { ...form }

        const promisse = axios.post(URL_CADASTRO, body)
        promisse.then(resposta => navigate("/"))
        promisse.catch(err => { alert(err.response.data.message); setDisabledButton(false) })

    }

    return (


        <RegisterContainer>
            <form onSubmit={RegisterUser}>
                <Register>
                    <img src={Logo} alt={Logo} />

                    <InputForm data-test="email-input"
                        label = "Email" 
                        type="email"
                        placeholder="email"
                        name={"email"}
                        value={form.email}
                        disabled={disabledButton}
                        onChange={e => setForm({ ...form, [e.target.name]: e.target.value })} />

                    <InputForm data-test="password-input"
                        label="Senha"
                        type="password"
                        placeholder="senha"
                        name={"password"}
                        disabled={disabledButton}
                        value={form.password}
                        onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}

                    />
                    <InputForm data-test="user-name-input"
                        label="Nome"
                        type="text"
                        placeholder="nome"
                        name={"name"}
                        disabled={disabledButton}
                        value={form.name}
                        onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}

                    />
                    <InputForm data-test="user-image-input"
                        label="Foto"
                        type="text"
                        placeholder="foto"
                        name={"image"}
                        disabled={disabledButton}
                        value={form.image}
                        onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                    />
                    <ButtonForm data-test="signup-btn" disabled={disabledButton} type="submit">
                        {disabledButton ? <ThreeDots color="#FFFFFF" height={30} width={80} timeout={3000} // 3 secs 
                        /> : "Cadastrar"
                        }

                    </ButtonForm>
                    <Link data-test="login-link" to={"/"}> Já tem uma conta? Faça login!</Link>
                </Register>
            </form>

        </RegisterContainer>
    )
}