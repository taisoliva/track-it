import styled from "styled-components";

export const ContainerToday = styled.div`
    width: 100vw;
    height: 81vh;
    position: relative;

    top:100px;
    display: flex;
    flex-direction: column;

    overflow: scroll;
  

    
`
export const ContentFixed = styled.div`

    width: 90vw;
    height: 50px;

    position: absolute;
    left: 20px;

    

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
        
        color: #126BA5;
    } 

    div{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;

        color: ${props => props.contador === 0 ? "#BABABA" : "#8FC549"};
    }

  

`
export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const ContainerTodayHabit = styled.div`
   

    width: 90vw;
    height: 72.7vh;

    position: absolute;

    top: 70px;
    left: 20px;

`



