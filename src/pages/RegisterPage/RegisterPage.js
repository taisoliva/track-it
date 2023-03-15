import { RegisterContainer, Register } from "./styled"
import { Input, Button } from "../styledCommon"
import Logo from "../../assets/logo-completa.svg"


export default function RegisterPage() {
    return (
        <RegisterContainer>

            <Register>
                <img src={Logo} alt={Logo} />
                <Input placeholder="email" />
                <Input placeholder="senha" />
                <Input placeholder="nome" />
                <Input placeholder="foto" />
                <Button> cadastrar </Button>
                <a> Já tem uma conta? Faça login!</a>
            </Register>

        </RegisterContainer>
    )
}