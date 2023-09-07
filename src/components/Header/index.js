import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { pathsWithoutHeaderAndMenu } from "../../App";
import { Container, ImageUser } from "./style";
import logo from "../../assets/TrackIt.png"

export default function Header(){
    
    const { auth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    if(pathsWithoutHeaderAndMenu.includes(location.pathname)){
        return null
    } 

    return (
        <Container data-test="header">
                <img src={logo} alt="TrackIt" onClick={() => navigate("/hoje")} />
                <ImageUser imageUser={auth.image} /> 
        </Container>
    )
}