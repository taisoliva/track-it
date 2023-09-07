import axios from "axios"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import { Grid, Oval } from "react-loader-spinner"
import styled from "styled-components"
import Vector from "../assets/Vector.png"
import UserData from "../context/AuthContext"
import { Center } from "../pages/TodayPage/styled"
import { URL_HABITS, URL_TODAY } from "../pages/Urls"


export default function HabitAPP({ item, array, setArray, setDataToday, contador, setContador,tamanho }) {

    const [colorSelect, setColorSelect] = useState("#EBEBEB")
    const [loading, setLoading] = useState(false)

    console.log(item)
    console.log(array)

    const { token } = useContext(UserData)
    const {setPorcentagem} = useContext(UserData);

    useEffect(() => {

        const yesterday = dayjs().subtract(1,'day').format('DD/MM/YYYY')
        localStorage.setItem('yesterday', yesterday)

        if (array.includes(item.id)) {
            setColorSelect("#8FC549")
            console.log("Tamanho:", array.length)
            setContador(array.length)
            setPorcentagem(array.length/tamanho * 100)
        } 
    }, [])


    function done(id) {

        let arrayAux = [...array]
        setLoading(true)

        if (colorSelect === "#EBEBEB") {
            setArray(arrayAux)

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }

            axios.post(`${URL_HABITS}/${id}/check`, {}, config)
                .then(resposta => {
                    console.log(resposta);
                    axios.get(URL_TODAY, config)
                        .then(res => { console.log(res.data); setDataToday(res.data); setColorSelect("#8FC549"); setContador(++contador); setLoading(false); setPorcentagem((contador/tamanho)*100) })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err.response.data.message))
        } else {


            arrayAux = arrayAux.filter(i => i !== id)
            setArray(arrayAux)


            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }

            axios.post(`${URL_HABITS}/${id}/uncheck`, {}, config)
                .then(resposta => {
                    console.log(resposta); axios.get(URL_TODAY, config)
                        .then(res => { console.log(res.data); setDataToday(res.data); setColorSelect("#EBEBEB"); setContador(--contador); setLoading(false); setPorcentagem((contador/tamanho)*100) })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err.response.data.message))
        }
    }

    if (item.length === 0) {
        return <Center> <Grid height="80" width="80" color="#52B6FF" /> </Center>
    }

    return (
        <Container data-test="today-habit-container">
            <Text colorSelect={colorSelect} igual={item.currentSequence === item.highestSequence && item.currentSequence > 0} >
                <h1 data-test="today-habit-name"> {item.name} </h1>
                <p data-test="today-habit-sequence"> {"Sequência Atual:"} <span> {`${item.currentSequence} dias`}</span> </p>
                <p data-test="today-habit-record"> {`Seu recorde:`} <span> {`${item.highestSequence} dias`} </span> </p>
            </Text>
            <Selected data-test="today-habit-check-btn" onClick={() => done(item.id)} colorSelect={colorSelect}>
                {!loading ? <img src={Vector} alt={Vector} /> : <Oval height="50" width="50" color="#52B6FF" />}
            </Selected>
            {console.log(item)}
        </Container>
    )
}

const Container = styled.div`

    width: 90vw;
    height: 94px;
    display: flex;

    margin-bottom: 10px;
    border-radius: 5px;

    background-color: #FFFFFF;

    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px
   
`

const Selected = styled.div`

    width: 70px;
    height: 70px;
    background-color: ${props => props.colorSelect};

   display: flex;
   justify-content: center;
   align-items: center;

    border: 1px solid #E7E7E7;
    border-radius: 5px;
   
`
const Text = styled.div`
    width: 100%;
    height: 70px;
   
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;

    h1{
        
        font-size: 19px;
        line-height: 25px;
        color: #666666;
    }

    p{
        &:nth-child(2){
            span{
                color: ${props => props.colorSelect === "#8FC549" ? "#8FC549" : "#666666"}
            }
        }

        &:nth-child(3){
            span{
                color: ${props => props.igual ? "#8FC549" : "#666666"}
            }
        }

        font-size: 12px;
        line-height: 16px;

        color: #666666;

    }

    
    span:nth-child(1){
        
    }

    span:nth-child(2){
        color: ${props => props.igual ? "red" : "#666666"}
    }


`