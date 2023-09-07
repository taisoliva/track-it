import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Header(){
    
    const { auth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
}